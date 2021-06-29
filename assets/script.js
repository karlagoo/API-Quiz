// user clicks on start button to begin game

//declaring the variables
var startBtn = document.querySelector("#startBtn");
var feedback = document.getElementById("feedback");
var answerOptions = document.getElementById("answerOptions");
var questionTitle = document.getElementById("question-title");





var quizQuestionIndex = 0;


var questions = [
    {
        question: "What does API stand for?",
        answerOptions: ["Application Programming Interface","Application Programming Interface","Alocating Popular interfaces","Approrpriating Programming Interface"],
        correctAnswer: "Application Programming Interface",
    },
    {
        question: "What do we use to call a function?",
        answerOptions: ["()","[]","{}","<>"],
        correctAnswer: "()",
    },
    {
        question: "What does API stand for?",
        answerOptions: ["Application Programming Interface","Application Programming Interface","Alocating Popular interfaces","Approrpriating Programming Interface"],
        correctAnswer: "Application Programming Interface",
    },
    {
        question: "What does API stand for?",
        answerOptions: ["Application Programming Interface","Application Programming Interface","Alocating Popular interfaces","Approrpriating Programming Interface"],
        correctAnswer: "Application Programming Interface",
    }
]

// start quiz function goes here - here we start timer, and show the starting time. Hide start screen and unhide the quiz quesions
function startQuiz () {
    quizQuestion ();
    console.log("startBtn clicked")
}


// this function displays the next questions - gets questions from questions array
function quizQuestion (){
    var quizQuestion = questions[quizQuestionIndex].question;
    var answerOptions = questions[quizQuestionIndex].answerOptions;
    startBtn.style.display = "none"
    document.getElementById("question-title").innerHTML = quizQuestion;
    //document.getElementById("answer-options").innerHTML = answerOptions;
    for(var i = 0; i < answerOptions.length; i++){
        //create a button for each option
        var optionBtn = document.createElement("button");
        //display option value on each button
        optionBtn.innerHTML = answerOptions[i];
        document.getElementById("answer-options").appendChild(optionBtn)
    }

}

// create a function for wrong click and right click - this one is right click
function rightAnswer (){
    quizQuestionIndex++;
    quizQuestion();
    if (this.val === questions[quizQuestionIndex].correctAnswer){
        feedback.textContent = "Correct!";
    } else {
        feedback.textContent = "Wrong Answer!";
    }
}

    // when answered wrong - timer is subtracted (font turns red)

// when all questions are answered OR timer runs out - game is over

// when game is over initials with score are stored
// Quiz end function - stop timer, show high score screen, hide questions, if timer runs out call this function
function gameOver () {
}
startBtn.onclick = startQuiz