const gameArray = [ "Rock", "Paper", "Sissors"];



function getPlayerOnechoice (gameArray){
const playerOneRandom = Math.floor(Math.random() * gameArray.length);
const randomOutput = gameArray[playerOneRandom];
return randomOutput;
}


function getComputerChoice (gameArray){
const randomResult = Math.floor(Math.random() * gameArray.length);
const randomPick = gameArray[randomResult];
return randomPick;

}
const playerSelection = getPlayerOnechoice(gameArray);
const computerSelection = getComputerChoice(gameArray);

function playRound(playerSelection, computerSelection){
    
   if (playerSelection === gameArray [0] && computerSelection === gameArray [1]){
   return gameArray[1] + " Wins Over " + gameArray [0] ; v 
 } else if (playerSelection === gameArray [0] && computerSelection === gameArray [2]){
  return gameArray [0] + " Wins Over "  + gameArray [2]; 
 } else if (playerSelection === gameArray [1] && computerSelection === gameArray [2]){
  return gameArray [2] + " Wins Over " + gameArray [1]; 
} else if (playerSelection === gameArray [1] && computerSelection === gameArray [0]){
  return gameArray [1] + " Wins Over " + gameArray [0]; 
} else if (playerSelection === gameArray [2] && computerSelection === gameArray [1]){
  return gameArray [2] + " Wins Over " + gameArray [1] ; 
} else if (playerSelection === gameArray [2] && computerSelection === gameArray [0]){
  return gameArray [0] + " Wins Over " + gameArray [2] ; 
} else { return "Game is even"}

}

function game(){
  for (var i = 1; i < 8; i++);

  return playRound()
}
    console.log(game());

   // using id selector
    const container = document.querySelector('#containerId');
  
    // using first child of  id
    console.dir(container.firstElementChild);

    // using class selector
    const controls = document.querySelector('.controls');

    const div = document.createElement('div');

    div.style.color = 'blue';
    div.style.cssText= 'color: blue; background : white';
    


