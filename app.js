




const startButton = document.getElementById("start-button");
const answerBox = document.getElementById("answer-box");
const infoDisplay = document.getElementById("info-box");
const questionElement = document.getElementById("question");

let shuffledQuestions, currentQuestionIndex;

const questions = [
  {
    question: "Who wasn't in Super Smash Bros. for N64?",
    answers: [
      { text: "Mario", correct: false },
      { text: "Waluigi", correct: true },
      { text: "Yoshi", correct: false },
      { text: "Captain Falcon", correct: false }
    ]
  },
  {
    question: "What was Mario's OG name?",
    answers: [
      { text: "Jumpman", correct: true },
      { text: "Superdude", correct: false },
      { text: "Highguy", correct: false },
      { text: "Mario", correct: false }
    ]
  },
  {
    question: "What did Bowser used to be called?",
    answers: [
      { text: "Koopa", correct: false },
      { text: "Troopa", correct: false },
      { text: "Lakitu", correct: false },
      { text: "King Koopa", correct: true }
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
  question.answers.forEach(answer => {
    //Creates new paragraph element for each answer, prepends answer HTML to the answer box
    const p = document.createElement('p');

    const answerDiv =
    `<div class="radio">
      <label>
        <input type="radio" name="answer"  value="option1" checked>
        <p class="answer">${answer.text}</p>
      </label>
    </div>`;

    p.innerHTML = answerDiv;
    answerBox.prepend(p);
  });
};
