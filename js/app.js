// 타이핑 연습 앱 - 완벽히 작동하는 최종 버전
class TypingPracticeApp {
    constructor() {
        this.initializeVariables();
        this.loadTexts();
        this.initializeElements();
        this.attachEventListeners();
        this.loadSettings();
        this.loadHistory();
        this.loadAchievements();
        this.initializeKeyboard();
        this.startTipsCarousel();
    }

    initializeVariables() {
        // 상태 변수
        this.isTyping = false;
        this.isPaused = false;
        this.startTime = null;
        this.endTime = null;
        this.currentTextIndex = 0;
        this.currentCharIndex = 0;
        this.totalKeystrokes = 0;
        this.correctKeystrokes = 0;
        this.errors = 0;
        this.timer = null;
        this.gameTimer = null;
        this.typedText = '';
        this.isComposing = false;
        this.currentText = '';
        this.streak = 0;
        this.wordCount = 0;
        this.completedWords = 0;

        // 게임 모드 변수
        this.gameMode = false;
        this.lives = 3;
        this.score = 0;
        this.combo = 1;
        this.fallingWords = [];
        this.gameInput = null;

        // 설정
        this.settings = {
            difficulty: 'beginner',
            language: 'korean',
            mode: 'time',
            duration: 60,
            soundEnabled: true,
            keyboardVisible: true,
            theme: 'light',
            practiceMode: 'sentence'
        };

        // 텍스트 데이터
        this.texts = {
            korean: {
                beginner: [],
                intermediate: [],
                advanced: [],
                expert: []
            },
            english: {
                beginner: [],
                intermediate: [],
                advanced: [],
                expert: []
            },
            mixed: {
                beginner: [],
                intermediate: [],
                advanced: [],
                expert: []
            }
        };

        // 자판 연습 데이터
        this.keyboardPractice = {
            korean: {
                basic: [],
                shift: [],
                numbers: [],
                special: []
            },
            english: {
                basic: [],
                shift: [],
                numbers: [],
                special: []
            }
        };

        // 통계 데이터
        this.sessionStats = {
            wpmHistory: [],
            accuracyHistory: [],
            timeStamps: []
        };

        // 도전 과제
        this.achievements = {
            speedDemon: {
                id: 'speedDemon',
                name: '스피드 데몬',
                desc: 'WPM 100 달성',
                icon: '⚡',
                unlocked: false,
                progress: 0,
                target: 100
            },
            accuracy100: {
                id: 'accuracy100',
                name: '완벽주의자',
                desc: '정확도 100% 달성',
                icon: '🎯',
                unlocked: false,
                progress: 0,
                target: 100
            },
            marathon: {
                id: 'marathon',
                name: '마라토너',
                desc: '5분 연속 타이핑',
                icon: '🏃',
                unlocked: false,
                progress: 0,
                target: 300
            },
            streak10: {
                id: 'streak10',
                name: '연속 타자',
                desc: '10회 연속 성공',
                icon: '🔥',
                unlocked: false,
                progress: 0,
                target: 10
            },
            nightOwl: {
                id: 'nightOwl',
                name: '올빼미',
                desc: '밤 10시 이후 연습',
                icon: '🦉',
                unlocked: false,
                progress: 0,
                target: 1
            },
            explorer: {
                id: 'explorer',
                name: '탐험가',
                desc: '모든 난이도 체험',
                icon: '🗺️',
                unlocked: false,
                progress: 0,
                target: 4
            }
        };
    }

