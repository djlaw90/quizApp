




var startButton = document.getElementById("start-button");
var answerBox = document.getElementById("answer-box");
var infoDisplay = document.getElementById("info-box");
var question = document.getElementById("question");

//shows counter and question box, hides the start button
var showQuiz = () => {
  answerBox.classList.remove("hidden");
  infoDisplay.classList.remove("hidden");
  question.classList.remove("hidden");
  startButton.classList.add("hidden");
 };

startButton.addEventListener("click", showQuiz);
