var questionNum = 0;
var questionsAnswered = 0;
var totalSeconds = 0;
var secondsElapsed = 0;
var timerInterval = "";
var score = 0;
var correctAnswer = "";
var userAnswer = "";
var playerObject = {};
var scoresArray = [];
var highScores = false;
$("#timeHolder").text("Timer: " + 0);
var scores = [
  { name: "SPN", score: 0 },
  { name: "WDW", score: 2 },
  { name: "ASS", score: 1 }
];

scores.sort((a, b) => (a.score < b.score) ? 1 : -1);
console.log(scores);

function quizStart() {
  totalSeconds = questions.length * 15;
  $("#startStyle").attr("style", "display : none;");
  $("#quiz").attr("style", "display : contents;");
  setTime();
  nextQuestion();
}

function setTime() {
  timerInterval = setInterval(function() {
    totalSeconds--;
    $("#timeHolder").text("Timer: " + totalSeconds);

    if (totalSeconds <= 0 || questionsAnswered === questions.length) {
      quizEnd();
      totalSeconds = totalSeconds * 0;
    }
  }, 1000);
}

function nextQuestion() {
  if (questionsAnswered === questions.length)
    var newQuestion = questions[questionNum].title;
  renderAnswers();
  questionNum++;
}

function renderAnswers() {
  correctAnswer = questions[questionNum].answer;
  var x = questions[questionNum].title;
  $("#question").text(x);
  $("#a").text(questions[questionNum].choices[0]);
  $("#b").text(questions[questionNum].choices[1]);
  $("#c").text(questions[questionNum].choices[2]);
}

function answerCheck() {
  if (userAnswer == correctAnswer) {
    score++;
  } else {
    totalSeconds = totalSeconds - 5;
  }
  console.log(score);
}

function quizEnd() {
  $("#quiz").attr("style", "display : none;");
  $("#quizEnd").attr("style", "display : contents;");
  $("#timeHolder").text("Timer: " + 0);
  if (questionsAnswered == questions.length) {
    $("#header").text("You Beat The Clock");
  } else {
    $("#header").text("Times Up");
  }
  $("#scoreText").text("Your Score");
  $("#score").text(score);
  $("#initialsText").text("Enter Initials");
  clearInterval(timerInterval);
}

function highscores() {
  highscores = true;
  $("#quiz").attr("style", "display : none;");
  $("#quizEnd").attr("style", "display : none;");
  $("#startStyle").attr("style", "display : none;");
  $(".scoreTable").attr("style", "display : contents;");
  $("#scoreTableHeader").text("Highscores");
}

$("#startBtnStyle").on("click", quizStart);

$("#scoreStyle").on("click", highscores);

$(".choices").on("click", function() {
  var x = $("#a");
  x.attr("name", questions[questionNum - 1].choices[0]);
  var x = $("#b");
  x.attr("name", questions[questionNum - 1].choices[1]);
  var x = $("#c");
  x.attr("name", questions[questionNum - 1].choices[2]);
  userAnswer = $(this).attr("name");
  questionsAnswered = questionsAnswered + 1;
  answerCheck();
  nextQuestion();
});

$("#inputStyle").on("keyup", function(e) {
  if (e.keyCode === 13) {
    var x = document.querySelector("#inputStyle").value;
    var y = score;
    highscores();
  }
});
