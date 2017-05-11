//variables
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var lettersGuessed = [];
var numLeft = 10;
var wins = 0;
var losses = 0;
var computerGuess;

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {

    if (numLeft == 10) {
        //computer randomly chooses a letter from alphabet
        computerGuessRandom = alphabet[Math.floor(Math.random() * alphabet.length)];
    }
    computerGuess = computerGuessRandom;

    // Determine which key was pressed
    var letterGuess = event.key;

    // Add guess to array of guesses
    lettersGuessed.push(letterGuess.toLowerCase());

    // Check the guessed letter against the computerGuess

    if (letterGuess == computerGuess) {
        wins++;
        numLeft = 10;
        lettersGuessed = [];
    } else {
        numLeft--;
        if (numLeft == 0) {
            losses++;
            numLeft = 10;
            lettersGuessed = [];
        }
    }

    //write into HTML

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('numLeft').innerHTML = "Guesses Left: " + numLeft;
    document.getElementById('lettersGuessed').innerHTML = "Your Guesses so far: " + lettersGuessed;

};

document.getElementById('wins').innerHTML = "Wins: " + wins;
document.getElementById('losses').innerHTML = "Losses: " + losses;
document.getElementById('numLeft').innerHTML = "Guesses Left: " + numLeft;
document.getElementById('lettersGuessed').innerHTML = "Your Guesses so far: " + lettersGuessed;
