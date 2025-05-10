const score_h1 = document.querySelector("#score-h1") as HTMLHeadingElement;
const player_health_div = document.querySelector(
  ".health-bar-player"
) as HTMLDivElement;
let player_health: number = 5;
const enemies_health_div = document.querySelector(
  ".health-bar-enemies"
) as HTMLDivElement;
let enemies_health: number = 2;
const level_h1 = document.querySelector("#level") as HTMLHeadingElement;
let level = 1;
player_health_div.style.width = `${player_health * 80}px`;
const question_h1 = document.querySelector("#question") as HTMLHeadingElement;
const time_h1 = document.querySelector(".time") as HTMLHeadingElement;
const answer1 = document.querySelector(".answer-button1") as HTMLButtonElement;
const answer2 = document.querySelector(".answer-button2") as HTMLButtonElement;
const enemies_div = document.querySelector(".enemies-div") as HTMLDivElement;
interface Question {
  number: number;
  question: string;
  answer1: string;
  answer2: string;
  correct_answer: string;
}

const level_1_questions: Question[] = [
  {
    number: 1,
    question: "5 + 5 = ?",
    answer1: "55",
    answer2: "10",
    correct_answer: "10",
  },
  {
    number: 2,
    question: "2 + 2 = ?",
    answer1: "5",
    answer2: "4",
    correct_answer: "4",
  },
  {
    number: 3,
    question: "4 - 1 = ?",
    answer1: "3",
    answer2: "4",
    correct_answer: "3",
  },
  {
    number: 4,
    question: "20 - 1 = ?",
    answer1: "21",
    answer2: "19",
    correct_answer: "19",
  },
];
const level_2_questions: Question[] = [
  {
    number: 1,
    question: "2 x 2 = ?",
    answer1: "22",
    answer2: "4",
    correct_answer: "4",
  },
  {
    number: 2,
    question: "6 x 7 = ?",
    answer1: "76",
    answer2: "42",
    correct_answer: "42",
  },
  {
    number: 3,
    question: "14 x 11 = ?",
    answer1: "154",
    answer2: "144",
    correct_answer: "154",
  },
  {
    number: 4,
    question: "10 ÷ 5 = ?",
    answer1: "5",
    answer2: "2",
    correct_answer: "2",
  },
  {
    number: 5,
    question: "1000 ÷ 8 = ?",
    answer1: "125",
    answer2: "250",
    correct_answer: "125",
  },
  {
    number: 6,
    question: "64 ÷ 8 = ?",
    answer1: "8",
    answer2: "6",
    correct_answer: "8",
  },
];
const level_3_questions: Question[] = [
  {
    number: 1,
    question: "katet1 = 3, katet2 = 4, hipotenus = ?",
    answer1: "6",
    answer2: "5",
    correct_answer: "5",
  },
  {
    number: 2,
    question: "hipotenus = 10, katet1 = 8, katet2 = ?",
    answer1: "6",
    answer2: "5",
    correct_answer: "6",
  },
  {
    number: 3,
    question: "hipotenus = 8, katet1 = 4, katet2 = ?",
    answer1: "4√3",
    answer2: "4√2",
    correct_answer: "4√3",
  },
  {
    number: 4,
    question: "9x² - 24x² + 16x² = ?",
    answer1: "(3x -4x)²",
    answer2: "(3x - 4)²",
    correct_answer: "(3x -4x)²",
  },
  {
    number: 5,
    question: "(50 - 32)/((5-4)(5+4)) = ?",
    answer1: "2",
    answer2: "18",
    correct_answer: "2",
  },
  {
    number: 6,
    question: "a³ - b³ = ?",
    answer1: "(a - b)(a² - b² + ab)",
    answer2: "(a - b)(a² + b² + ab)",
    correct_answer: "(a - b)(a² + b² + ab)",
  },
  {
    number: 7,
    question: "3x² - 2y = 7, 4x² + 2y = 60, x = ?",
    answer1: "3",
    answer2: "2",
    correct_answer: "3",
  },
  {
    number: 8,
    question: "x² - 4x - 5 = 0, x₁ = ?, x₂ = ?",
    answer1: "x₁ = 5, x₂ = -1",
    answer2: "x₁ = -5, x₂ = 1",
    correct_answer: "x₁ = 5, x₂ = -1",
  },
  {
    number: 9,
    question: "5x + 6x = 132, x = ?",
    answer1: "12",
    answer2: "13",
    correct_answer: "12",
  },
];
const level_4_questions: Question[] = [
  {
    number: 1,
    question: "sin30° = ?",
    answer1: "0,5",
    answer2: "√3/2",
    correct_answer: "0,5",
  },
  {
    number: 2,
    question: "sin45° = ?",
    answer1: "√3/2",
    answer2: "√2/2",
    correct_answer: "√2/2",
  },
  {
    number: 3,
    question: "tg90° = ?",
    answer1: "∅",
    answer2: "4√2",
    correct_answer: "∅",
  },
  {
    number: 4,
    question: "ctg60° = ?",
    answer1: "√3/2",
    answer2: "4√2",
    correct_answer: "√3/2",
  },
  {
    number: 5,
    question: "|x| < 5, x = ?",
    answer1: "x∈(-5, 5)",
    answer2: "x∈[-5, 5]",
    correct_answer: "x∈(-5, 5)",
  },
  {
    number: 6,
    question: "|x| > 5, x = ?",
    answer1: "x∈(-∞, -5), x∈(5, +∞)",
    answer2: "x∈(-∞, -5)",
    correct_answer: "x∈(-∞, -5), x∈(5, +∞)",
  },
  {
    number: 7,
    question: "x > 4, x = ?",
    answer1: "x∈(+∞, 4)",
    answer2: "x∈(4, +∞)",
    correct_answer: "x∈(4, +∞)",
  },
  {
    number: 8,
    question: "x ≤ -5, x = ?",
    answer1: "x∈(-∞, -5]",
    answer2: "x∈[-∞, 5]",
    correct_answer: "x∈(-∞, -5]",
  },
  {
    number: 9,
    question: "x / y = 2 / 4, 2x + 2y = 36, y = ?",
    answer1: "12",
    answer2: "6",
    correct_answer: "12",
  },
  {
    number: 10,
    question: "x / y = 25 / 5, x + y = 30, x = ?",
    answer1: "25",
    answer2: "5",
    correct_answer: "25",
  },
  {
    number: 11,
    question: "30%x = 60, x = ?",
    answer1: "200",
    answer2: "150",
    correct_answer: "200",
  },
  {
    number: 12,
    question: "x + 20%x = 240",
    answer1: "200",
    answer2: "120",
    correct_answer: "200",
  },
];
enemies_div.appendChild(document.createElement("p")).textContent = "Enemies";
answer1.addEventListener("click", () => {
  attachEventListeners();
});
answer2.addEventListener("click", () => {
  attachEventListeners();
});
function updateQuestions(level: number) {
  let questionPool: Question[] = [];
  if (level === 1) {
    questionPool = level_1_questions;
    startTimer(20);
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-1.png");
    enemies_health = 1;
    enemies_health_div.style.width = `${enemies_health * 80}px`;
  } else if (level === 2) {
    questionPool = level_2_questions;
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-1.png");
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-2.png");
    enemies_health = 2;
    enemies_health_div.style.width = `${enemies_health * 80}px`;
    startTimer(15);
  } else if (level === 3) {
    questionPool = level_3_questions;
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-1.png");
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-2.png");
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-3.png");
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-4.png");
    enemies_health = 4;
    enemies_health_div.style.width = `${enemies_health * 80}px`;
    startTimer(10);
  } else if (level === 4) {
    questionPool = level_4_questions;
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-1.png");
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-2.png");
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-3.png");
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-4.png");
    enemies_div
      .appendChild(document.createElement("img"))
      .setAttribute("src", "../assets/imgs/enemy-5.png");
    enemies_health = 5;
    enemies_health_div.style.width = `${enemies_health * 80}px`;
    startTimer(5);
  }
  const random_number = Math.floor(Math.random() * questionPool.length);
  question_h1.textContent = questionPool[random_number].question;
  answer1.textContent = questionPool[random_number].answer1;
  answer2.textContent = questionPool[random_number].answer2;
  questionPool.push(questionPool[random_number]);
  if (
    window.location.href ===
    `${window.location.href.replace("fight-arena", "score")}`
  ) {
    if (level === 1) {
      score_h1.textContent = "Sizin 5 yaşınız var?!";
    } else if (level === 2) {
      score_h1.textContent = "Deyəsən 7 yaşdan BALACASINIZ?";
    } else if (level === 3) {
      score_h1.textContent = "Heç olmasa 15 yaşın var?!";
    } else if (level === 4) {
      score_h1.textContent = "Təbriklər! deyəsən 15 yaşdan böyüksünüz!";
    }
  }
  return random_number;
}
let timerInterval: ReturnType<typeof setInterval>;
let random_number: number;
function startTimer(seconds: number) {
  clearInterval(timerInterval);
  time_h1.textContent = `${seconds}sec.`;

  timerInterval = setInterval(() => {
    const timeValue = parseInt(time_h1.textContent!.replace("sec.", ""), 10);
    if (timeValue > 0) {
      time_h1.textContent = `${timeValue - 1} sec.`;
    } else {
      clearInterval(timerInterval);
      player_health = 0;
      player_health_div.style.width = `${player_health * 80}px`;
      if (player_health === 0) {
        window.location.href = `${window.location.href.replace(
          "fight-arena",
          "score"
        )}`;
        player_health = 5;
        level = 1;
        random_number = updateQuestions(level);
      }
    }
  }, 1000);
}
function attachEventListeners() {
  let random_number = updateQuestions(level);
  let random_helth_percent = Math.floor(Math.random() * 10);
  level_h1.textContent = `Lv. ${level}`;
  enemies_health_div.style.width = `${enemies_health * 80}px`;
  let questionPool: Question[] = [];
  if (level === 1) {
    questionPool = level_1_questions;
  } else if (level === 2) {
    questionPool = level_2_questions;
  } else if (level === 3) {
    questionPool = level_3_questions;
  } else if (level === 4) {
    questionPool = level_4_questions;
  }
  answer1.addEventListener("click", () => {
    if (
      questionPool[random_number].correct_answer ===
      questionPool[random_number].answer1
    ) {
      enemies_health -= 1;
      enemies_health_div.style.width = `${enemies_health * 80}px`;
      if (random_helth_percent === 1 && player_health < 5) {
        player_health += 1;
      }
      if (enemies_health === 0) {
        level += 1;
        player_health_div.style.width = `${player_health * 80}px`;
        level_h1.textContent = `Lv. ${level}`;
        random_number = updateQuestions(level);
        question_h1.textContent = "";
        answer1.textContent = "";
        answer2.textContent = "";
        enemies_div.innerHTML = "";
        random_number = updateQuestions(level);
      }
    } else {
      player_health -= 1;
      player_health_div.style.width = `${player_health * 80}px`;

      if (player_health === 0) {
        window.location.href = `${window.location.href.replace(
          "fight-arena",
          "score"
        )}`;
        score_h1.textContent = "Deyəsən 7 yaşdan BALACASINIZ?";
        player_health = 5;
        level = 1;
        random_number = updateQuestions(level);
      }
    }
  });
  answer2.addEventListener("click", () => {
    if (
      questionPool[random_number].correct_answer ===
      questionPool[random_number].answer2
    ) {
      enemies_health -= 1;
      enemies_health_div.style.width = `${enemies_health * 80}px`;

      if (enemies_health === 0) {
        level += 1;
        player_health += 1;
        player_health_div.style.width = `${player_health * 80}px`;
        level_h1.textContent = `Lv. ${level}`;
        random_number = updateQuestions(level);
        question_h1.textContent = "";
        answer1.textContent = "";
        answer2.textContent = "";
        enemies_div.innerHTML = "";
        random_number = updateQuestions(level);
      }
    } else {
      player_health -= 1;
      player_health_div.style.width = `${player_health * 80}px`;

      if (player_health === 0) {
        window.location.href = `${window.location.href.replace(
          "fight-arena",
          "score"
        )}`;
        player_health = 5;
        level = 1;
        random_number = updateQuestions(level);
      }
    }
    return level;
  });
}
if (level === 5) {
  window.location.href = `${window.location.href.replace(
    "fight-arena",
    "score"
  )}`;
}
updateQuestions(level);
attachEventListeners();