    loadTexts() {
        // 한국어 텍스트
        this.texts.korean.beginner = [
            "가나다라 마바사 아자차카 타파하",
            "안녕하세요. 반갑습니다! 좋은 하루 되세요.",
            "오늘 날씨가 정말 좋네요. 산책하기 좋은 날입니다!",
            "커피 한 잔의 여유를 즐기며, 하루를 시작합니다.",
            "책을 읽으면 마음이 편안해집니다. 당신은 어떤가요?",
            "아침, 점심, 저녁을 규칙적으로 먹는 것이 중요합니다.",
            "운동을 하면 건강해집니다! 오늘도 열심히 운동했나요?",
            "친구와 함께하는 시간은 즐겁습니다. 우정은 소중하죠.",
            "음악을 들으면 기분이 좋아집니다. 어떤 음악을 좋아하세요?",
            "영화를 보는 것은 재미있는 취미입니다. 최근에 본 영화는?"
        ];

        this.texts.korean.intermediate = [
            "타이핑 연습을 통해 속도와 정확도를 향상시킬 수 있습니다. 꾸준한 연습이 중요합니다!",
            "컴퓨터 키보드를 빠르고 정확하게 타이핑하는 것은 현대 사회에서 필수적인 기술입니다.",
            "올바른 자세와 손가락 위치를 유지하면서 타이핑하면 피로를 줄일 수 있습니다.",
            "타이핑 속도를 높이려면 화면을 보면서 타이핑하는 습관을 기르는 것이 좋습니다.",
            "이메일 주소는 user@example.com 형식으로 작성합니다. 올바른 형식인지 확인하세요!",
            "전화번호는 010-1234-5678 형식으로 입력하세요. 하이픈(-)을 잊지 마세요.",
            "오늘의 할 일: 1) 운동하기 2) 책 읽기 3) 친구 만나기 4) 영화 보기",
            "프로그래밍 언어에는 Python, Java, C++, JavaScript 등이 있습니다.",
            "웹사이트 주소는 https://www.example.com 형식입니다. 정확히 입력하세요!",
            "날짜는 2024년 12월 25일 또는 2024-12-25 형식으로 표기합니다."
        ];

        this.texts.korean.advanced = [
            "효율적인 타이핑을 위해서는 홈 포지션을 정확히 익히고, 각 손가락이 담당하는 키를 명확히 알아야 합니다. 처음에는 느리더라도 정확한 운지법을 익히는 것이 장기적으로 더 유리합니다!",
            "프로그래밍을 할 때는 특수 문자와 숫자를 자주 사용하므로, 이러한 키들도 빠르게 입력할 수 있도록 연습해야 합니다. Shift 키와 함께 사용하는 특수 문자들의 위치를 외우는 것이 중요합니다.",
            "다양한 문장부호를 연습해봅시다: 마침표(.), 쉼표(,), 느낌표(!), 물음표(?), 콜론(:), 세미콜론(;), 따옴표(\"), 작은따옴표('), 괄호(), 대괄호[], 중괄호{}",
            "수식을 입력할 때는 정확성이 중요합니다: 2 + 2 = 4, 10 - 5 = 5, 3 × 4 = 12, 20 ÷ 4 = 5, 2² = 4, √16 = 4",
            "이메일을 작성할 때 자주 사용하는 표현들: 안녕하세요, ~님. 메일 잘 받았습니다. 첨부 파일을 확인해 주세요. 감사합니다. 좋은 하루 되세요!"
        ];

        this.texts.korean.expert = [
            "타이핑 마스터가 되기 위해서는 단순히 속도만 추구해서는 안 됩니다. 정확도와 일관성이 더 중요하며, 장시간 타이핑해도 피로하지 않는 인체공학적 자세를 유지해야 합니다. 또한 다양한 텍스트 유형(한글, 영문, 숫자, 특수문자)을 균형있게 연습하여 어떤 상황에서도 빠르고 정확하게 타이핑할 수 있어야 합니다!",
            "전문가 수준의 타이핑 실력을 갖추려면 분당 80단어 이상의 속도와 98% 이상의 정확도를 유지할 수 있어야 합니다. 이를 위해서는 매일 꾸준한 연습과 함께 자신의 약점을 파악하고 개선하는 노력이 필요합니다. 특히 자주 틀리는 단어나 문자 조합을 집중적으로 연습하는 것이 효과적입니다."
        ];

        // 영어 텍스트
        this.texts.english.beginner = [
            "The quick brown fox jumps over the lazy dog.",
            "Hello, world! Welcome to typing practice.",
            "Practice makes perfect. Keep trying!",
            "Type with all your fingers for best results.",
            "Good typing skills are very useful in modern life.",
            "Today is a beautiful day. Let's go for a walk!",
            "Coffee or tea? What's your preference?",
            "Reading books is a great hobby. Do you agree?",
            "Music makes everything better! What's your favorite song?",
            "Friends are important. Cherish your friendships!"
        ];

        this.texts.english.intermediate = [
            "Typing is an essential skill in today's digital world. Regular practice can significantly improve your speed and accuracy!",
            "Maintaining proper posture while typing can prevent repetitive strain injuries and improve your overall comfort.",
            "Touch typing allows you to type without looking at the keyboard, which increases both speed and productivity.",
            "Learning to type efficiently can save you countless hours over your lifetime and make computer work much easier.",
            "Email addresses follow this format: username@domain.com. Make sure to include the @ symbol!",
            "Phone numbers in the US are formatted as: (123) 456-7890 or 123-456-7890.",
            "Today's agenda: 1) Morning meeting at 9:00 AM 2) Lunch break at 12:30 PM 3) Project deadline at 5:00 PM",
            "Common programming languages include: Python, JavaScript, Java, C++, Ruby, and Go.",
            "Website URLs start with https:// or http:// followed by the domain name.",
            "Dates can be written as: December 25, 2024 or 12/25/2024 or 2024-12-25."
        ];

        this.texts.english.advanced = [
            "Advanced typing skills require not only speed but also consistency and accuracy. Professional typists can maintain speeds of over 80 words per minute with near-perfect accuracy. This level of proficiency comes from dedicated practice and proper technique!",
            "When programming, you'll frequently use special characters like brackets {}, parentheses (), and symbols such as @, #, $, %, ^, &, *, and more. Mastering these characters is essential for efficient coding and can significantly boost your productivity as a developer.",
            "Let's practice various punctuation marks: period (.), comma (,), exclamation mark (!), question mark (?), colon (:), semicolon (;), quotation marks (\"), apostrophe ('), parentheses (), square brackets [], curly braces {}."
        ];

        this.texts.english.expert = [
            "Becoming a typing expert requires dedication, practice, and attention to detail. It's not just about raw speed; it's about maintaining high accuracy while typing at speed, being able to type for extended periods without fatigue, and adapting to different keyboard layouts and typing environments. Expert typists often achieve speeds exceeding 100 words per minute while maintaining accuracy rates above 98%. They can seamlessly switch between different types of content, from regular prose to technical documentation filled with numbers and special characters!",
            "The journey to typing mastery involves understanding the biomechanics of typing, developing muscle memory for every key combination, and cultivating a rhythm that allows for sustained high-speed input. Expert typists don't just type fast; they type efficiently, with minimal movement and maximum comfort."
        ];

        // 혼합 텍스트
        this.texts.mixed.beginner = [
            "Hello! 안녕하세요. How are you? 잘 지내세요?",
            "Today is 2024년 12월 25일. Merry Christmas!",
            "Email: user@example.com / 전화: 010-1234-5678",
            "Price: $100 = 130,000원 (환율: 1,300원)",
            "Website: www.example.co.kr (한국 사이트)"
        ];

        this.texts.mixed.intermediate = [
            "JavaScript는 웹 개발에서 가장 popular한 programming language입니다. HTML, CSS와 함께 front-end 개발의 핵심 기술입니다!",
            "AI(인공지능)와 Machine Learning은 21세기의 가장 중요한 technology trend 중 하나입니다. 많은 기업들이 AI를 활용하고 있습니다.",
            "Social media platforms like Facebook, Instagram, Twitter는 전 세계 billions of users를 보유하고 있습니다. 한국에서는 KakaoTalk이 가장 인기 있습니다!"
        ];

        this.texts.mixed.advanced = [
            "Modern web development requires knowledge of various technologies: HTML5, CSS3, JavaScript (ES6+), React.js, Node.js, MongoDB, etc. 풀스택 개발자가 되려면 front-end와 back-end 모두 능숙해야 합니다. Version control systems like Git은 필수이며, deployment는 AWS, Google Cloud, 또는 Naver Cloud Platform을 사용할 수 있습니다!",
            "The COVID-19 pandemic has accelerated digital transformation worldwide. 재택근무(remote work)가 new normal이 되었고, video conferencing tools like Zoom, Microsoft Teams가 필수가 되었습니다. 한국의 많은 기업들도 flexible working arrangements를 도입하고 있으며, work-life balance가 중요한 가치로 자리잡았습니다."
        ];

        this.texts.mixed.expert = [
            "Advanced programming concepts include: Object-Oriented Programming (OOP), Functional Programming (FP), Design Patterns (Singleton, Factory, Observer, etc.), SOLID principles, Test-Driven Development (TDD), Continuous Integration/Continuous Deployment (CI/CD). 한국의 IT 기업들도 이러한 best practices를 적극적으로 도입하고 있으며, 특히 Agile methodology와 DevOps culture가 널리 퍼지고 있습니다. Code review, pair programming, 그리고 documentation의 중요성도 강조되고 있습니다. Modern frameworks like React.js, Vue.js, Angular는 component-based architecture를 사용하며, state management는 Redux, MobX, 또는 Vuex를 통해 처리합니다!"
        ];

        // 자판 연습 데이터
        this.keyboardPractice.korean.basic = [
            "ㅁㅁㅁ ㄴㄴㄴ ㅇㅇㅇ ㄹㄹㄹ",
            "ㅂㅂㅂ ㅈㅈㅈ ㄷㄷㄷ ㄱㄱㄱ ㅅㅅㅅ",
            "ㅋㅋㅋ ㅌㅌㅌ ㅊㅊㅊ ㅍㅍㅍ",
            "ㅗㅗㅗ ㅓㅓㅓ ㅏㅏㅏ ㅣㅣㅣ",
            "ㅛㅛㅛ ㅕㅕㅕ ㅑㅑㅑ ㅐㅐㅐ ㅔㅔㅔ",
            "ㅜㅜㅜ ㅠㅠㅠ ㅡㅡㅡ",
            "ㅁㄴㅇㄹ ㅂㅈㄷㄱㅅ ㅋㅌㅊㅍ",
            "ㅗㅓㅏㅣ ㅛㅕㅑㅐㅔ ㅜㅠㅡ",
            "마나다라 바자다가사",
            "모노도로 보조도고소"
        ];

        this.keyboardPractice.korean.shift = [
            "ㅃㅃㅃ ㅉㅉㅉ ㄸㄸㄸ ㄲㄲㄲ ㅆㅆㅆ",
            "ㅒㅒㅒ ㅖㅖㅖ",
            "빠짜따까싸",
            "뽀쪼또꼬쏘",
            "삐찌띠끼씨",
            "뿌쭈뚜꾸쑤",
            "빼째때깨쌔"
        ];

        this.keyboardPractice.korean.numbers = [
            "1234567890",
            "111 222 333 444 555",
            "666 777 888 999 000",
            "123 456 789 012 345",
            "1월 2월 3월 4월 5월",
            "10시 20분 30초",
            "100원 200원 300원",
            "1,000원 2,000원 3,000원"
        ];

        this.keyboardPractice.korean.special = [
            "!@#$%^&*()",
            ".,;:?!",
            "\"\" '' ``",
            "[]{}()",
            "<>?/",
            "+-*/=",
            "_-+=",
            "~`|\\",
            "user@example.com",
            "010-1234-5678"
        ];

        this.keyboardPractice.english.basic = [
            "asdf jkl;",
            "aaa sss ddd fff",
            "jjj kkk lll ;;;",
            "asdf asdf asdf",
            "jkl; jkl; jkl;",
            "qwer uiop",
            "qqq www eee rrr",
            "uuu iii ooo ppp",
            "zxcv nm,.",
            "the quick brown fox"
        ];

        this.keyboardPractice.english.shift = [
            "ASDF JKL:",
            "AAA SSS DDD FFF",
            "JJJ KKK LLL :::",
            "QWER UIOP",
            "The Quick Brown Fox",
            "HELLO WORLD"
        ];

        this.keyboardPractice.english.numbers = [
            "1234567890",
            "111 222 333 444 555",
            "January 1st",
            "February 2nd",
            "10:20:30 AM",
            "$100 $200 $300"
        ];

        this.keyboardPractice.english.special = [
            "!@#$%^&*()",
            ".,;:?!",
            "\"\" '' ``",
            "[]{}()",
            "<>?/",
            "+-*/=",
            "_-+=",
            "~`|\\",
            "user@example.com",
            "(555) 123-4567"
        ];
    }

