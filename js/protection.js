// Typing Practice Protection System
(function() {
    'use strict';

    class TypingProtection {
        constructor() {
            this.key = this.generateKey();
            this.initProtection();
        }

        initProtection() {
            // 개발자 도구 감지
            this.detectDevTools();

            // 우클릭 방지
            this.preventRightClick();

            // 키보드 단축키 방지
            this.preventKeyboardShortcuts();

            // 콘솔 보호
            this.protectConsole();

            // 소스 코드 난독화
            this.obfuscateSource();

            // 무결성 검사
            this.integrityCheck();
        }

        generateKey() {
            return btoa(Date.now().toString() + Math.random().toString(36));
        }

        detectDevTools() {
            let devtools = { open: false, orientation: null };
            const threshold = 160;

            setInterval(() => {
                if (window.outerHeight - window.innerHeight > threshold ||
                    window.outerWidth - window.innerWidth > threshold) {
                    if (!devtools.open) {
                        devtools.open = true;
                        this.onDevToolsOpen();
                    }
                } else {
                    devtools.open = false;
                }
            }, 500);
        }

        onDevToolsOpen() {
            console.clear();
            console.log('%c보안 경고!', 'color: red; font-size: 30px; font-weight: bold;');
            console.log('%c이 콘솔은 개발자용입니다.', 'color: red; font-size: 16px;');
            console.log('%c무단 접근 시 법적 조치를 받을 수 있습니다.', 'color: red; font-size: 16px;');
            console.log('%c© 2025 큐레이터 단비', 'color: red; font-size: 14px;');

            // 중요 기능 비활성화
            const protectCheckbox = document.getElementById('protectApp');
            if (protectCheckbox && protectCheckbox.checked) {
                // 타이핑 영역 비활성화
                const typingArea = document.querySelector('.typing-area');
                if (typingArea) {
                    typingArea.style.pointerEvents = 'none';
                }

                // 보호 레이어 표시
                let protectionLayer = document.getElementById('protectionLayer');
                if (!protectionLayer) {
                    protectionLayer = document.createElement('div');
                    protectionLayer.id = 'protectionLayer';
                    document.body.appendChild(protectionLayer);
                }

                protectionLayer.style.display = 'block';
                protectionLayer.innerHTML = `
                    <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                         background: white; padding: 30px; border-radius: 10px; 
                         box-shadow: 0 0 20px rgba(0,0,0,0.3); z-index: 10000;">
                        <h2 style="color: red; margin-bottom: 15px;">🚨 보안 위반 감지</h2>
                        <p style="margin-bottom: 10px;">개발자 도구가 감지되어 앱이 잠겼습니다.</p>
                        <p style="margin-bottom: 20px;">페이지를 새로고침하여 다시 시도하세요.</p>
                        <p style="font-size: 12px; color: #666;">© 2025 큐레이터 단비</p>
                    </div>
                `;
            }
        }

        preventRightClick() {
            document.addEventListener('contextmenu', (e) => {
                e.preventDefault();
                alert('⚠️ 우클릭이 비활성화되어 있습니다.\n\n© 2025 큐레이터 단비');
                return false;
            });
        }

        preventKeyboardShortcuts() {
            document.addEventListener('keydown', (e) => {
                // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+U
                if (e.keyCode === 123 ||
                    (e.ctrlKey && e.shiftKey && (e.keyCode === 73 || e.keyCode === 74)) ||
                    (e.ctrlKey && e.keyCode === 85)) {
                    e.preventDefault();
                    alert('⚠️ 개발자 도구 사용이 제한되어 있습니다.\n\n© 2025 큐레이터 단비');
                    return false;
                }

                // Ctrl+S (저장 방지)
                if (e.ctrlKey && e.keyCode === 83) {
                    e.preventDefault();
                    alert('⚠️ 페이지 저장이 제한되어 있습니다.\n\n© 2025 큐레이터 단비');
                    return false;
                }
            });
        }

        protectConsole() {
            // 콘솔 메서드 재정의
            const methods = ['log', 'debug', 'info', 'warn', 'error', 'table', 'trace'];

            methods.forEach(method => {
                const original = console[method];
                console[method] = function() {
                    const protectCheckbox = document.getElementById('protectApp');
                    if (protectCheckbox && protectCheckbox.checked) {
                        return;
                    }
                    original.apply(console, arguments);
                };
            });
        }

        obfuscateSource() {
            // 소스 코드 난독화
            const scripts = document.querySelectorAll('script');
            scripts.forEach(script => {
                if (script.src && !script.src.includes('protection.js')) {
                    // 스크립트 URL에 버전 추가
                    const url = new URL(script.src);
                    url.searchParams.set('v', this.key);
                }
            });
        }

        integrityCheck() {
            // 주기적으로 DOM 무결성 검사
            setInterval(() => {
                // 핵심 요소들이 존재하는지 확인
                const criticalElements = [
                    'typingInput',
                    'textDisplay',
                    'startBtn'
                ];

                for (const id of criticalElements) {
                    if (!document.getElementById(id)) {
                        console.error('Critical element missing:', id);
                        location.reload();
                        break;
                    }
                }
            }, 5000);
        }

        // 데이터 암호화/복호화
        encrypt(data) {
            try {
                return btoa(encodeURIComponent(data).split('').reverse().join(''));
            } catch (e) {
                return data;
            }
        }

        decrypt(data) {
            try {
                return decodeURIComponent(atob(data).split('').reverse().join(''));
            } catch (e) {
                return data;
            }
        }

        init() {
            // 보호 시스템 초기화
            console.log('%c타이핑 마스터 보호 시스템 활성화', 'color: green; font-weight: bold;');
            console.log('%c© 2025 큐레이터 단비', 'color: #666; font-size: 12px;');
        }
    }

    // 전역 객체로 등록
    window.TypingProtection = new TypingProtection();
    window.TypingProtection.init();
})();

// Anti-debugging
(function() {
    const element = new Image();
    Object.defineProperty(element, 'id', {
        get: function() {
            window.TypingProtection.onDevToolsOpen();
        }
    });
    console.log(element);
})();

// 추가 보안 레이어
(function() {
    // 텍스트 선택 방지
    document.addEventListener('selectstart', function(e) {
        if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
            e.preventDefault();
        }
    });

    // 드래그 방지
    document.addEventListener('dragstart', function(e) {
        e.preventDefault();
        return false;
    });

    // 프린트 방지
    window.addEventListener('beforeprint', function(e) {
        alert('⚠️ 인쇄가 제한되어 있습니다.\n\n© 2025 큐레이터 단비');
        return false;
    });
})();
