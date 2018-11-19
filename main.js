let userScore = 0;
let pcScore = 0;

let userChoice = '';
let pcChoice = '';

function displayResult() {
  document.getElementById('userScore').innerHTML = userScore;
  document.getElementById('pcScore').innerHTML = pcScore;
};

function newGame(userInput) {
    userChoice = userInput;

    switch (userChoice+'|'+getPcChoice()) {
        case "schere|schere":
        case "stein|stein":
        case "papier|papier":
          draw();
          break;

        case "schere|stein":
        case "stein|papier":
        case "papier|schere":
          lose();
          break;

        case "schere|papier":
        case "stein|schere":
        case "papier|stein":
          win();
          break;
      }

    //console.log(getPcChoice())
}

function win(){
    userScore++;
    displayResult();
    document.getElementById('text').innerHTML = 'Herzlichen Glückwunsch, gewonnen.';
    
    document.getElementById(userChoice).classList.add("green"); 
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("green"); 
    }, 500);
}

function lose(){
    pcScore++;
    displayResult();
    document.getElementById('text').innerHTML = 'Schade, verloren.';

    document.getElementById(userChoice).classList.add("red"); 
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("red"); 
    }, 500);
}

function draw(){
    displayResult();
    document.getElementById('text').innerHTML = 'Nochmal, unentschieden.';

    document.getElementById(userChoice).classList.add("grey"); 
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove("grey"); 
    }, 500);
}




function getPcChoice() {
  switch (Math.floor(Math.random() * 3 + 1)) {
    case 1:
      pcChoice = 'schere';
      break;
    case 2:
      pcChoice = 'stein';
      break;
    case 3:
      pcChoice = 'papier';
      break;
  }

  return pcChoice;
}
