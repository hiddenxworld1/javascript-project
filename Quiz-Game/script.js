// Dom Elements

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionSpan = document.getElementById("total-question");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
 {
  question: "What is the speed of light?",
  answers: [
    { text: "3 × 10⁸ m/s", correct: true },
    { text: "3 × 10⁶ m/s", correct: false },
    { text: "3 × 10⁴ m/s", correct: false },
    { text: "3 × 10² m/s", correct: false },
  ],
},
{
  question: "Which country hosted the 2016 Summer Olympics?",
  answers: [
    { text: "China", correct: false },
    { text: "Brazil", correct: true },
    { text: "Japan", correct: false },
    { text: "Russia", correct: false },
  ],
},
{
  question: "Which element has the atomic number 1?",
  answers: [
    { text: "Helium", correct: false },
    { text: "Hydrogen", correct: true },
    { text: "Oxygen", correct: false },
    { text: "Carbon", correct: false },
  ],
},
{
  question: "Which continent is the largest by land area?",
  answers: [
    { text: "Africa", correct: false },
    { text: "Asia", correct: true },
    { text: "North America", correct: false },
    { text: "Europe", correct: false },
  ],
},
{
  question: "What does CPU stand for?",
  answers: [
    { text: "Central Processing Unit", correct: true },
    { text: "Computer Personal Unit", correct: false },
    { text: "Control Program Utility", correct: false },
    { text: "Central Power Unit", correct: false },
  ],
},
{
  question: "Which gas is essential for human respiration?",
  answers: [
    { text: "Nitrogen", correct: false },
    { text: "Oxygen", correct: true },
    { text: "Carbon Dioxide", correct: false },
    { text: "Hydrogen", correct: false },
  ],
},
{
  question: "Which country is the largest by population?",
  answers: [
    { text: "India", correct: false },
    { text: "China", correct: false },
    { text: "India and China", correct: false },
    { text: "Depends on year (use India as 2023+)", correct: true },
  ],
},
{
  question: "Which organ pumps blood throughout the body?",
  answers: [
    { text: "Liver", correct: false },
    { text: "Heart", correct: true },
    { text: "Kidney", correct: false },
    { text: "Lungs", correct: false },
  ],
},
{
  question: "Which metal is liquid at room temperature?",
  answers: [
    { text: "Mercury", correct: true },
    { text: "Iron", correct: false },
    { text: "Copper", correct: false },
    { text: "Aluminum", correct: false },
  ],
},
{
  question: "Which device is used to store data permanently?",
  answers: [
    { text: "RAM", correct: false },
    { text: "ROM", correct: true },
    { text: "Cache", correct: false },
    { text: "Register", correct: false },
  ],
},
{
  question: "Which planet has the most moons?",
  answers: [
    { text: "Earth", correct: false },
    { text: "Jupiter", correct: false },
    { text: "Saturn", correct: true },
    { text: "Mars", correct: false },
  ],
},
{
  question: "What is the boiling point of water at sea level?",
  answers: [
    { text: "50°C", correct: false },
    { text: "75°C", correct: false },
    { text: "100°C", correct: true },
    { text: "150°C", correct: false },
  ],
},
{
  question: "Which is the national animal of India?",
  answers: [
    { text: "Lion", correct: false },
    { text: "Elephant", correct: false },
    { text: "Tiger", correct: true },
    { text: "Peacock", correct: false },
  ],
},
{
  question: "Which continent is known as the Dark Continent?",
  answers: [
    { text: "Asia", correct: false },
    { text: "Africa", correct: true },
    { text: "Europe", correct: false },
    { text: "Australia", correct: false },
  ],
},
{
  question: "Who wrote the play 'Romeo and Juliet'?",
  answers: [
    { text: "Leo Tolstoy", correct: false },
    { text: "William Shakespeare", correct: true },
    { text: "Mark Twain", correct: false },
    { text: "Charles Dickens", correct: false },
  ],
},
{
  question: "Which vitamin is produced naturally when exposed to sunlight?",
  answers: [
    { text: "Vitamin A", correct: false },
    { text: "Vitamin C", correct: false },
    { text: "Vitamin D", correct: true },
    { text: "Vitamin B12", correct: false },
  ],
},
{
  question: "Which instrument is used to measure air pressure?",
  answers: [
    { text: "Thermometer", correct: false },
    { text: "Barometer", correct: true },
    { text: "Hygrometer", correct: false },
    { text: "Seismograph", correct: false },
  ],
},
{
  question: "Which is the largest desert in the world?",
  answers: [
    { text: "Sahara Desert", correct: false },
    { text: "Gobi Desert", correct: false },
    { text: "Arctic Desert", correct: false },
    { text: "Antarctic Desert", correct: true },
  ],
},
{
  question: "Which shape has three sides?",
  answers: [
    { text: "Square", correct: false },
    { text: "Triangle", correct: true },
    { text: "Rectangle", correct: false },
    { text: "Circle", correct: false },
  ],
},
{
  question: "Which planet is closest to the Sun?",
  answers: [
    { text: "Venus", correct: false },
    { text: "Earth", correct: false },
    { text: "Mercury", correct: true },
    { text: "Mars", correct: false },
  ],
},
];

//Quiz State vars

let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false;

totalQuestionSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

//Event listners

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
  //reset vars

  currentQuestionIndex = 0;
  scoreSpan.textContent = 0;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}

function showQuestion() {
  //reset state

  answersDisabled = false;

  const currentQuestion = quizQuestions[currentQuestionIndex];

  currentQuestionSpan.textContent = currentQuestionIndex + 1;

  const progressPercent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPercent + "%";

  questionText.textContent = currentQuestion.question;

  //todo: explain this in a second

  answersContainer.innerHTML = "";

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement("button");
    button.textContent = answer.text;
    button.classList.add("answer-btn");

    // what is dataset ? it's a property of the button that allow you to store the custom data

    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });
}

function selectAnswer(event) {
  //optimization check
  if (answersDisabled) return;

  answersDisabled = true;

  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true";

  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    currentQuestionIndex++;

    // check if there are more questions or if the quiz is over
    if (currentQuestionIndex < quizQuestions.length) {
      showQuestion();
    } else {
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;

  const percentage = (score / quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz() {
  resultScreen.classList.remove("active");

  startQuiz();
}
