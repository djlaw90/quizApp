




const startButton = document.getElementById("start-button");
const answerBox = document.getElementById("answer-box");
const infoDisplay = document.getElementById("info-box");
const questionElement = document.getElementById("question");

let shuffledQuestions, currentQuestionIndex;

const questions = [
  {
    question: "Who wasn't in Super Smash Bros. for N64?",
    answers: [
      {text: "Mario", correct: false},
      {text: "Waluigi", correct: true},
      {text: "Yoshi", correct: false},
      {text: "Captain Falcon", correct: false}
    ]

  }
];

//shows counter and question box, hides the start button
var showQuiz = () => {
  answerBox.classList.remove("hidden");
  infoDisplay.classList.remove("hidden");
  question.classList.remove("hidden");
  startButton.classList.add("hidden");
  shuffledQuestions = questions.sort(() => Math.random() - .5)
  currentQuestionIndex = 0;
  setNextQuestion();
 };

startButton.addEventListener("click", showQuiz);


var setNextQuestion = () => {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
};

var showQuestion = (question) => {
  questionElement.innerText = question.question;
};
