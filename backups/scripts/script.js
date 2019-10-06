var questionNum = 0;
var questionsAnswered = 0;
var totalSeconds = 0;
var secondsElapsed = 0;
var finalScore = 0;
var currentAnswer = "";
var userAnswer = "";
$("#timeHolder").text("Timer: " + 0);

function quizStart() {
  totalSeconds = questions.length * 15;
  setTime();
  document.querySelector("#startBtn").id = "questionContainer";
  nextQuestion();
}

function setTime() {
  var timerInterval = setInterval(function() {
    totalSeconds--;
    $("#timeHolder").text("Timer: " + totalSeconds);

    if (totalSeconds <= 0 || questionsAnswered === questions.length) {
      quizEnd();
    }
  }, 1000);
}

function nextQuestion() {
  var newQuestion = questions[questionNum].title;
  questionContainer.innerHTML = "<h1>" + newQuestion + "</h1>";
  renderAnswers();
  questionNum++;
}

function renderAnswers() {

  for (i = 0; i < questions[questionNum].choices.length; i++) {
    var answerBtn = $("<button>");
    answerBtn.addClass("answerBtn");
    answerBtn.attr("answer", questions[questionNum].choices[i]);
    answerBtn.text(questions[questionNum].choices[i]);
    $("#questionContainer").append(answerBtn);
  }
}

function answerCheck() {
  alert("dope");
}

function quizEnd() {
  $("#timeHolder").text("Timer: " + 0);
  console.log("dope");
  if (questionsAnswered === questions.length) {
    questionContainer.innerHTML =
      "<h1>You Beat The Clock</h1><div id='finalScore'>Your score is " +
      finalScore +
      "</div>";
  } else {
    questionContainer.innerHTML =
      "<h1>Time's Up</h1><div id='finalScore'>Your score is " +
      finalScore +
      "</div>";
  }
}

function highscores() {
  nextQuestion();
}

$("#startStyle").on("click", quizStart);

$("#scoreStyle").on("click", highscores);

$(".answerBtn").on("click", function() {
  alert("dope");
});
