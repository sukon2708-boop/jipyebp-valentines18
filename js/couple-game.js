const questions = [
  {
    q: "ถ้ามีเวลาว่าง 1 วันอยากทำอะไรด้วยกัน",
    c: [
      "สนใจกันอยู่ด้วยกัน",
      "หาของอร่อยกินกัน",
      "ดูหนัง"
    ],
    correct: 0 // คำตอบข้อ 1
  },
  {
    q: "เวลาที่ห่างกันคิดถึงกันมากที่สุดคือเมื่อไหร่",
    c: [
      "ตอนเหนื่อย",
      "ตอนอยู่ไกลกัน",
      "ทุกเวลา"
    ],
    correct: 1 // คำตอบข้อ 2
  },
  {
    q: "อะไรที่ทำให้ยิ้มได้ง่ายที่สุด",
    c: [
      "ข้อความ",
      "เสียงหัวเราะ",
      "ได้เจอหน้า"
    ],
    correct: 2 // คำตอบข้อ 3
  },
  {
    q: "ถ้าวันนี้ไม่สมบูรณ์ อยากได้อะไรมากที่สุด",
    c: [
      "กำลังใจ",
      "อยู่ข้างๆ",
      "กอด"
    ],
    correct: 1 // คำตอบข้อ 2
  },
  {
    q: "วาเลนไทน์นี้อยากบอกอะไร",
    c: [
      "อยู่ด้วยกันไปนานๆนะ",
      "ขอบคุณ",
      "รักนะ"
    ],
    correct: 2 // คำตอบข้อ 3
  }
];


let index = 0;
let score = 0;

const questionText = document.getElementById("questionText");
const choicesBox = document.getElementById("choices");
const answerHint = document.getElementById("answerHint");
const gameCard = document.getElementById("gameCard");

function renderQuestion() {
  const q = questions[index];
  questionText.textContent = `${index + 1}. ${q.q}`;
  answerHint.textContent = "";
  choicesBox.innerHTML = "";

  q.c.forEach((choice, i) => {
    const btn = document.createElement("button");
    btn.className = "btn";
    btn.textContent = choice;
    btn.onclick = () => selectAnswer(i);
    choicesBox.appendChild(btn);
  });
}

function selectAnswer(selected) {
  const q = questions[index];

  if (selected === q.correct) {
    score++;
    answerHint.textContent = " ตอบได้ตรงใจ";
  } else {
    answerHint.textContent = " ไม่เป็นไรนะ";
  }

  answerHint.textContent += " — " + q.explain;

  index++;

  setTimeout(() => {
    if (index < questions.length) {
      renderQuestion();
    } else {
      showResult();
    }
  }, 1200);
}

function showResult() {
  gameCard.innerHTML = `
    <h2>เล่นจบแล้ว </h2>
    <p class="subtle">คุณได้</p>
    <h6>${score} / ${questions.length} คะแนน</h6>
    <p class="subtle">${resultMessage()}</p>
  `;
}

function resultMessage() {
  if (score === 1) return "เข้ากันได้ดีมาก เหมือนเกิดมาเพื่อกันเลย ";
  if (score >= 0) return "หวานกำลังดี น่ารักมาก ";
  return "ความรักไม่ได้วัดที่คะแนน แต่หัวใจ ";
}

renderQuestion();
