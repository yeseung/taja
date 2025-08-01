  const sentencePools = {
    korean: [
      "세상에서 가장 중요한 일은 바로 자신을 아는 일이다.",
      "인생은 용감한 모험이거나 아니면 아무것도 아니다.",
      "성공은 작은 노력들이 모여 이루어진다.",
      "지식은 힘이다.",
      "행복은 우리가 하는 일에 달려 있다.",
      "사랑은 모든 것을 이긴다.",
      "꿈을 꿔라, 그리고 그 꿈을 좇아라.",
      "불가능은 노력하지 않는 자의 변명일 뿐이다.",
      "가장 어두운 밤이 지나야 새벽이 온다.",
      "인생은 속도가 아니라 방향이다.",
      "오늘을 잡아라. 내일은 알 수 없다.",
      "긍정적인 생각은 긍정적인 결과를 낳는다.",
      "모든 것은 변한다. 변하지 않는 것은 아무것도 없다.",
      "시작이 반이다.",
      "천 리 길도 한 걸음부터.",
      "구르는 돌에는 이끼가 끼지 않는다.",
      "일찍 일어나는 새가 벌레를 잡는다.",
      "벼는 익을수록 고개를 숙인다.",
      "가는 말이 고와야 오는 말이 곱다.",
      "말은 마음의 거울이다.",
      "발 없는 말이 천 리 간다.",
      "젊어 고생은 사서도 한다.",
      "포기는 배추를 세는 단위일 뿐이다.",
      "종로에서 뺨 맞고 한강에 가서 눈 흘긴다.",
      "제 얼굴 더러운 줄 모르고 거울만 나무란다.",
      "열 길 물속은 알아도 한 길 사람의 속은 모른다.",
      "등잔 밑이 어둡다.",
      "티끌 모아 태산.",
      "백지장도 맞들면 낫다.",
      "산이 높아야 골이 깊다.",
      "원숭이도 나무에서 떨어진다.",
      "우물 안 개구리.",
      "궁하면 통한다.",
      "하늘은 스스로 돕는 자를 돕는다.",
      "가는 날이 장날이다.",
      "고래 싸움에 새우 등 터진다.",
      "누워서 침 뱉기.",
      "달면 삼키고 쓰면 뱉는다.",
      "도둑이 제 발 저린다.",
      "빈 수레가 요란하다.",
      "사공이 많으면 배가 산으로 간다.",
      "서당 개 삼 년이면 풍월을 읊는다.",
      "열 번 찍어 안 넘어가는 나무 없다.",
      "윗물이 맑아야 아랫물이 맑다.",
      "참을 인 세 번이면 살인도 면한다.",
      "호랑이 굴에 가야 호랑이 새끼를 잡는다.",
      "가는 정이 있어야 오는 정이 있다.",
      "낮말은 새가 듣고 밤말은 쥐가 듣는다.",
      "믿는 도끼에 발등 찍힌다.",
      "호랑이도 제 말 하면 온다.",
      "웃는 얼굴에 침 못 뱉는다.",
      "가는 말이 고와야 오는 말이 곱다.",
      "개구리 올챙이 적 생각 못 한다.",
      "꿩 대신 닭.",
      "낮말은 새가 듣고 밤말은 쥐가 듣는다.",
      "믿는 도끼에 발등 찍힌다.",
      "바늘 도둑이 소 도둑 된다.",
      "빈 수레가 요란하다.",
      "똥 묻은 개가 겨 묻은 개 나무란다.",
      "아는 길도 물어가라.",
      "열 번 찍어 안 넘어가는 나무 없다.",
      "하늘이 무너져도 솟아날 구멍이 있다.",
      "비 온 뒤에 땅이 굳어진다.",
      "친구 따라 강남 간다.",
      "중이 제 머리 못 깎는다.",
      "나무는 큰 나무 밑에 있어야 큰다.",
      "가는 날이 장날이다.",
      "개처럼 벌어서 정승처럼 써라.",
      "되로 주고 말로 받는다.",
      "하늘 보고 침 뱉기.",
      "낮말은 새가 듣고 밤말은 쥐가 듣는다.",
      "돌다리도 두들겨 보고 건너라.",
      "남의 떡이 더 커 보인다.",
      "누울 자리 보고 다리 뻗어라.",
      "원수는 외나무다리에서 만난다.",
      "바늘 도둑이 소 도둑 된다.",
      "벼룩의 간을 내먹는다.",
      "고생 끝에 낙이 온다.",
      "가는 정이 있어야 오는 정이 있다.",
      "윗물이 맑아야 아랫물이 맑다.",
      "누워서 침 뱉기.",
      "길고 짧은 것은 대봐야 안다.",
      "콩 심은 데 콩 나고 팥 심은 데 팥 난다.",
      "말 한 마디에 천 냥 빚도 갚는다.",
      "서당 개 삼 년이면 풍월을 읊는다.",
      "쇠귀에 경 읽기.",
      "소 잃고 외양간 고친다.",
      "열 길 물속은 알아도 한 길 사람 속은 모른다.",
      "하늘에 별 따기.",
      "개밥에 도토리.",
      "구슬이 서 말이라도 꿰어야 보배.",
      "금강산도 식후경.",
      "그 아버지에 그 아들.",
      "나중에 웃는 자가 진짜 승자다.",
      "낮말은 새가 듣는다.",
      "늦게 배운 도둑이 날 새는 줄 모른다.",
      "달면 삼키고 쓰면 뱉는다.",
      "도토리 키 재기.",
      "등잔 밑이 어둡다.",
      "되로 주고 말로 받는다.",
      "뛰는 놈 위에 나는 놈 있다.",
      "사공이 많으면 배가 산으로 간다.",
      "산 넘어 산.",
      "세 살 버릇 여든까지 간다.",
      "쥐구멍에도 볕 들 날 있다.",
      "하룻강아지 범 무서운 줄 모른다.",
      "호미로 막을 걸 가래로 막는다.",
      "천 리 길도 한 걸음부터.",
      "우물쭈물하다가 내 이럴 줄 알았지.",
      "사촌이 땅을 사면 배가 아프다.",

      "아빠의 겨울에 나는 녹음이 되었다. 그들의 푸름을 다 먹고 내가 나무가 되었다.",
      "자세히 보아야 예쁘다. 오래 보아야 사랑스럽다. 너도 그렇다.",
      "일에 쫓기고 부대끼며, 난 내가 제일 힘들다 생각했다.",      
      "니가 괴물이 된 게 아니라 내가 널 괴물로 만든 거였어",
      "포기하는 순간 핑계거리를 찾게 되고 할 수 있다고 생각하는 순간에 방법을 찾는다.",
      "과거, 바뀔 수 있습니다. 절대 포기하지 말아요.",
      "사진을 찍을 때 한쪽 눈을 감는 것은 마음의 눈을 뜨기 위해서다.",
      "지난 세기의 위대한 인물들은 결코 서두르지 않았다.",
      "앞으로 20년이 지나면 당신이 한 일보다 하지 않은 일들 때문에 더 후회할 것이다.",
      "나도 실패할까 봐 두려웠지만 항상 포기하지 않고 용기 있게 덤볐다.",
      "용기란 두려움을 느끼지 않는 게 아니라 두려움에 맞서 극복하는 것이다.",
      "절망하지 마라. 종종 열쇠 꾸러미의 마지막 열쇠가 자물쇠를 연다.",
      "살다 보면 누구나 에베레스트보다 더 높은 생의 고비를 만난다.",
      "인생은 겸손을 배우는 긴 수업 시간이다.",
      "지금 어둠인 사람들에게만 별들이 보인다.",
      "돈은 매력적이지만, 그 누구도 한꺼번에 두 켤레의 신발을 신을 수는 없다."
    ],
    english: [
      "The quick brown fox jumps over the lazy dog.",
      "Never underestimate the power of a good book.",
      "Practice makes perfect in every endeavor.",
      "The only way to do great work is to love what you do.",
      "Innovation distinguishes between a leader and a follower.",
      "The only true wisdom is in knowing you know nothing.",
      "Be the change that you wish to see in the world.",
      "The future belongs to those who believe in the beauty of their dreams.",
      "Strive not to be a success, but rather to be of value.",
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
      "It is during our darkest moments that we must focus to see the light.",
      "The mind is everything. What you think you become.",
      "An unexamined life is not worth living.",
      "Life is what happens when you're busy making other plans.",
      "You miss 100% of the shots you don't take.",

      "A new year has began.",
      "I hope our family is always happy.",
      "Good morning! Did you sleep well?",
      "Did you have a good night's sleep?",
      "I had a dream I went on a picnic with my friends.",
      "What do you want to wear today?",
      "Hurry up! You're going to be late.",
      "Just a second. I need to grab my sketchbook.",
      "I'm off to work. See you at dinnertime.",
      "We need to buy a birthday present for uncle.",
      "What gift do you want to give him?"

    ]
  };

  let currentSentence = "";
  let startTime = 0;
  let timerInterval; // CPM 및 정확도 업데이트용 (1초)
  let visualTimerInterval; // 시간 표시 업데이트용 (0.1초)
  let correctCharacters = 0;
  let totalTypedCharacters = 0; // 총 입력된 글자 수 (오타 포함)
  let isTypingStarted = false;

  let recordCounter = 0;
  let totalCpmSum = 0;
  let completedSentences = 0;

  let selectedLanguageOption = 'korean';
  let lastMixedLanguageWasKorean = true;

