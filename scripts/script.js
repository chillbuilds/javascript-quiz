var startBtnEl = document.querySelector("#startBtn")
var scoreBtnEl = document.querySelector("#scoreBtn")
var questionNum = 0;
var totalSeconds = 0;
var secondsElapsed = 0;
var questionsStr = JSON.stringify(questions);
$("#timeHolder").text("Timer: " + 0);

    // var question_number = [];
    // for(i = 0; i < question.length; i++){
    //     question_number.push(questions[i].number);
    // }


function quizStart(){
    totalSeconds = questions.length * 15;     //arraylength * 5 seconds
    $("#timeHolder").text("Timer: " + totalSeconds);
    startBtn.innerHTML = ""; //placeholder
    document.querySelector("#startBtn").id = 'questionContainer';
    var newQuestion = questions[questionNum].title;
    questionContainer.innerHTML = newQuestion;

    // questionNum = questionNum + 1;
    
}

function nextQuestion(){
    questionNum = questionNum + 1;
    var newQuestion = questions[questionNum].title;
    questionContainer.innerHTML = newQuestion;
}

function highscores(){
    nextQuestion();
}



startBtnEl.addEventListener("click", quizStart)

scoreBtnEl.addEventListener("click", highscores)