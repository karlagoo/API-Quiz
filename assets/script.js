// user clicks on start button to begin game

//declaring the variables
var startBtn = document.querySelector("#startBtn");
var feedback = document.getElementById("feedback");
var answerOptions = document.getElementById("answers");
var questionTitle = document.getElementById("question-title");
var timerDisplay = document.getElementById("timer-display");
var scoreDisplay = document.getElementById("score");
var initialsEl = document.getElementById("initials");


var quizQuestionIndex = 0;

var timer = 20;

var timerCount;

var totalScore = 0;

var questions = [
    {
        question: "What does API stand for?",
        answerOptions: ["Application Programming Interface", "Application Programming Interface", "Alocating Popular interfaces", "Approrpriating Programming Interface"],
        correctAnswer: "Application Programming Interface",
    },
    {
        question: "What do we use to call a function?",
        answerOptions: ["()", "[]", "{}", "<>"],
        correctAnswer: "()",
    },
    {
        question: "How do you create a function in Javascript?",
        answerOptions: ["function myFunction()", "function:myFunction()", "function=myFunction()", "myfunction()"],
        correctAnswer: "function myFunction()",
    },
    {
        question: "Which event occurs when the user clicks on an HTML element",
        answerOptions: ["onchange", "onmouseclick", "onclick", "onmouseover"],
        correctAnswer: "onclick",
    }
]
// start quiz function goes here - here we start timer, and show the starting time. Hide start screen and unhide the quiz quesions
function startQuiz() {
    !renderEndScreen();
    timerCount = setInterval(function () {
        score = 0
        timer--;
        timerDisplay.innerHTML = timer;
        if (timer <= 0) {
            endGame(false);
        }
    }, 1000);
    timerDisplay.innerHTML = timer;
    quizQuestion();
}

// this function displays the next questions - gets questions from questions array
function quizQuestion() {
    var quizQuestion = questions[quizQuestionIndex].question;
    var answerOptions = questions[quizQuestionIndex].answerOptions;
    startBtn.style.display = "none"
    document.getElementById("question-title").innerHTML = quizQuestion;
    //document.getElementById("answer-options").innerHTML = answerOptions;
    for (var i = 0; i < answerOptions.length; i++) {
        //create a button for each option
        var optionBtn = document.createElement("button");
        //display option value on each button
        optionBtn.setAttribute("value", answerOptions[i]);
        optionBtn.addEventListener("click", answerClick);

        optionBtn.innerHTML = answerOptions[i];
        answers.appendChild(optionBtn)
    }
};
// create a function for wrong click and right click - this one is right click
function answerClick() {

    // quizQuestion();
    if (this.value === questions[quizQuestionIndex].correctAnswer) {
        feedback.innerHTML = "Correct!";
        feedback.style.color = "green";
        quizQuestionIndex++;
        totalScore++;
        scoreDisplay.innerHTML = totalScore;
        answerOptions.innerHTML = "";
        // see if questions have run out, if there's still time then game ends with a win, else go on to the next question
        if (quizQuestionIndex === questions.length) {
            endGame(true);
        } else {
            quizQuestion();
            setTimeout(function () {
                feedback.innerHTML = "";
            }, 1000);
        }
    } else {
        timer--;
        timerDisplay.innerHTML = timer;
        timerDisplay.style.color = "red";
        setTimeout(function () {
            timerDisplay.style.color = "black";
        }, 1000);
        feedback.innerHTML = "Wrong Answer!";
        feedback.style.color = "red";
        setTimeout(function () {
            feedback.innerHTML = "";
        }, 1000);
    }
}

function endGame(win) {
    !renderEndScreen();
    clearInterval(timerCount);
    questionTitle.innerHTML = "";
    answers.innerHTML = "";
    feedback.style.color = win ? "green" : "red";
    feedback.innerHTML = win ? "You Win!! Congrats" : "Timer ran out! You Lose!";
}
function renderEndScreen() {
    var endScreenEl = document.getElementById("end-screen");
    if (endScreenEl.style.display === "none") {
        endScreenEl.style.display = "block";
    } else {
        endScreenEl.style.display = "none";
    }
}
startBtn.onclick = startQuiz