// ⭐ 10문장 전체 정확도 및 시간 계산을 위한 누적 변수들 (다시 추가) ⭐
let totalCorrectCharacters = 0;       // 10문장 전체의 올바른 글자 수 누적
let totalElapsedTime = 0;             // 10문장 전체의 소요 시간 누적 (초 단위)
let cumulativeTotalTypedCharacters = 0; // 10문장 전체의 총 입력된 글자 수 누적 (오타 포함)

// ⭐ Score 계산 및 누적을 위한 변수 추가 ⭐
let totalScoreSum = 0; // 10문장 전체의 Score 합계

  const sentenceDiv = document.getElementById("sentenceDiv");
  const typingDiv = document.getElementById("typingDiv");
  const cpmDisplay = document.getElementById("cpmDisplay"); // CPM 표시
  const accuracyDisplay = document.getElementById("accuracyDisplay"); // 정확도 표시
  const timerDisplay = document.getElementById("timerDisplay"); // 시간 표시
  const recordContainer = document.getElementById("recordContainer");
  const averageVelocityDiv = document.getElementById("averageVelocityDiv");
  const languageSelect = document.getElementById("languageSelect");

  // 초기화 함수
  function initializeTypingTest() {
    let targetPool;
    if (selectedLanguageOption === 'alternating') {
      if (lastMixedLanguageWasKorean) {
        targetPool = sentencePools.english;
        lastMixedLanguageWasKorean = false;
      } else {
        targetPool = sentencePools.korean;
        lastMixedLanguageWasKorean = true;
      }
    } else {
      targetPool = sentencePools[selectedLanguageOption];
    }
    
    currentSentence = targetPool[Math.floor(Math.random() * targetPool.length)];
    sentenceDiv.innerHTML = currentSentence.split('').map(char => `<span>${char}</span>`).join('');
    typingDiv.innerText = "";
    
    // 초기화 시 모든 디스플레이 0 또는 기본값으로 설정
    cpmDisplay.innerText = "CPM: 0";
    accuracyDisplay.innerText = "Accuracy: 100%";
    timerDisplay.innerText = "Time: 0.0초";
    
    correctCharacters = 0;
    totalTypedCharacters = 0;
    isTypingStarted = false;
    stopAllTimers(); // 모든 타이머 중지
    typingDiv.focus();
  }

  // 언어 선택 변경 시 호출되는 함수
  function changeLanguage() {
    selectedLanguageOption = languageSelect.value;
    
    recordCounter = 0;
    totalCpmSum = 0;
    completedSentences = 0;
    recordContainer.innerHTML = "";

    // ⭐ 언어 변경 시 Score 관련 누적 변수도 초기화 ⭐
    totalCorrectCharacters = 0;
    totalElapsedTime = 0;
    cumulativeTotalTypedCharacters = 0;
    totalScoreSum = 0; // Score 합계도 초기화

    updateAverageVelocity();
    
    if (selectedLanguageOption === 'alternating') {
        lastMixedLanguageWasKorean = true;
    }
    
    initializeTypingTest();
  }

  // 타이핑 시작 이벤트 리스너
  typingDiv.addEventListener("input", startTyping);

  typingDiv.addEventListener("paste", function(event) {
    event.preventDefault(); // 기본 붙여넣기 동작 방지
    // 또는, 붙여넣기된 내용을 즉시 지우고 사용자에게 알림
    // typingDiv.innerText = "";
    // alert("복사 붙여넣기는 허용되지 않습니다.");
});

  // 키다운 이벤트 리스너 (엔터 키 처리)
  typingDiv.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      finalizeSentence();
    }
  });

  // 타이핑 시작
  function startTyping() {
    if (!isTypingStarted) {
      startTime = new Date().getTime();
      timerInterval = setInterval(updateStats, 1000); // CPM, 정확도 업데이트 (1초마다)
      visualTimerInterval = setInterval(updateVisualTimer, 100); // 시간 표시 업데이트 (0.1초마다)
      isTypingStarted = true;
    }
    updateTypingDisplay();
    updateStats(); // 첫 글자 입력 시 바로 통계 업데이트
  }

  // 실시간 타이핑 디스플레이 업데이트 (색상 변경)
  function updateTypingDisplay() {
    const typedText = typingDiv.innerText;
    const sentenceChars = sentenceDiv.querySelectorAll('span');
    let currentCorrectCount = 0;
    
    totalTypedCharacters = typedText.length; // 총 입력 글자 수 업데이트

    sentenceChars.forEach((charSpan, index) => {
      if (index < typedText.length) {
        if (typedText[index] === currentSentence[index]) {
          charSpan.style.color = "blue";
          currentCorrectCount++;
        } else {
          charSpan.style.color = "red";
        }
      } else {
        charSpan.style.color = "black";
      }
    });

    correctCharacters = currentCorrectCount;

    // 모든 글자를 올바르게 입력했는지 확인
    if (typedText.length === currentSentence.length && correctCharacters === currentSentence.length) {
      finalizeSentence();
    }
  }

  // 통계 (CPM, 정확도) 업데이트 함수
  function updateStats() {
    const currentTime = new Date().getTime();
    const elapsedTimeInSeconds = (currentTime - startTime) / 1000; // 초 단위 경과 시간
    const elapsedTimeInMinutes = elapsedTimeInSeconds / 60; // 분 단위 경과 시간

    // CPM 계산
    if (elapsedTimeInMinutes > 0) {
      const cpm = Math.round(correctCharacters / elapsedTimeInMinutes);
      cpmDisplay.innerText = `CPM: ${cpm}`;
    } else {
      cpmDisplay.innerText = "CPM: 0";
    }

    // 정확도 계산
    if (totalTypedCharacters > 0) {
      const accuracy = ((correctCharacters / totalTypedCharacters) * 100).toFixed(1); // 소수점 첫째 자리까지
      accuracyDisplay.innerText = `Accuracy: ${accuracy}%`;
    } else {
      accuracyDisplay.innerText = "Accuracy: 100%"; // 아무것도 입력 안 했을 때는 100%
    }
  }

  // 시간 표시 업데이트 함수 (0.1초마다)
  function updateVisualTimer() {
    const currentTime = new Date().getTime();
    const elapsedTimeInSeconds = (currentTime - startTime) / 1000;
    timerDisplay.innerText = `Time: ${elapsedTimeInSeconds.toFixed(1)}초`;
  }

  // 모든 타이머 중지 함수
  function stopAllTimers() {
    if (timerInterval) {
      clearInterval(timerInterval);
      timerInterval = null;
    }
    if (visualTimerInterval) {
      clearInterval(visualTimerInterval);
      visualTimerInterval = null;
    }
  }

