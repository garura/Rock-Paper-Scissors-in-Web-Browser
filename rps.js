/*
 * Rock Paper Scissors game
 *
 */
'use strict';

var rps = {
    playerChoice:"",
    computerChoice:0,
    results:""
}

rps.rock = function(event) {
    rps.playerChoice = "Rock";
    $('#results').text("Rock Selected");
    getAjaxData1(event);
}

rps.scissors = function(event) {
    rps.playerChoice = "Scissors";
    $('#results').text("Scissors Selected");
    getAjaxData1(event);
}

rps.paper = function(event) {
    rps.playerChoice = "Paper";
    $('#results').text("Paper Selected");
    getAjaxData1(event);
}

rps.battle = function() {
  rps.computerChoice = Math.floor((Math.random()*3+1));
  if ((rps.playerChoice === "Rock" || rps.playerChoice === "Paper" || rps.playerChoice === "Scissors") && rps.computerChoice == 2) {
    rps.results = "Computer picked " + rps.playerChoice + ", it's a draw!";
  }
  else if (rps.playerChoice === "Rock") {
    if (rps.computerChoice == 3) {
        rps.results = "Computer picked Scissors... You win!";
    }
    else  {
        rps.results = "Computer picked Paper... the Computer wins!";
    }
  } 
  else if (rps.playerChoice === "Paper") {
    if (rps.computerChoice == 3) {
        rps.results = "Computer picked Rock... You win!";
    }
    else {
        rps.results = "Computer picked Scissors... the Computer Wins!"
    }  
  }
  else if (rps.playerChoice === "Scissors") {
    if (rps.computerChoice == 3) {
        rps.results = "Computer picked Paper... You win!";
    }
    else {
        rps.results = "Computer picked Rock... the Computer Wins!";
    }
  }
  else {
    rps.results = "Please select a weapon before attempting to battle!";
  }
  $('#results').text(rps.results);
  rps.playerChoice = "";
  rps.computerChoice = 0; 
}

rps.strategy = function(event) {
    getAjaxData1(event)
}

$(document).ready(function () {
    $("#rock").click(rps.rock);
    $('#paper').click(rps.paper);
    $('#scissors').click(rps.scissors);
    $('#battle').click(rps.battle);
    $('#strategy').click(rps.strategy); 
});


function getAjaxData1(event) {
        var filename = '/' + event.target.id + '.json';
        $.getJSON(filename, function (jsonObj) {
            var info = '';
            $.each(jsonObj, function (prop, value) {
                info += (value);
            });
            if (event.target.id == "strategy") {
                $('#tip').text(info);
            }
            else{
                $('#details').text(info);
            }
        });
    }
