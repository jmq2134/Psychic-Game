var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var numLeft = 15; //number of guesses
var lettersGuessed = []; //letters user guessed
var losses = [0];
var wins = [0];
// var losses=losses;
// var wins=wins;
var amountOfGuess = numLeft;



// Randomizes the global alphabet bank
function randomizer(alphabet) {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
}

//function that initiallizes randomize alphabet bank and true/false.
document.onkeyup = function(event) {

    var userGuess = String.fromCharCode(event.keyCode).toLowerCase();

    var computerGuess = randomizer(alphabet);

    if (userGuess == computerGuess) {
        console.log("correct", lettersGuessed);
        document.getElementById("wins").innerHTML = (wins.length);
        lettersGuessed.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = (lettersGuessed);
        (wins += 1);

        // document.getElementById("lettersGuessed").innerHTML=(lettersGuessed.length);

    } else {
        console.log("no", numLeft, lettersGuessed);
        document.getElementById("losses").innerHTML = (losses.length);
        lettersGuessed.push(userGuess);
        document.getElementById("lettersGuessed").innerHTML = (lettersGuessed);
        numLeft--;
        // (losses+=1);
        document.getElementById("numLeft").innerHTML = (numLeft);
        // document.getElementById("lettersGuessed").innerHTML=(lettersGuessed.indexOf);

    }
    if (numLeft === 0) {
        // reset.resetGame()
        alert("You lose!");
        reset.resetGame();
        losses += 1;
        userGuessed = [];


    };

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "Losses: " + losses;
    document.getElementById('numLeft').innerHTML = "Guesses Left: " + numLeft;
    document.getElementById('lettersGuessed').innerHTML = "Your Guesses so far: " + lettersGuessed;

}


var reset = {
    resetGame: function() {
        if (numGuess == 0) {
            document.onekeyup = false;
            numGuess = 15;
            userGuessed = [];
        }
    }
}