// 문장 완료 처리 및 기록 함수
function finalizeSentence() {
  if (isTypingStarted) {
    stopAllTimers();
    isTypingStarted = false;
    updateStats();
    updateVisualTimer();

    // ⭐ 현재 문장의 정확도, 시간, 총 입력 글자 수 누적 (Score 계산용) ⭐
    // 주의: totalTypedCharacters는 현재 문장의 입력 글자 수입니다.
    totalCorrectCharacters += correctCharacters;
    totalElapsedTime += (new Date().getTime() - startTime) / 1000;
    cumulativeTotalTypedCharacters += totalTypedCharacters;

    // ⭐ 현재 문장의 Score 계산 ⭐
    const currentCpm = parseInt(cpmDisplay.innerText.replace('CPM: ', ''));
    const currentAccuracy = parseFloat(accuracyDisplay.innerText.replace('Accuracy: ', '')); // % 기호 제거하고 숫자로 변환
    const typedCharsInSentence = typingDiv.innerText.length; // 현재 문장에 실제로 입력된 글자 수
    const sentenceLength = currentSentence.length; // 원본 문장의 총 글자 수

    let currentSentenceScore = 0;
    if (sentenceLength > 0 && typedCharsInSentence > 0) { // 0으로 나누는 것을 방지
        currentSentenceScore = currentCpm * (typedCharsInSentence / sentenceLength) * (currentAccuracy / 100);
        currentSentenceScore = Math.round(currentSentenceScore); // 소수점 없애고 반올림
    }

    totalScoreSum += currentSentenceScore; // ⭐ 현재 문장의 Score를 총 Score 합계에 더하기 ⭐

    const finalCpm = parseInt(cpmDisplay.innerText.replace('CPM: ', ''));
    const finalAccuracy = accuracyDisplay.innerText.replace('Accuracy: ', '');
    const finalTime = timerDisplay.innerText.replace('Time: ', '');

    recordCounter++;
    const recordItem = document.createElement('p');
    recordItem.innerHTML = `#${recordCounter}: <span style="font-weight:bold;">${finalCpm} CPM</span>, ${finalAccuracy}, ${finalTime}, <span style="font-weight:bold; color:orange;">Score ${currentSentenceScore}</span>`;
    recordItem.style.margin = "5px 0";
    recordContainer.appendChild(recordItem);

    recordContainer.scrollTop = recordContainer.scrollHeight;

    totalCpmSum += finalCpm;
    completedSentences++;
    updateAverageVelocity();

    if (completedSentences === 1) {
      const avgCpm = Math.round(totalCpmSum / completedSentences);

    // ⭐ 10문장 전체의 평균 정확도와 총 소요 시간 계산 (다시 추가) ⭐
    // cumulativeTotalTypedCharacters가 0이면 NaN 방지 (|| 1)
    const avgAccuracy = ((totalCorrectCharacters / (cumulativeTotalTypedCharacters || 1)) * 100).toFixed(1);
    const totalSessionTime = totalElapsedTime.toFixed(1); // 전체 세션의 총 소요 시간

    // ⭐ 10문장 전체의 총 Score (누적된 totalScoreSum) ⭐
    const finalTotalScore = Math.round(totalScoreSum); // 최종 Score는 정수로 반올림

    const finalRecord = document.createElement('p');
    // ⭐ finalRecord.innerHTML에 총 Score 정보 추가 ⭐
    finalRecord.innerHTML = `<span style="font-weight:bold; color:green;">평균 CPM (10문장 기준): ${avgCpm}</span><br><span style="font-weight:bold; color:darkorange;">총 Score: ${finalTotalScore}</span>`;
    finalRecord.style.marginTop = "10px";
    finalRecord.style.backgroundColor = "#e6ffe6";
    finalRecord.style.borderTop = "2px dashed #66cc66";
    recordContainer.appendChild(finalRecord);
    recordContainer.scrollTop = recordContainer.scrollHeight;

      setTimeout(() => {
        const confirmRegister = confirm("10개의 문장 타이핑을 완료했습니다. 랭킹에 이름을 올리시겠습니까?");
        if (confirmRegister) {
          const userName = prompt("이름을 입력하세요:");
          if (userName && userName.trim()) {
            const languageMode = selectedLanguageOption;
            const payload = {
                name: userName.trim().substring(0, 10), // 이름은 최대 10자까지만
                cpm: avgCpm,
                language: languageMode,
                accuracy: parseFloat(avgAccuracy), // ⭐ 평균 정확도 추가 ⭐
                time: parseFloat(totalSessionTime), // ⭐ 총 소요 시간 추가 ⭐
                totalScore: finalTotalScore,       // ⭐ 최종 Score 추가 ⭐
                timestamp: new Date().toISOString()
            };

            fetch("https://www.medcalc.co.kr/js/save_ranking.php", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
            })
            .then(response => response.json())
            .then(data => {
              alert("랭킹에 등록되었습니다!");
              loadRankings();
            });
          }
        } else {
          alert("처음부터 다시 시작합니다.");
        }

        recordCounter = 0;
        totalCpmSum = 0;
        completedSentences = 0;
        // ⭐ Score 관련 누적 변수 초기화 ⭐
        totalCorrectCharacters = 0;
        totalElapsedTime = 0;
        cumulativeTotalTypedCharacters = 0;
        totalScoreSum = 0; // 이 변수도 초기화!
        recordContainer.innerHTML = "";
        updateAverageVelocity();
        initializeTypingTest();

      }, 100);
    } else {
      // 10문장 미만일 때 다음 문장으로 넘어가기
      setTimeout(nextSentence, 500);
    }
  }
}


  // 평균 속도 업데이트 함수
  function updateAverageVelocity() {
    let modeText = "";
    switch (selectedLanguageOption) {
      case 'korean':
        modeText = "(한글)";
        break;
      case 'english':
        modeText = "(영어)";
        break;
      case 'alternating':
        modeText = "(한/영 혼합)";
        break;
      default:
        modeText = ""; // 혹시 모를 상황 대비
    }

    if (completedSentences > 0) {
      const averageCpm = Math.round(totalCpmSum / completedSentences);
      averageVelocityDiv.innerText = `${modeText} 평균 CPM: ${averageCpm}`;
    } else {
      averageVelocityDiv.innerText = `${modeText} 평균 CPM: 0`;
    }
  }

  // 다음 문제로 이동
  function nextSentence() {
    initializeTypingTest();
  }

