//jshint esversion:6

let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

//Step 3
function generateTarget() {
  var randomNumber = Math.floor(Math.random()*10);
  return randomNumber;
}

//Step 4
function compareGuesses(userGuess, computerGuess, secretNumber) {
  userGuessDiff = Math.abs(secretNumber - userGuess);
  computerGuessDiff = Math.abs(secretNumber - computerGuess);
  if (userGuess === computerGuess) {
    return true;
  } else if (userGuess === secretNumber || (userGuessDiff < computerGuessDiff)) {
      return true;
    } else {
      return false;
    }
}

//Step 5
function updateScore (winner) {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  }
}

//Step 6
function advanceRound () {
  currentRoundNumber++;
}
