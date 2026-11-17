const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorButton = document.querySelector("#scissorButton");
const resetButton = document.querySelector("#resetButton");
const wonScore = document.querySelector("#wonScore");
const lostScore = document.querySelector("#lostScore");
const gameResult = document.querySelector("#result");
const resultSection = document.querySelector("#resultSection");

let playerScore = 0;
let computerScore = 0;

function game(playerMove){
    let randomNumber = Math.random();
    let computerMove;
    let result;

    if(randomNumber >= 0 && randomNumber < (1/3)){
        computerMove = 'rock';
    }else if(randomNumber >= (1/3) && randomNumber < (2/3)){
        computerMove = 'paper';
    }else{
        computerMove = 'scissor';
    }

    if((computerMove === 'paper' && playerMove === 'rock') || (computerMove === 'scissor' && playerMove === 'paper') || (computerMove === 'rock' && playerMove === 'scissor')){
        computerScore++;
        lostScore.textContent = computerScore;
        result = `You Lose \n Computer choose ${computerMove} and You choose ${playerMove}`;
        resultSection.style.display = "flex";
        gameResult.className = "loser";
        gameResult.textContent = result;
    }else if((computerMove === 'rock' && playerMove === 'paper') || (computerMove === 'scissor' && playerMove === 'rock') || (computerMove === 'paper' && playerMove === 'scissor')){
        playerScore++;
        wonScore.textContent = playerScore;
        result = `You Won \n Computer choose ${computerMove} and You choose ${playerMove}`;
        resultSection.style.display = "flex";
        gameResult.className = "winner";
        gameResult.textContent = result;
    }else{
        result = `Tied \n Computer choose ${computerMove} and You choose ${playerMove}`;
        resultSection.style.display = "flex";
        gameResult.className = "tie";
        gameResult.textContent = result;
    }
}

rockButton.addEventListener('click', function(){
    game('rock');
});

paperButton.addEventListener('click', function(){
    game('paper');
});

scissorButton.addEventListener('click', function(){
    game('scissor');
});

resetButton.addEventListener('click', function(){
    playerScore = 0;
    computerScore = 0;
    lostScore.textContent = computerScore;
    wonScore.textContent = playerScore;
    gameResult.textContent = '';
    gameResult.className = '';
    resultSection.style.display = "none";
});