function loadRankings() {
    // ⭐ 중요: rankings.json이 아닌 get_ranks.php를 호출하도록 수정 ⭐
    // PHP에서 정렬과 필터링을 하므로, 여기서는 받아온 데이터를 바로 표시합니다.

  // [
  //   {
  //     "name": "ㅇㅇ",
  //     "cpm": 162262,
  //     "language": "korean",
  //     "accuracy": 99.1,
  //     "time": 41.6,
  //     "totalScore": 1622572,
  //     "timestamp": "2025-07-15T06:27:21.373Z"
  //   },
  //   {
  //     "name": "ㅎㅎ",
  //     "cpm": 48329,
  //     "language": "korean",
  //     "accuracy": 100,
  //     "time": 21,
  //     "totalScore": 483188,
  //     "timestamp": "2025-07-05T07:43:46.996Z"
  //   },
  //   {
  //     "name": "ㅇㅇ",
  //     "cpm": 4358,
  //     "language": "korean",
  //     "accuracy": 98,
  //     "time": 26,
  //     "totalScore": 43578,
  //     "timestamp": "2025-06-26T04:22:35.583Z"
  //   }
  // ]
    fetch("https://www.medcalc.co.kr/js/get_ranks.php")
        .then(response => {
            // 응답이 성공(200 OK)이 아니면 에러를 발생시킵니다.
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            return response.json(); // JSON 응답 파싱
        })
        .then(data => {
            const container = document.getElementById("rankingContainer");
            container.innerHTML = ""; // 기존 랭킹 목록 지우기

            // 받아온 랭킹 데이터를 화면에 표시합니다.
            data.forEach((entry, index) => {
                const row = document.createElement("p");
                let langLabel = "";
                if (entry.language === "korean") langLabel = "(한글)";
                else if (entry.language === "english") langLabel = "(영어)";
                else if (entry.language === "alternating") langLabel = "(혼합)";

                // ⭐ Score 정보도 함께 표시 ⭐
                // null 값 처리 및 소수점 자리수 조정
                const displayCpm = entry.cpm ? `${entry.cpm} CPM` : 'N/A CPM';
                const displayScore = entry.totalScore ? `Score ${entry.totalScore}` : 'N/A Score';

                row.innerHTML = `<b>#${index + 1}.</b> ${entry.name} - ${displayCpm} ${langLabel} ${displayScore}`;
                row.style.margin = "5px 0";
                
                // 상위 15줄 강조 (원래 코드 유지)
                if (index < 15) row.style.fontWeight = "bold"; 
                container.appendChild(row);
            });
        })
        .catch(error => {
            // 오류 발생 시 랭킹 컨테이너에 메시지 표시
            rankingContainer.innerHTML = "<p style='color:red;'>랭킹 정보를 불러올 수 없습니다. 오류: " + error.message + "</p>";
            console.error("랭킹 로딩 중 오류 발생:", error);
        });
}

// 페이지 로드 시 랭킹도 불러오기
window.onload = function() {
  initializeTypingTest();
  loadRankings();
};