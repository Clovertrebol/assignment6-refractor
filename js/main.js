$(document).ready(pageReady);

function pageReady() {
	var userChoice;
	var computerChoice;
	var outcome;
	var userWins = 0;
	var computerWins = 0;

	$(".play-button").click(playClick);
	function playClick() {
	  $(".play-button").slideUp();
	  $(".game-container").slideDown();
	  computerPlay();
	}

	$(".play-again").click(againClick);
	function againClick() {
	  clearText();
	  $(".results-container").slideDown("slow", function() {
	    $(".choices-container").slideDown();    
	  });
	  
	  computerPlay();
	}  

	$(".rock").click(rockClick)
	function rockClick() {
	  userChoice = "rock";
	  determineWinner();
	}

	$(".paper").click(paperClick)
	function paperClick() {
	  userChoice = "paper";
	  determineWinner();
	}

	$(".scissors").click(scissorsClick)
	function scissorsClick() {
	  userChoice = "scissors";
	  determineWinner();
	}

	// Contains core game logic 
	function determineWinner() {
	  
	  if (userChoice == computerChoice) {
	    outcome = "It's a tie!";
	  }
	  else if (userChoice == "rock") {
	    if (computerChoice == "paper") {
	    	outcome = "Computer wins!";
			computerWins++;
	    }
	    else {
	      outcome = "You win!";
	      userWins++;
	    }
	  }
	  else if (userChoice == "paper") {
	    if (computerChoice == "scissors") {
	      outcome = "Computer wins!";
	      computerWins++;
	    }
	    else {
	      outcome = "You win!";
	      userWins++;
	    }    
	  }
	  else if (userChoice == "scissors") {
	    if (computerChoice == "rock") {
	      outcome = "Computer wins!";
	      computerWins++;
	    }
	    else {
	      outcome = "You win!";
	      userWins++;
	    }    
	  }
	  
	  $(".user-choice").text(userChoice);
	  $(".computer-choice").text(computerChoice);
	  $(".results").text(outcome);  
	  $("#computer-tally").text(computerWins);  
	  $("#user-tally").text(userWins);  
	  
	  $(".choices-container").slideUp("slow", function() {
	    $(".results-container").slideDown();
	  });

	}

	// Clears choice and results text
	function clearText() {
	  $(".user-choice").text("");
	  $(".computer-choice").text("");
	  $(".results").text("");
	}

	// Generates random computer choice
	function computerPlay() {
	  var randomNum = getRandomInt(0, 2);
	  var choices = ["rock", "paper", "scissors"];
	  
	  computerChoice = choices[randomNum];
	  console.log(computerChoice);
	}

	// Generates random number from range
	function getRandomInt(min, max) {
	    return Math.floor(Math.random() * (max - min + 1)) + min;
	}	
}