    initializeElements() {
        // 주요 요소들
        this.elements = {
            // 통계
            currentWPM: document.getElementById('currentWPM'),
            currentAccuracy: document.getElementById('currentAccuracy'),
            timeElapsed: document.getElementById('timeElapsed'),
            streak: document.getElementById('streak'),

            // 설정
            difficulty: document.getElementById('difficulty'),
            language: document.getElementById('language'),
            mode: document.getElementById('mode'),
            duration: document.getElementById('duration'),
            practiceMode: document.getElementById('practiceMode'),
            keyboardType: document.getElementById('keyboardType'),

            // 타이핑 영역
            textDisplay: document.getElementById('textDisplay'),
            typingInput: document.getElementById('typingInput'),

            // 버튼
            startBtn: document.getElementById('startBtn'),
            resetBtn: document.getElementById('resetBtn'),
            pauseBtn: document.getElementById('pauseBtn'),

            // 진행 상황
            progressBar: document.getElementById('progressBar'),
            progressText: document.getElementById('progressText'),

            // 모달
            resultModal: document.getElementById('resultModal'),
            customTextModal: document.getElementById('customTextModal'),

            // 결과
            finalWPM: document.getElementById('finalWPM'),
            finalAccuracy: document.getElementById('finalAccuracy'),
            totalKeystrokes: document.getElementById('totalKeystrokes'),
            totalErrors: document.getElementById('totalErrors'),

            // 기타
            keyboardVisual: document.getElementById('keyboardVisual'),
            protectApp: document.getElementById('protectApp'),
            themeToggle: document.getElementById('themeToggle'),
            soundToggle: document.getElementById('soundToggle'),

            // 게임 모드
            gameModeUI: document.getElementById('gameModeUI'),
            lives: document.getElementById('lives'),
            score: document.getElementById('score'),
            combo: document.getElementById('combo'),
            fallingWords: document.getElementById('fallingWords'),

            // 차트
            resultChart: document.getElementById('resultChart'),
            historyChart: document.getElementById('historyChart'),

            // 추가 UI
            keyboardPracticeOptions: document.getElementById('keyboardPracticeOptions'),
            difficultyGroup: document.getElementById('difficultyGroup'),
            durationLabel: document.getElementById('durationLabel')
        };

        // 오디오 요소
        this.audio = {
            keySound: document.getElementById('keySound'),
            errorSound: document.getElementById('errorSound'),
            successSound: document.getElementById('successSound')
        };

        // 게임 모드 입력
        this.gameInput = document.getElementById('gameInput');
    }

