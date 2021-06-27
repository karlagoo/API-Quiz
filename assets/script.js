// user clicks on start button to begin game
var generateBtn = document.querySelector("#button");
var feedback = document.getElementById("feedback")
var quizQuestionIndex = 0
var questions = [
    {
        question: "What does API stand for?",
        answer1: "Application Programming Interface",
        answer2: "Algorithm Programming Involvement",
        answer3: "Alocating Popular interfaces",
        answer4: "Approrpriating Programming Interface",
        correctAnswer: "Application Programming Interface",
    },
    {
        question: "This is a question",
        answer1: "Application Programming Interface",
        answer2: "Algorithm Programming Involvement",
        answer3: "Alocating Popular interfaces",
        answer4: "Approrpriating Programming Interface",
        correctAnswer: "Application Programming Interface",
    },
    {
        question: "What does API stand for?",
        answer1: "Application Programming Interface",
        answer2: "Algorithm Programming Involvement",
        answer3: "Alocating Popular interfaces",
        answer4: "Approrpriating Programming Interface",
        correctAnswer: "Application Programming Interface",
    }
    {
        question: "What does API stand for?",
        answer1: "Application Programming Interface",
        answer2: "Algorithm Programming Involvement",
        answer3: "Alocating Popular interfaces",
        answer4: "Approrpriating Programming Interface",
        correctAnswer: "Application Programming Interface",
    }
]
// start quiz function goes here - here we start timer, and show the starting time. Hide start screen and unhide the quiz quesions
function startQuiz () {
    quizQuestion ();
}


// this function displays the next questions - gets questions from questions array
function quizQuestion (){
    var quizQuestion = questions[quizQuestionIndex];
}

// create a function for wrong click and right click - this one is right click
function rightAnswer (){
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