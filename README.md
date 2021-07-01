# **API-Quiz** 📝
## In this homework, we used our newfound knowledge to create a quiz that registered each player's score

This assignment was the toughest one for me. Javascript is a battle field, and I am not the strongest soldier, but I did have fun creating it

To begin, I set my global variables that were attached to the HTML page. 

* The start button
* The div that held the question title and the answer options
* The timer display
* The score display

The next step was setting up my questions variables. This was going to be an object with multiple arrays such as the question itself, the answers, and the correct answer.
Following that, I began setting up the functions. I knew that for starters, I needed to set an onclick event to begin the game. Once that was clicked, the startQuiz function was called 

* In this function the timer would start, the score would be set to 0 and the quiz question function would be called

The start Quiz function was comprised of calling down the questions variables. I also knew that since the answer options was part of the array, I had to specify what to call, so I called the questions array (at the index it was at) at .answerOptions. Next was creating a button for every answer that was available and appending it to each other.

* For these buttons I have them an attribute to make sure that they aligned with the answer option that belonged to the question.
* I also gave them an onclick event to give signal that an answer was chosen.

Next I made an answer click function that demonstrated when the user clicked the correct or incorrect answer:

* I created an if statement that showed if the user clicked the correct answer a green alert would show letting them know they clicked on the correct answer
* Else they received a red signal that said "wrong answer" and one second was subtracted from the timer. In this section, I also set the "feedback" variable as clear so it would display the message according to whether or not they won or lost.
* I also added the empty answerOptions.innerHTML variable as an empty array so as to clear the previous question and only display the current question.

Lastly, I created an endGame function in which the Game over text would be displayed. In this section, the timer would also be cleared.

## **Here is the link to my quiz:** https://karlagoo.github.io/API-Quiz/

## Here is a screenshot of what it looks like 