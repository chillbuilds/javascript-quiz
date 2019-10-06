var questionNum = 0;
var totalSeconds = 0;
var secondsElapsed = 0;
var currentAnswer = "";
var userAnswer = "";
$("#timeHolder").text("Timer: " + 0);

function renderAnswers(){
    for(i = 0; i < questions[questionNum].choices.length;i++){
        var answerBtn = $("<button>");
        answerBtn.addClass("answerBtns");
        answerBtn.text(questions[questionNum].choices[i]);
        $("#questionContainer").append(answerBtn);
        
    }

}

function setTime(){
    var timerInterval = setInterval(function(){
        totalSeconds--;
        $("#timeHolder").text("Timer: " + totalSeconds);
        console.log(totalSeconds)
    }, 1000);
}

function quizStart(){
    totalSeconds = questions.length * 15;
    setTime();
    document.querySelector("#startBtn").id = 'questionContainer';
    nextQuestion();
        
}

function nextQuestion(){
    var newQuestion = questions[questionNum].title;
    questionContainer.innerHTML = "<h1>" + newQuestion + "</h1>";
    renderAnswers();
    questionNum = questionNum + 1;
}

function answerCheck(){
alert("dope");
}

function highscores(){
    nextQuestion();
}



$("#startStyle").on("click", quizStart);

$("#scoreStyle").on("click", highscores);

$(".answerBtns").on("click", highscores);