    attachEventListeners() {
        // 시작/리셋 버튼
        this.elements.startBtn.addEventListener('click', () => this.startTyping());
        this.elements.resetBtn.addEventListener('click', () => this.resetTyping());
        this.elements.pauseBtn.addEventListener('click', () => this.togglePause());

        // 전역 엔터키 이벤트
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !e.shiftKey && !e.ctrlKey) {
                // 모달이 열려있을 때
                if (this.elements.resultModal.classList.contains('active')) {
                    e.preventDefault();
                    location.reload();
                    return;
                }

                // 사용자 정의 텍스트 모달이 열려있을 때
                if (this.elements.customTextModal.classList.contains('active')) {
                    if (document.activeElement !== document.getElementById('customTextInput')) {
                        e.preventDefault();
                        this.useCustomText();
                    }
                    return;
                }

                // 타이핑 중이 아닐 때
                if (!this.isTyping && !this.elements.startBtn.disabled) {
                    e.preventDefault();
                    this.startTyping();
                }
            }
        });

        // 설정 변경
        this.elements.difficulty.addEventListener('change', (e) => {
            this.settings.difficulty = e.target.value;
            this.saveSettings();
        });

        this.elements.language.addEventListener('change', (e) => {
            this.settings.language = e.target.value;
            this.saveSettings();
        });

        this.elements.mode.addEventListener('change', (e) => {
            this.settings.mode = e.target.value;
            this.saveSettings();
            this.updateModeUI();
        });

        this.elements.duration.addEventListener('change', (e) => {
            this.settings.duration = parseInt(e.target.value);
            this.saveSettings();
        });

        // 연습 모드 변경
        if (this.elements.practiceMode) {
            this.elements.practiceMode.addEventListener('change', (e) => {
                this.settings.practiceMode = e.target.value;
                this.updatePracticeModeUI();
                this.saveSettings();
            });
        }

        // 자판 연습 타입 변경
        if (this.elements.keyboardType) {
            this.elements.keyboardType.addEventListener('change', (e) => {
                // 변경 시 아무 동작 없음 (시작할 때 적용)
            });
        }

        // 타이핑 입력
        this.elements.typingInput.addEventListener('input', (e) => {
            if (!this.isComposing) {
                this.handleTyping(e);
            }
        });

        this.elements.typingInput.addEventListener('compositionstart', () => {
            this.isComposing = true;
        });

        this.elements.typingInput.addEventListener('compositionend', (e) => {
            this.isComposing = false;
            this.handleTyping(e);
        });

        this.elements.typingInput.addEventListener('keydown', (e) => {
            this.handleKeyDown(e);
        });

        // 테마 토글
        this.elements.themeToggle.addEventListener('click', () => this.toggleTheme());

        // 소리 토글
        this.elements.soundToggle.addEventListener('click', () => this.toggleSound());

        // 모달 닫기
        const closeResultModal = document.getElementById('closeResultModal');
        if (closeResultModal) {
            closeResultModal.addEventListener('click', () => {
                this.elements.resultModal.classList.remove('active');
            });
        }

        const closeCustomModal = document.getElementById('closeCustomModal');
        if (closeCustomModal) {
            closeCustomModal.addEventListener('click', () => {
                this.elements.customTextModal.classList.remove('active');
            });
        }

        // 새로운 연습 버튼
        const newPracticeBtn = document.getElementById('newPracticeBtn');
        if (newPracticeBtn) {
            newPracticeBtn.addEventListener('click', () => {
                location.reload();
            });
        }

        // 결과 공유
        const shareResultBtn = document.getElementById('shareResult');
        if (shareResultBtn) {
            shareResultBtn.addEventListener('click', () => {
                this.shareResult();
            });
        }

        // 사용자 정의 텍스트
        const useCustomTextBtn = document.getElementById('useCustomText');
        if (useCustomTextBtn) {
            useCustomTextBtn.addEventListener('click', () => {
                this.useCustomText();
            });
        }

        const cancelCustomTextBtn = document.getElementById('cancelCustomText');
        if (cancelCustomTextBtn) {
            cancelCustomTextBtn.addEventListener('click', () => {
                this.elements.customTextModal.classList.remove('active');
            });
        }

        // 팁 네비게이션
        const prevTipBtn = document.getElementById('prevTip');
        if (prevTipBtn) {
            prevTipBtn.addEventListener('click', () => {
                this.navigateTip(-1);
            });
        }

        const nextTipBtn = document.getElementById('nextTip');
        if (nextTipBtn) {
            nextTipBtn.addEventListener('click', () => {
                this.navigateTip(1);
            });
        }

        // 탭 버튼
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.addEventListener('click', (e) => this.switchTab(e.target));
        });

        // 게임 모드 입력
        if (this.gameInput) {
            this.gameInput.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') {
                    this.handleGameInput();
                }
            });
        }

        // 게임 종료 버튼
        const exitGameBtn = document.getElementById('exitGameBtn');
        if (exitGameBtn) {
            exitGameBtn.addEventListener('click', () => {
                this.confirmExitGame();
            });
        }

        // ESC 키로 게임 종료
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.gameMode) {
                e.preventDefault();
                this.confirmExitGame();
            }
        });

        // 윈도우 리사이즈
        window.addEventListener('resize', () => this.handleResize());
    }

    updatePracticeModeUI() {
        const mode = this.settings.practiceMode;

        if (mode === 'keyboard' && this.elements.keyboardPracticeOptions && this.elements.difficultyGroup) {
            this.elements.keyboardPracticeOptions.style.display = 'block';
            this.elements.difficultyGroup.style.display = 'none';
        } else if (this.elements.keyboardPracticeOptions && this.elements.difficultyGroup) {
            this.elements.keyboardPracticeOptions.style.display = 'none';
            this.elements.difficultyGroup.style.display = 'block';
        }
    }

    startTyping() {
        if (this.settings.mode === 'custom') {
            this.elements.customTextModal.classList.add('active');
            return;
        }

        if (this.settings.mode === 'game') {
            this.startGameMode();
            return;
        }

        this.isTyping = true;
        this.isPaused = false;
        this.startTime = Date.now();
        this.currentCharIndex = 0;
        this.totalKeystrokes = 0;
        this.correctKeystrokes = 0;
        this.errors = 0;
        this.typedText = '';
        this.completedWords = 0;

        // 단어 모드일 경우 설정
        if (this.settings.mode === 'words') {
            this.wordCount = this.settings.duration;
        }

        // UI 업데이트
        this.elements.typingInput.disabled = false;
        this.elements.typingInput.value = '';
        this.elements.typingInput.focus();
        this.elements.startBtn.disabled = true;
        this.elements.pauseBtn.disabled = false;

        // 텍스트 로드
        this.loadNewText();

        // 타이머 시작
        this.startTimer();

        // 키보드 표시
        if (this.settings.keyboardVisible) {
            this.elements.keyboardVisual.classList.add('active');
        }

        // 세션 통계 초기화
        this.sessionStats = {
            wpmHistory: [],
            accuracyHistory: [],
            timeStamps: []
        };
    }

    resetTyping() {
        this.isTyping = false;
        this.isPaused = false;
        this.currentCharIndex = 0;
        this.typedText = '';
        this.completedWords = 0;

        // 타이머 정지
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

        // UI 리셋
        this.elements.typingInput.disabled = true;
        this.elements.typingInput.value = '';
        this.elements.startBtn.disabled = false;
        this.elements.pauseBtn.disabled = true;
        this.elements.progressBar.style.width = '0%';
        this.elements.progressText.textContent = '0%';

        // 통계 리셋
        this.elements.currentWPM.textContent = '0';
        this.elements.currentAccuracy.textContent = '100%';
        this.elements.timeElapsed.textContent = '0:00';
        this.elements.streak.textContent = '0';

        // 텍스트 표시 리셋
        this.elements.textDisplay.innerHTML = '<div class="loading-text">시작 버튼을 눌러 타이핑을 시작하세요 (Enter 키 사용 가능)</div>';

        // 키보드 숨기기
        this.elements.keyboardVisual.classList.remove('active');
    }

    togglePause() {
        if (!this.isTyping) return;

        this.isPaused = !this.isPaused;

        if (this.isPaused) {
            this.elements.pauseBtn.innerHTML = '<i class="fas fa-play"></i> 계속';
            this.elements.typingInput.disabled = true;
            if (this.timer) {
                clearInterval(this.timer);
            }
        } else {
            this.elements.pauseBtn.innerHTML = '<i class="fas fa-pause"></i> 일시정지';
            this.elements.typingInput.disabled = false;
            this.elements.typingInput.focus();
            this.startTimer();
        }
    }

    loadNewText() {
        const { language, difficulty, practiceMode } = this.settings;

        if (practiceMode === 'keyboard') {
            // 자판 연습 모드
            const keyboardType = this.elements.keyboardType?.value || 'basic';
            const practiceArray = this.keyboardPractice[language][keyboardType];

            if (!practiceArray || practiceArray.length === 0) {
                this.currentText = "연습 텍스트를 불러올 수 없습니다.";
            } else {
                const randomIndex = Math.floor(Math.random() * practiceArray.length);
                this.currentText = practiceArray[randomIndex];
            }
        } else {
            // 일반 문장 연습 모드
            const textArray = this.texts[language][difficulty];

            if (!textArray || textArray.length === 0) {
                this.currentText = "텍스트를 불러올 수 없습니다.";
            } else {
                if (this.settings.mode === 'words') {
                    // 단어 수 모드: 여러 문장을 결합하여 목표 단어 수 만큼 제공
                    const targetWords = this.settings.duration;
                    let combinedText = '';
                    let currentWords = 0;

                    while (currentWords < targetWords) {
                        const randomIndex = Math.floor(Math.random() * textArray.length);
                        const sentence = textArray[randomIndex];
                        combinedText += sentence + ' ';

                        // 단어 수 계산 (공백으로 구분)
                        const wordsInSentence = sentence.trim().split(/\s+/).length;
                        currentWords += wordsInSentence;
                    }

                    this.currentText = combinedText.trim();
                } else {
                    // 기본 모드: 하나의 문장 선택
                    const randomIndex = Math.floor(Math.random() * textArray.length);
                    this.currentText = textArray[randomIndex];
                }
            }
        }

        // 입력 필드 초기화
        this.elements.typingInput.value = '';
        this.typedText = '';
        this.currentCharIndex = 0;
        this.displayText();
    }

    displayText() {
        this.elements.textDisplay.innerHTML = '';

        // 각 문자를 span으로 감싸서 표시
        this.currentText.split('').forEach((char, index) => {
            const span = document.createElement('span');
            span.className = 'char';
            span.textContent = char;
            if (index === 0) {
                span.classList.add('current');
            }
            this.elements.textDisplay.appendChild(span);
        });

        // 다음 키 표시
        this.updateKeyboardHighlight();
    }

    handleTyping(e) {
        if (!this.isTyping || this.isPaused) return;

        const inputValue = e.target.value;
        const chars = this.elements.textDisplay.querySelectorAll('.char');

        // 입력된 텍스트 전체를 검사
        for (let i = 0; i < inputValue.length && i < this.currentText.length; i++) {
            const typedChar = inputValue[i];
            const expectedChar = this.currentText[i];

            // 이미 처리된 문자는 건너뛰기
            if (i < this.typedText.length) {
                continue;
            }

            // 새로 입력된 문자 처리
            this.totalKeystrokes++;

            if (typedChar === expectedChar) {
                this.correctKeystrokes++;
                chars[i].classList.remove('current', 'incorrect');
                chars[i].classList.add('correct');
                this.playSound('key');
            } else {
                this.errors++;
                chars[i].classList.remove('current', 'correct');
                chars[i].classList.add('incorrect');
                this.playSound('error');
            }
        }

        // 백스페이스 처리
        if (inputValue.length < this.typedText.length) {
            for (let i = inputValue.length; i < this.typedText.length && i < chars.length; i++) {
                chars[i].classList.remove('correct', 'incorrect', 'current');
            }
        }

        // 현재 위치 업데이트
        this.typedText = inputValue;
        this.currentCharIndex = inputValue.length;

        // 현재 문자 표시 업데이트
        chars.forEach((char, index) => {
            if (index === this.currentCharIndex && index < this.currentText.length) {
                char.classList.add('current');
            } else {
                char.classList.remove('current');
            }
        });

        // 키보드 하이라이트 업데이트
        this.updateKeyboardHighlight();

        // 진행 상황 업데이트
        this.updateProgress();
        this.updateStats();

        // 텍스트 완료 확인
        if (this.currentCharIndex >= this.currentText.length) {
            this.completeText();
        }
    }

    handleKeyDown(e) {
        if (!this.isTyping || this.isPaused) return;

        // 키보드 시각화 업데이트
        this.visualizeKeyPress(e.key);
    }

    updateProgress() {
        const progress = (this.currentCharIndex / this.currentText.length) * 100;
        this.elements.progressBar.style.width = `${progress}%`;
        this.elements.progressText.textContent = `${Math.round(progress)}%`;
    }

    updateStats() {
        // WPM 계산
        const timeElapsed = this.isTyping ? (Date.now() - this.startTime) / 1000 / 60 : 0;
        let wordsTyped;

        if (this.settings.language === 'korean') {
            // 한글은 글자수를 2.5로 나누어 단어수 계산
            wordsTyped = this.correctKeystrokes / 2.5;
        } else {
            // 영어는 5글자를 1단어로 계산
            wordsTyped = this.correctKeystrokes / 5;
        }

        const wpm = timeElapsed > 0 ? Math.round(wordsTyped / timeElapsed) : 0;

        // 정확도 계산
        const accuracy = this.totalKeystrokes > 0
            ? Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100)
            : 100;

        // UI 업데이트
        this.elements.currentWPM.textContent = wpm;
        this.elements.currentAccuracy.textContent = `${accuracy}%`;

        // 세션 통계 저장
        if (this.isTyping && timeElapsed > 0) {
            this.sessionStats.wpmHistory.push(wpm);
            this.sessionStats.accuracyHistory.push(accuracy);
            this.sessionStats.timeStamps.push(Date.now());
        }
    }

    startTimer() {
        this.timer = setInterval(() => {
            const elapsed = Math.floor((Date.now() - this.startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;

            this.elements.timeElapsed.textContent =
                `${minutes}:${seconds.toString().padStart(2, '0')}`;

            // 시간 제한 모드 체크
            if (this.settings.mode === 'time' && elapsed >= this.settings.duration) {
                this.endTyping();
            }

            // 통계 업데이트
            this.updateStats();
        }, 1000);
    }

    completeText() {
        if (this.settings.mode === 'words') {
            // 단어 모드에서 완료된 단어 수 계산
            this.completedWords = this.currentText.trim().split(/\s+/).length;

            // 목표 단어 수에 도달했는지 확인
            if (this.completedWords >= this.wordCount) {
                this.endTyping();
            } else {
                // 연속 성공 카운트
                this.streak++;
                this.elements.streak.textContent = this.streak;

                // 다음 텍스트 로드
                setTimeout(() => {
                    this.loadNewText();
                }, 500);
            }
        } else {
            // 타이핑 종료
            this.endTyping();
        }
    }

    endTyping() {
        this.isTyping = false;
        this.endTime = Date.now();

        // 타이머 정지
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }

        // 최종 통계 계산
        const totalTime = (this.endTime - this.startTime) / 1000 / 60;
        let finalWPM;

        if (this.settings.language === 'korean') {
            finalWPM = Math.round((this.correctKeystrokes / 2.5) / totalTime);
        } else {
            finalWPM = Math.round((this.correctKeystrokes / 5) / totalTime);
        }

        const finalAccuracy = this.totalKeystrokes > 0
            ? Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100)
            : 0;

        // 결과 표시
        this.showResults(finalWPM, finalAccuracy);

        // 기록 저장
        this.saveHistory({
            date: new Date(),
            wpm: finalWPM,
            accuracy: finalAccuracy,
            duration: totalTime * 60,
            keystrokes: this.totalKeystrokes,
            errors: this.errors,
            difficulty: this.settings.difficulty,
            language: this.settings.language,
            practiceMode: this.settings.practiceMode
        });

        // 도전 과제 체크
        this.checkAchievements(finalWPM, finalAccuracy, totalTime);

        // 성공 사운드
        this.playSound('success');

        // UI 리셋
        setTimeout(() => {
            this.resetTyping();
        }, 100);
    }

    showResults(wpm, accuracy) {
        // 결과 값 설정
        this.elements.finalWPM.textContent = wpm;
        this.elements.finalAccuracy.textContent = `${accuracy}%`;
        this.elements.totalKeystrokes.textContent = this.totalKeystrokes;
        this.elements.totalErrors.textContent = this.errors;

        // 차트 그리기
        this.drawResultChart();

        // 모달 표시
        this.elements.resultModal.classList.add('active');
    }

    drawResultChart() {
        const ctx = this.elements.resultChart.getContext('2d');
        const width = this.elements.resultChart.width;
        const height = this.elements.resultChart.height;

        // 캔버스 초기화
        ctx.clearRect(0, 0, width, height);

        // 그래프 그리기
        if (this.sessionStats.wpmHistory.length > 1) {
            // WPM 그래프
            ctx.strokeStyle = '#3498db';
            ctx.lineWidth = 2;
            ctx.beginPath();

            const xStep = width / (this.sessionStats.wpmHistory.length - 1);
            const maxWPM = Math.max(...this.sessionStats.wpmHistory);

            this.sessionStats.wpmHistory.forEach((wpm, index) => {
                const x = index * xStep;
                const y = height - (wpm / maxWPM) * (height - 20);

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });

            ctx.stroke();

            // 정확도 그래프
            ctx.strokeStyle = '#2ecc71';
            ctx.beginPath();

            this.sessionStats.accuracyHistory.forEach((accuracy, index) => {
                const x = index * xStep;
                const y = height - (accuracy / 100) * (height - 20);

                if (index === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            });

            ctx.stroke();

            // 범례
            ctx.font = '12px Arial';
            ctx.fillStyle = '#3498db';
            ctx.fillText('WPM', 10, 20);
            ctx.fillStyle = '#2ecc71';
            ctx.fillText('정확도', 60, 20);
        }
    }

    initializeKeyboard() {
        const koreanLayout = {
            'q': 'ㅂ', 'w': 'ㅈ', 'e': 'ㄷ', 'r': 'ㄱ', 't': 'ㅅ',
            'y': 'ㅛ', 'u': 'ㅕ', 'i': 'ㅑ', 'o': 'ㅐ', 'p': 'ㅔ',
            'a': 'ㅁ', 's': 'ㄴ', 'd': 'ㅇ', 'f': 'ㄹ', 'g': 'ㅎ',
            'h': 'ㅗ', 'j': 'ㅓ', 'k': 'ㅏ', 'l': 'ㅣ',
            'z': 'ㅋ', 'x': 'ㅌ', 'c': 'ㅊ', 'v': 'ㅍ',
            'b': 'ㅠ', 'n': 'ㅜ', 'm': 'ㅡ'
        };

        const keyboardLayout = [
            ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'],
            ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\'],
            ['Caps', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'],
            ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'Shift'],
            ['Ctrl', 'Alt', 'Space', 'Alt', 'Ctrl']
        ];

        const keyboardContainer = this.elements.keyboardVisual;
        keyboardContainer.innerHTML = '';

        keyboardLayout.forEach(row => {
            const rowDiv = document.createElement('div');
            rowDiv.className = 'keyboard-row';

            row.forEach(key => {
                const keyDiv = document.createElement('div');
                keyDiv.className = `key ${key.toLowerCase().replace(' ', '-')}`;

                // 한글/영문 표시
                if (koreanLayout[key]) {
                    keyDiv.innerHTML = `<div style="font-size: 0.7rem">${koreanLayout[key]}</div><div>${key}</div>`;
                } else {
                    keyDiv.textContent = key;
                }

                keyDiv.dataset.key = key.toLowerCase();
                rowDiv.appendChild(keyDiv);
            });

            keyboardContainer.appendChild(rowDiv);
        });
    }

    updateKeyboardHighlight() {
        if (!this.settings.keyboardVisible) return;

        // 모든 키 하이라이트 제거
        document.querySelectorAll('.key').forEach(key => {
            key.classList.remove('next');
        });

        // 다음 문자 하이라이트
        if (this.currentCharIndex < this.currentText.length) {
            const nextChar = this.currentText[this.currentCharIndex];

            // 한글 자모 분리
            if (this.settings.language === 'korean' && /[가-힣]/.test(nextChar)) {
                // 한글 처리는 복잡하므로 전체 글자 하이라이트
                return;
            }

            // 영문 및 특수문자
            const keyElement = document.querySelector(`.key[data-key="${nextChar.toLowerCase()}"]`);

            if (keyElement) {
                keyElement.classList.add('next');
            } else if (nextChar === ' ') {
                const spaceKey = document.querySelector('.key.space');
                if (spaceKey) {
                    spaceKey.classList.add('next');
                }
            }
        }
    }

    visualizeKeyPress(key) {
        if (!this.settings.keyboardVisible) return;

        let keyElement = document.querySelector(`.key[data-key="${key.toLowerCase()}"]`);

        if (!keyElement && key === ' ') {
            keyElement = document.querySelector('.key.space');
        }

        if (keyElement) {
            keyElement.classList.add('pressed');
            setTimeout(() => {
                keyElement.classList.remove('pressed');
            }, 100);
        }
    }

    // 게임 모드 관련 메서드
    startGameMode() {
        this.gameMode = true;
        this.lives = 3;
        this.score = 0;
        this.combo = 1;
        this.fallingWords = [];

        // UI 전환
        this.elements.gameModeUI.style.display = 'block';
        this.updateGameStats();

        // 게임 입력 필드 활성화
        if (this.gameInput) {
            this.gameInput.disabled = false;
            this.gameInput.value = '';
            this.gameInput.focus();
        }

        // 게임 시작
        this.isTyping = true;
        this.startTime = Date.now();
        this.totalKeystrokes = 0;
        this.correctKeystrokes = 0;
        this.errors = 0;

        // 게임 타이머 시작
        this.gameTimer = setInterval(() => {
            if (!this.gameMode) {
                clearInterval(this.gameTimer);
            }
        }, 100);

        // 단어 생성 시작
        setTimeout(() => {
            if (this.gameMode) {
                this.spawnWords();
            }
        }, 1000);
    }

    spawnWords() {
        if (!this.gameMode || !this.isTyping) return;

        // 게임이 종료되었는지 다시 확인
        if (!this.elements.gameModeUI || this.elements.gameModeUI.style.display === 'none') {
            return;
        }

        // 난이도에 따른 단어 선택
        const wordList = this.getGameWords();
        const word = wordList[Math.floor(Math.random() * wordList.length)];

        // 단어 생성
        const wordElement = document.createElement('div');
        wordElement.className = 'falling-word';
        wordElement.textContent = word;
        wordElement.style.left = `${Math.random() * 80 + 10}%`;
        wordElement.style.animationDuration = `${Math.max(5, 8 - this.score / 1000)}s`;

        this.elements.fallingWords.appendChild(wordElement);
        this.fallingWords.push({
            element: wordElement,
            word: word
        });

        // 단어가 바닥에 닿으면 제거
        wordElement.addEventListener('animationend', () => {
            if (!wordElement.classList.contains('typed') && this.gameMode) {
                this.loseLife();
            }
            this.removeWord(wordElement);
        });

        // 다음 단어 스폰
        if (this.gameMode) {
            const spawnDelay = Math.max(1000, 3000 - this.score / 10);
            setTimeout(() => this.spawnWords(), spawnDelay);
        }
    }

    getGameWords() {
        const difficulty = this.settings.difficulty;
        const language = this.settings.language;

        // 난이도별 단어 목록
        const words = {
            korean: {
                beginner: ['가', '나', '다', '라', '마', '바', '사', '아'],
                intermediate: ['안녕', '하세요', '감사', '미안', '사랑'],
                advanced: ['타이핑', '연습', '컴퓨터', '키보드', '속도'],
                expert: ['전문가', '도전과제', '프로그래밍', '개발자', '인공지능']
            },
            english: {
                beginner: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
                intermediate: ['hello', 'world', 'typing', 'speed', 'test'],
                advanced: ['practice', 'keyboard', 'computer', 'accuracy', 'challenge'],
                expert: ['professional', 'achievement', 'programming', 'developer', 'excellence']
            }
        };

        return words[language]?.[difficulty] || words.english.beginner;
    }

    handleGameInput() {
        if (!this.gameInput) return;

        const typedWord = this.gameInput.value.trim();
        if (!typedWord) return;

        // 입력된 단어와 일치하는 떨어지는 단어 찾기
        const matchingWordIndex = this.fallingWords.findIndex(fw => fw.word === typedWord);

        if (matchingWordIndex !== -1) {
            const matchingWord = this.fallingWords[matchingWordIndex];

            // 단어 제거 애니메이션
            matchingWord.element.classList.add('typed');

            // 점수 계산
            const points = typedWord.length * 10 * this.combo;
            this.score += points;
            this.combo = Math.min(this.combo + 0.1, 3);

            // 통계 업데이트
            this.correctKeystrokes += typedWord.length;
            this.totalKeystrokes += typedWord.length;

            // UI 업데이트
            this.updateGameStats();

            // 사운드 재생
            this.playSound('success');

            // 배열에서 제거
            this.fallingWords.splice(matchingWordIndex, 1);
        } else {
            // 틀린 경우
            this.errors += typedWord.length;
            this.totalKeystrokes += typedWord.length;
            this.combo = 1;
            this.playSound('error');
        }

        // 입력 필드 초기화
        this.gameInput.value = '';
    }

    loseLife() {
        this.lives--;
        this.combo = 1;
        this.updateGameStats();

        if (this.lives <= 0) {
            this.endGameMode();
        } else {
            this.playSound('error');
        }
    }

    updateGameStats() {
        this.elements.lives.textContent = this.lives;
        this.elements.score.textContent = this.score;
        this.elements.combo.textContent = `x${this.combo.toFixed(1)}`;
    }

    removeWord(element) {
        element.remove();
        const index = this.fallingWords.findIndex(fw => fw.element === element);
        if (index !== -1) {
            this.fallingWords.splice(index, 1);
        }
    }

    endGameMode() {
        this.gameMode = false;
        this.isTyping = false;

        // 게임 UI 숨기기
        this.elements.gameModeUI.style.display = 'none';

        // 모든 떨어지는 단어 제거
        this.elements.fallingWords.innerHTML = '';
        this.fallingWords = [];

        // 게임 입력 필드 비활성화
        if (this.gameInput) {
            this.gameInput.disabled = true;
            this.gameInput.value = '';
        }

        // 결과 계산
        const totalTime = (Date.now() - this.startTime) / 1000 / 60;
        const wpm = totalTime > 0 ? Math.round((this.correctKeystrokes / 5) / totalTime) : 0;
        const accuracy = this.totalKeystrokes > 0
            ? Math.round((this.correctKeystrokes / this.totalKeystrokes) * 100)
            : 0;

        // 결과 표시
        this.showResults(wpm, accuracy);
    }

    // 게임 종료 확인
    confirmExitGame() {
        if (!this.gameMode) return;

        // 게임 일시정지
        const wasTyping = this.isTyping;
        this.isTyping = false;

        // 확인 모달 생성
        const confirmModal = document.createElement('div');
        confirmModal.className = 'game-exit-confirm';
        confirmModal.innerHTML = `
            <h3><i class="fas fa-exclamation-triangle"></i> 게임 종료</h3>
            <p>정말로 게임을 종료하시겠습니까?<br>현재 점수는 저장되지 않습니다.</p>
            <div class="game-exit-confirm-buttons">
                <button class="confirm-exit-btn" id="confirmGameExit">
                    <i class="fas fa-check"></i> 종료
                </button>
                <button class="cancel-exit-btn" id="cancelGameExit">
                    <i class="fas fa-times"></i> 계속하기
                </button>
            </div>
        `;

        // 오버레이 생성
        const overlay = document.createElement('div');
        overlay.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.5);
            z-index: 1000;
        `;

        document.body.appendChild(overlay);
        document.body.appendChild(confirmModal);

        // 버튼 이벤트
        document.getElementById('confirmGameExit').addEventListener('click', () => {
            this.forceExitGame();
            overlay.remove();
            confirmModal.remove();
        });

        document.getElementById('cancelGameExit').addEventListener('click', () => {
            this.isTyping = wasTyping;
            overlay.remove();
            confirmModal.remove();
            if (this.gameInput) {
                this.gameInput.focus();
            }
        });
    }

    // 강제 게임 종료
    forceExitGame() {
        this.gameMode = false;
        this.isTyping = false;

        // 게임 UI 숨기기
        this.elements.gameModeUI.style.display = 'none';

        // 모든 떨어지는 단어 제거
        this.elements.fallingWords.innerHTML = '';
        this.fallingWords = [];

        // 게임 입력 필드 비활성화
        if (this.gameInput) {
            this.gameInput.disabled = true;
            this.gameInput.value = '';
        }

        // 타이머 정지
        if (this.gameTimer) {
            clearInterval(this.gameTimer);
            this.gameTimer = null;
        }

        // UI 리셋
        this.resetTyping();

        // 알림 표시
        const notification = document.createElement('div');
        notification.className = 'copy-notification';
        notification.style.backgroundColor = '#e74c3c';
        notification.textContent = '게임이 종료되었습니다.';

        document.body.appendChild(notification);

        setTimeout(() => {
            notification.style.animation = 'slideDown 0.3s ease';
            setTimeout(() => notification.remove(), 300);
        }, 2000);
    }

    // 도전 과제 관련 메서드
    checkAchievements(wpm, accuracy, duration) {
        // WPM 도전 과제
        if (wpm >= 100 && !this.achievements.speedDemon.unlocked) {
            this.unlockAchievement('speedDemon');
        }

        // 정확도 도전 과제
        if (accuracy === 100 && this.totalKeystrokes >= 50 && !this.achievements.accuracy100.unlocked) {
            this.unlockAchievement('accuracy100');
        }

        // 마라톤 도전 과제
        if (duration >= 5 && !this.achievements.marathon.unlocked) {
            this.unlockAchievement('marathon');
        }

        // 올빼미 도전 과제
        const hour = new Date().getHours();
        if (hour >= 22 && !this.achievements.nightOwl.unlocked) {
            this.unlockAchievement('nightOwl');
        }

        // 연속 타자 도전 과제
        if (this.streak >= 10 && !this.achievements.streak10.unlocked) {
            this.unlockAchievement('streak10');
        }

        // 도전 과제 진행 상황 업데이트
        this.updateAchievementProgress();
    }

    unlockAchievement(achievementId) {
        const achievement = this.achievements[achievementId];
        if (!achievement || achievement.unlocked) return;

        achievement.unlocked = true;
        achievement.progress = achievement.target;

        // 알림 표시
        this.showAchievementNotification(achievement);

        // 저장
        this.saveAchievements();

        // UI 업데이트
        this.renderAchievements();
    }

    showAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <div class="achievement-title">도전 과제 달성!</div>
                <div class="achievement-name">${achievement.name}</div>
            </div>
        `;

        document.body.appendChild(notification);

        // 애니메이션 후 제거
        setTimeout(() => {
            notification.classList.add('show');
        }, 100);

        setTimeout(() => {
            notification.classList.remove('show');
            setTimeout(() => notification.remove(), 300);
        }, 3000);
    }

    updateAchievementProgress() {
        // 진행 상황 업데이트 로직
        this.renderAchievements();
    }

    renderAchievements() {
        const grid = document.getElementById('achievementsGrid');
        if (!grid) return;

        grid.innerHTML = '';

        Object.values(this.achievements).forEach(achievement => {
            const card = document.createElement('div');
            card.className = `achievement-card ${achievement.unlocked ? 'unlocked' : ''}`;

            const progress = (achievement.progress / achievement.target) * 100;

            card.innerHTML = `
                <div class="achievement-icon">${achievement.icon}</div>
                <div class="achievement-name">${achievement.name}</div>
                <div class="achievement-desc">${achievement.desc}</div>
                ${!achievement.unlocked ? `
                    <div class="achievement-progress">
                        <div class="achievement-progress-bar" style="width: ${progress}%"></div>
                    </div>
                ` : ''}
            `;

            grid.appendChild(card);
        });
    }

    // 유틸리티 메서드
    playSound(type) {
        if (!this.settings.soundEnabled) return;

        const audio = this.audio[`${type}Sound`];
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch(e => console.log('Audio play failed:', e));
        }
    }

    toggleTheme() {
        document.body.classList.toggle('dark-theme');
        this.settings.theme = document.body.classList.contains('dark-theme') ? 'dark' : 'light';

        // 아이콘 변경
        const icon = this.elements.themeToggle.querySelector('i');
        icon.className = this.settings.theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';

        this.saveSettings();
    }

    toggleSound() {
        this.settings.soundEnabled = !this.settings.soundEnabled;

        // 아이콘 변경
        const icon = this.elements.soundToggle.querySelector('i');
        icon.className = this.settings.soundEnabled ? 'fas fa-volume-up' : 'fas fa-volume-mute';

        this.saveSettings();
    }

    shareResult() {
        const wpm = this.elements.finalWPM.textContent;
        const accuracy = this.elements.finalAccuracy.textContent;
        const keystrokes = this.elements.totalKeystrokes.textContent;
        const errors = this.elements.totalErrors.textContent;

        // 결과 텍스트 생성
        const resultText = `🎯 타이핑 연습 결과\n\n` +
            `⚡ WPM: ${wpm}\n` +
            `🎯 정확도: ${accuracy}\n` +
            `⌨️ 총 타수: ${keystrokes}\n` +
            `❌ 오타: ${errors}\n\n` +
            `난이도: ${this.settings.difficulty}\n` +
            `언어: ${this.settings.language === 'korean' ? '한국어' : '영어'}\n\n` +
            `#타이핑연습 #타이핑마스터`;

        // 클립보드에 복사
        navigator.clipboard.writeText(resultText).then(() => {
            // 복사 성공 알림
            const notification = document.createElement('div');
            notification.className = 'copy-notification';
            notification.textContent = '결과가 클립보드에 복사되었습니다!';

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideDown 0.3s ease';
                setTimeout(() => notification.remove(), 300);
            }, 3000);
        }).catch(err => {
            alert('클립보드 복사에 실패했습니다.');
        });
    }

    useCustomText() {
        const customTextInput = document.getElementById('customTextInput');
        if (!customTextInput) return;

        const customText = customTextInput.value.trim();
        if (customText) {
            this.currentText = customText;
            this.elements.customTextModal.classList.remove('active');

            // 사용자 정의 텍스트로 타이핑 시작
            this.isTyping = true;
            this.isPaused = false;
            this.startTime = Date.now();
            this.currentCharIndex = 0;
            this.totalKeystrokes = 0;
            this.correctKeystrokes = 0;
            this.errors = 0;
            this.typedText = '';

            // UI 업데이트
            this.elements.typingInput.disabled = false;
            this.elements.typingInput.value = '';
            this.elements.typingInput.focus();
            this.elements.startBtn.disabled = true;
            this.elements.pauseBtn.disabled = false;

            // 텍스트 표시
            this.displayText();

            // 타이머 시작
            this.startTimer();

            // 키보드 표시
            if (this.settings.keyboardVisible) {
                this.elements.keyboardVisual.classList.add('active');
            }

            // 세션 통계 초기화
            this.sessionStats = {
                wpmHistory: [],
                accuracyHistory: [],
                timeStamps: []
            };
        } else {
            alert('텍스트를 입력해주세요.');
        }
    }

    updateModeUI() {
        // 모드에 따른 UI 업데이트
        const mode = this.settings.mode;
        const durationLabel = this.elements.durationLabel;

        if (!durationLabel) return;

        if (mode === 'time') {
            durationLabel.textContent = '시간';
            this.elements.duration.innerHTML = `
                <option value="30">30초</option>
                <option value="60">1분</option>
                <option value="120">2분</option>
                <option value="300">5분</option>
            `;
        } else if (mode === 'words') {
            durationLabel.textContent = '단어 수';
            this.elements.duration.innerHTML = `
                <option value="10">10 단어</option>
                <option value="25">25 단어</option>
                <option value="50">50 단어</option>
                <option value="100">100 단어</option>
            `;
        }

        // 현재 설정값 복원
        this.elements.duration.value = this.settings.duration;
    }

    // 팁 캐러셀
    startTipsCarousel() {
        this.currentTip = 0;
        setInterval(() => {
            this.navigateTip(1);
        }, 10000);
    }

    navigateTip(direction) {
        const tips = document.querySelectorAll('.tip-card');
        if (tips.length === 0) return;

        tips[this.currentTip].classList.remove('active');

        this.currentTip = (this.currentTip + direction + tips.length) % tips.length;
        tips[this.currentTip].classList.add('active');
    }

    // 탭 전환
    switchTab(tabBtn) {
        // 모든 탭 비활성화
        document.querySelectorAll('.tab-btn').forEach(btn => {
            btn.classList.remove('active');
        });

        // 선택된 탭 활성화
        tabBtn.classList.add('active');

        // 해당 기간의 데이터 로드
        this.loadHistoryData(tabBtn.dataset.tab);
    }

    // 데이터 저장/로드
    saveSettings() {
        localStorage.setItem('typingSettings', JSON.stringify(this.settings));
    }

    loadSettings() {
        const saved = localStorage.getItem('typingSettings');
        if (saved) {
            this.settings = { ...this.settings, ...JSON.parse(saved) };

            // UI에 반영
            this.elements.difficulty.value = this.settings.difficulty;
            this.elements.language.value = this.settings.language;
            this.elements.mode.value = this.settings.mode;
            this.elements.duration.value = this.settings.duration;

            if (this.elements.practiceMode) {
                this.elements.practiceMode.value = this.settings.practiceMode || 'sentence';
                this.updatePracticeModeUI();
            }

            // 테마 적용
            if (this.settings.theme === 'dark') {
                document.body.classList.add('dark-theme');
                this.elements.themeToggle.querySelector('i').className = 'fas fa-sun';
            }

            // 소리 설정
            if (!this.settings.soundEnabled) {
                this.elements.soundToggle.querySelector('i').className = 'fas fa-volume-mute';
            }

            // 모드 UI 업데이트
            this.updateModeUI();
        }
    }

    saveHistory(record) {
        let history = JSON.parse(localStorage.getItem('typingHistory') || '[]');
        history.push(record);

        // 최대 100개까지만 저장
        if (history.length > 100) {
            history = history.slice(-100);
        }

        localStorage.setItem('typingHistory', JSON.stringify(history));
    }

    loadHistory() {
        const history = JSON.parse(localStorage.getItem('typingHistory') || '[]');
        this.history = history;
        this.loadHistoryData('today');
    }

    loadHistoryData(period) {
        const now = new Date();
        let filteredHistory = [];

        switch (period) {
            case 'today':
                filteredHistory = this.history.filter(record => {
                    const recordDate = new Date(record.date);
                    return recordDate.toDateString() === now.toDateString();
                });
                break;
            case 'week':
                const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);
                filteredHistory = this.history.filter(record => {
                    return new Date(record.date) >= weekAgo;
                });
                break;
            case 'month':
                const monthAgo = new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000);
                filteredHistory = this.history.filter(record => {
                    return new Date(record.date) >= monthAgo;
                });
                break;
            case 'all':
                filteredHistory = this.history;
                break;
        }

        this.displayHistoryChart(filteredHistory);
        this.displayHistorySummary(filteredHistory);
    }

    displayHistoryChart(data) {
        const ctx = this.elements.historyChart?.getContext('2d');
        if (!ctx) return;

        const width = this.elements.historyChart.width;
        const height = this.elements.historyChart.height;

        // 캔버스 초기화
        ctx.clearRect(0, 0, width, height);

        if (data.length === 0) {
            ctx.font = '16px Arial';
            ctx.fillStyle = '#999';
            ctx.textAlign = 'center';
            ctx.fillText('데이터가 없습니다', width / 2, height / 2);
            return;
        }

        // 차트 그리기
        const padding = 40;
        const chartWidth = width - padding * 2;
        const chartHeight = height - padding * 2;

        // 축 그리기
        ctx.strokeStyle = '#ddd';
        ctx.beginPath();
        ctx.moveTo(padding, padding);
        ctx.lineTo(padding, height - padding);
        ctx.lineTo(width - padding, height - padding);
        ctx.stroke();

        // WPM 데이터 그리기
        const maxWPM = Math.max(...data.map(d => d.wpm));
        const xStep = chartWidth / (data.length - 1 || 1);

        ctx.strokeStyle = '#3498db';
        ctx.lineWidth = 2;
        ctx.beginPath();

        data.forEach((record, index) => {
            const x = padding + index * xStep;
            const y = height - padding - (record.wpm / maxWPM) * chartHeight;

            if (index === 0) {
                ctx.moveTo(x, y);
            } else {
                ctx.lineTo(x, y);
            }

            // 데이터 포인트
            ctx.fillStyle = '#3498db';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        ctx.stroke();

        // 레이블
        ctx.fillStyle = '#666';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('WPM', width / 2, padding - 10);
    }

    displayHistorySummary(data) {
        const summary = document.getElementById('historySummary');
        if (!summary) return;

        if (data.length === 0) {
            summary.innerHTML = '<p style="text-align: center; color: #999;">연습 기록이 없습니다.</p>';
            return;
        }

        // 통계 계산
        const avgWPM = Math.round(data.reduce((sum, r) => sum + r.wpm, 0) / data.length);
        const avgAccuracy = Math.round(data.reduce((sum, r) => sum + r.accuracy, 0) / data.length);
        const totalTime = Math.round(data.reduce((sum, r) => sum + r.duration, 0) / 60);
        const bestWPM = Math.max(...data.map(r => r.wpm));

        summary.innerHTML = `
            <div class="summary-item">
                <span class="summary-label">평균 WPM</span>
                <span class="summary-value">${avgWPM}</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">평균 정확도</span>
                <span class="summary-value">${avgAccuracy}%</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">총 연습 시간</span>
                <span class="summary-value">${totalTime}분</span>
            </div>
            <div class="summary-item">
                <span class="summary-label">최고 WPM</span>
                <span class="summary-value">${bestWPM}</span>
            </div>
        `;
    }

    saveAchievements() {
        localStorage.setItem('typingAchievements', JSON.stringify(this.achievements));
    }

    loadAchievements() {
        const saved = localStorage.getItem('typingAchievements');
        if (saved) {
            const savedAchievements = JSON.parse(saved);
            // 기존 도전 과제 구조 유지하면서 업데이트
            Object.keys(this.achievements).forEach(key => {
                if (savedAchievements[key]) {
                    this.achievements[key] = {
                        ...this.achievements[key],
                        ...savedAchievements[key]
                    };
                }
            });
        }
        this.renderAchievements();
    }

    handleResize() {
        // 반응형 처리
        if (window.innerWidth < 768) {
            this.settings.keyboardVisible = false;
            this.elements.keyboardVisual.classList.remove('active');
        }
    }

    // 보안 기능 통합
    initSecurity() {
        if (window.TypingProtection) {
            window.TypingProtection.init();
        }
    }
}

// 앱 초기화
document.addEventListener('DOMContentLoaded', () => {
    const app = new TypingPracticeApp();

    // 전역 객체로 등록 (디버깅용)
    window.typingApp = app;

    // 보안 기능 초기화
    app.initSecurity();
});

// closeModal 함수 (전역)
window.closeModal = function(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
    }
};

