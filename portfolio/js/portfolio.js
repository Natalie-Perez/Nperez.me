/****** Guessing Game *****/
var answer = 6;
 
var guessInput = document.getElementById("user-guess");
var guessSubmitButton = document.getElementById("submit-guess");
var messageArea = document.getElementById("message");

guessSubmitButton.addEventListener("click", function(evt) {
  var guessedNumber = parseInt( guessInput.value ); // convert guess to number
 
  if (guessedNumber > answer) {
    messageArea.innerText = "Too high. Guess lower.";
  }
  else if (guessedNumber < answer) {
    messageArea.innerText = "Too low. Guess higher.";
  }
  else if (guessedNumber === answer) {
    messageArea.innerText = "You got it! The number was " + String(answer);
  }
});


/**** Timer ****/
var time = 60; 
 
var timer = document.getElementById("timer");
 
setInterval( function() {
  if (time < 0) {
    return;               
  }
 
  timer.innerHTML = time; // update the timer with the current time
  time = time - 1;        // decrement the time every second
}, 1000);



/**** Magic 8 Ball ****/
$(document).ready(function() {

    $('form#magic-eight-ball').submit(function(e) {
        e.preventDefault();
        var answers = ['Yes', 'No', 'Maybe', 'Oh who knows!'];
        var random = answers[Math.floor(Math.random() * answers.length)];
        $('div#answer').text(random).fadeIn('fast');
    });
});