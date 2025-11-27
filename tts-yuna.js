/*! tts-yuna.js | Vanilla JS Korean TTS helper | default: Yuna, rate=1, pitch=0.5, volume=1 */
;(function (global) {
    'use strict';

    const synth = window.speechSynthesis;
    if (!synth) {
        console.warn('[KoTTS] SpeechSynthesis is not supported in this browser.');
    }

    const KoTTS = {
        /** 우선 선택할 음성 이름 키워드 */
        preferVoiceNames: ['Yuna', '유나'],

        /** 기본 파라미터 */
        defaults: { rate: 1, pitch: 0.5, volume: 1 },

        /** 상태 출력 엘리먼트 */
        statusEl: null,

        /** 실제 선택된 음성 객체 */
        voice: null,

        /** 내부 캐시 */
        _voices: [],

        setStatus(msg) {
            if (this.statusEl) this.statusEl.textContent = msg;
        },

        waitForVoices(timeoutMs = 3500) {
            return new Promise(resolve => {
                const start = Date.now();
                const tick = () => {
                    const list = synth.getVoices() || [];
                    if (list.length > 0) return resolve(list);
                    if (Date.now() - start > timeoutMs) return resolve(list);
                    setTimeout(tick, 500);
                };
                tick();
            });
        },

        _refreshVoices() {
            this._voices = synth.getVoices() || [];
            return this._voices;
        },

        _pickPreferredVoice(voices, preferNames) {
            const lc = s => (s || '').toLowerCase();
            // 1) preferNames 포함(Yuna/유나 등)
            for (const key of preferNames) {
                const v = voices.find(v =>
                    lc(v.name).includes(lc(key)) || lc(v.voiceURI).includes(lc(key))
                );
                if (v) return v;
            }
            // 2) ko*
            const ko = voices.find(v => lc(v.lang).startsWith('ko'));
            if (ko) return ko;
            // 3) 없음
            return null;
        },

        async init(options = {}) {
            const { statusEl, preferVoice, defaults } = options;
            this.statusEl = typeof statusEl === 'string'
                ? document.querySelector(statusEl)
                : (statusEl || null);

            if (preferVoice) {
                this.preferVoiceNames = Array.isArray(preferVoice) ? preferVoice : [preferVoice];
            }
            if (defaults) Object.assign(this.defaults, defaults);

            if ('speechSynthesis' in window && typeof synth.onvoiceschanged !== 'undefined') {
                synth.onvoiceschanged = () => this._refreshVoices();
            }

            await this.waitForVoices();
            const voices = this._refreshVoices();
            this.voice = this._pickPreferredVoice(voices, this.preferVoiceNames);

            if (this.voice) {
                this.setStatus(`음성: ${this.voice.name} — ${this.voice.lang}`);
            } else {
                this.setStatus('한국어 전용 음성을 찾지 못했습니다. (ko-KR로 재생 시도)');
            }
        },

        listVoices() {
            return (synth.getVoices() || []).map(v => ({
                name: v.name, lang: v.lang, uri: v.voiceURI, default: !!v.default
            }));
        },

        setVoiceByName(nameOrPart) {
            const lc = (nameOrPart || '').toLowerCase();
            const v = (synth.getVoices() || []).find(x => x.name.toLowerCase().includes(lc));
            if (v) this.voice = v;
            return !!v;
        },

        configure({ rate, pitch, volume } = {}) {
            if (rate != null) this.defaults.rate = rate;
            if (pitch != null) this.defaults.pitch = pitch;
            if (volume != null) this.defaults.volume = volume;
            return this.defaults;
        },

        splitText(text) {
            if (!text) return [];
            // 문장 단위 → 200자 초과는 추가 분할
            const raw = (text.match(/[^.!?。！？\n]+[.!?。！？…]?/g) || [text])
            .map(s => s.trim())
            .filter(Boolean);
            const parts = [];
            for (const s of raw) {
                if (s.length <= 200) { parts.push(s); continue; }
                let cur = s;
                while (cur.length > 200) {
                    let cut = cur.lastIndexOf(' ', 200);
                    if (cut < 80) cut = 200;
                    parts.push(cur.slice(0, cut).trim());
                    cur = cur.slice(cut).trim();
                }
                if (cur) parts.push(cur);
            }
            return parts;
        },

        /** 텍스트 재생 (Promise 반환: 완료 시 resolve) */
        async speak(text) {
            if (!text || !text.trim()) {
                this.setStatus('읽을 텍스트가 없습니다.');
                return;
            }

            // 혹시 아직 로드 전이라면 한 번 더 대기/선택
            if (!this.voice) {
                await this.waitForVoices();
                const voices = this._refreshVoices();
                this.voice = this._pickPreferredVoice(voices, this.preferVoiceNames);
            }

            try { synth.cancel(); } catch (e) {}

            const parts = this.splitText(text);
            if (parts.length <= 1) {
                return new Promise(resolve => {
                    const u = this._makeUtterance(text, () => resolve());
                    synth.speak(u);
                });
            }

            // 큐잉
            return new Promise(resolve => {
                const playNext = () => {
                    if (parts.length === 0) {
                        this.setStatus('완료');
                        return resolve();
                    }
                    const seg = parts.shift();
                    const u = this._makeUtterance(seg, playNext);
                    u.onstart = () => this.setStatus(`읽는 중… (남은 ${parts.length + 1}개)`);
                    synth.speak(u);
                };
                playNext();
            });
        },

        _makeUtterance(text, onend) {
            const u = new SpeechSynthesisUtterance(text);
            if (this.voice) u.voice = this.voice;
            u.lang = (this.voice && this.voice.lang) || 'ko-KR';
            u.rate = this.defaults.rate;
            u.pitch = this.defaults.pitch;
            u.volume = this.defaults.volume;

            u.onstart = () => this.setStatus('읽는 중…');
            u.onend = () => { if (onend) onend(); };
            u.onerror = (e) => {
                console.error('[KoTTS] onerror:', e);
                this.setStatus('재생 오류가 발생했습니다. (콘솔 확인)');
                if (onend) onend(); // 오류 시에도 다음 파트로 진행
            };
            return u;
        },

        pause() {
            if (synth.speaking && !synth.paused) synth.pause();
            this.setStatus('일시정지');
        },

        resume() {
            if (synth.paused) synth.resume();
            this.setStatus('다시재생 중…');
        },

        stop() {
            try { synth.cancel(); } catch (e) {}
            this.setStatus('중지됨');
        },

        /** textarea에서 드래그한 선택 영역만 읽기 (없으면 전체) */
        speakFromTextarea(textarea) {
            const el = (typeof textarea === 'string') ? document.querySelector(textarea) : textarea;
            if (!el) return;
            const { selectionStart: s, selectionEnd: e, value } = el;
            const picked = (s !== e) ? value.substring(s, e) : value;
            return this.speak(picked);
        }
    };

    global.KoTTS = KoTTS;
})(window);
