var x = localStorage.getItem('saves');
x = JSON.parse(x);
var scores = x;
if(Array.isArray(scores)){console.log("");
}else{
    scores = [{name: "SPN", score: 5},]
}
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
var multiplier = 15;
$("#timeHolder").text("Timer: " + 0);
scoreSort();


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
    score = score + 5 * multiplier;
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
  $("#quiz").attr("style", "display : none;");
  $("#quizEnd").attr("style", "display : none;");
  $("#startStyle").attr("style", "display : none;");
  $("#scoreTable").attr("style", "display : contents;");
  $("#scoreTableHeader").text("Highscores");
  $("#1st").text(scores[0].name + " - " +scores[0].score);
  $("#2nd").text(scores[1].name + " - " +scores[1].score);
  $("#3rd").text(scores[2].name + " - " +scores[2].score);
  $("#4th").text(scores[3].name + " - " +scores[3].score);
  $("#5th").text(scores[4].name + " - " +scores[4].score);
  $("#playAgainBtn").text("Play Again");
  scoreSort();
}

function scoreSort(){

    scores.sort((a, b) => (a.score < b.score) ? 1 : -1);
    
    if(scores.length > 5){
        scores.pop();
    }
    localStorage.setItem('saves', JSON.stringify(scores));
    var x = localStorage.getItem('saves');
    x = JSON.parse(x);

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
  multiplier = 15;
  answerCheck();
  nextQuestion();
  });

  $("#playAgainBtn").on("click", function (){
      alert('')
  })

  setInterval(function(){
    multiplier = multiplier - 1;
    if(multiplier <= 0){
        multiplier = 0;
    }
  }, 1000);

$("#inputStyle").on("keyup", function(e) {
  if (e.keyCode === 13) {
    var x = document.querySelector("#inputStyle").value.toUpperCase();
    var y = score;
    var z = {name: x, score: y}
    scores.push(z);
    scoreSort();
    highscores();
  }
});
