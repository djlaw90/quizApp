




var startButton = document.getElementById("start-button");
var questionBox = document.getElementById("question-box");
var questionCounter = document.getElementById("question-counter");
var scoreBox = document.getElementById("score");


//shows counter and question box, hides the start button
var showQuiz = () => {
  questionBox.classList.remove("hidden");
  questionCounter.classList.remove("hidden");
  scoreBox.classList.remove("hidden");
  startButton.classList.add("hidden");
 };

startButton.addEventListener("click", showQuiz);
