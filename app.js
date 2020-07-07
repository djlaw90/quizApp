




var startButton = document.getElementById("start-button");
var questionBox = document.getElementById("question-box")

var showQuiz = () => { questionBox.classList.remove("hidden"); startButton.classList.add("hidden") };

startButton.addEventListener("click", showQuiz);
