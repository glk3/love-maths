// Wait for DOM to finish loading before running the game
// Get the button element and event listeners to them.

document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "submit") {
                alert("You clicked Submit!");
            } else {
                let gameType = this.getAttribute("data-type");
                alert(`You clicked ${gameType}`);
            }
        });
    }
});
/**
 * The main game "loop",called when the scrip is first loaded
 * And after the user's answer has bean processed
 */
function runGame() {
    // Creates two random numbers between 1 and 25. 
    let num1 = Math.floor(Math.random() * 25) + 1;
    let num2 = Math.floor(Math.random() * 25) + 1;
}

function checkAnswer() {

}

function calculateCorrectAnswer() {
    
}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion(){

}

function displaySubtractQuestion() {

}

function displayMultipyQuestion() {

}