// 추가 애니메이션 스타일
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            transform: translate(-50%, 100%);
            opacity: 0;
        }
        to {
            transform: translate(-50%, 0);
            opacity: 1;
        }
    }

    @keyframes slideDown {
        from {
            transform: translate(-50%, 0);
            opacity: 1;
        }
        to {
            transform: translate(-50%, 100%);
            opacity: 0;
        }
    }

    .copy-notification {
        position: fixed;
        bottom: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: #2ecc71;
        color: white;
        padding: 15px 30px;
        border-radius: 5px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.2);
        z-index: 10000;
        animation: slideUp 0.3s ease;
    }

    /* 게임 종료 버튼 */
    .exit-game-btn {
        position: absolute;
        top: 20px;
        left: 20px;
        padding: 10px 20px;
        background-color: rgba(231, 76, 60, 0.9);
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.3s ease;
        z-index: 1000;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    .exit-game-btn:hover {
        background-color: rgba(192, 57, 43, 0.9);
        transform: scale(1.05);
    }

    .exit-game-btn i {
        font-size: 1.2rem;
    }

    /* 게임 종료 확인 모달 */
    .game-exit-confirm {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background: white;
        padding: 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 1001;
        text-align: center;
    }

    body.dark-theme .game-exit-confirm {
        background: var(--dark-bg);
        color: var(--text-light);
    }

    .game-exit-confirm h3 {
        margin-bottom: 20px;
        color: var(--danger-color);
    }

    .game-exit-confirm p {
        margin-bottom: 20px;
        color: #666;
    }

    body.dark-theme .game-exit-confirm p {
        color: #999;
    }

    .game-exit-confirm-buttons {
        display: flex;
        gap: 10px;
        justify-content: center;
    }

    .game-exit-confirm-buttons button {
        padding: 10px 20px;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: all 0.3s ease;
    }

    .confirm-exit-btn {
        background-color: var(--danger-color);
        color: white;
    }

    .confirm-exit-btn:hover {
        background-color: #c0392b;
    }

    .cancel-exit-btn {
        background-color: #95a5a6;
        color: white;
    }

    .cancel-exit-btn:hover {
        background-color: #7f8c8d;
    }
`;
document.head.appendChild(style);
