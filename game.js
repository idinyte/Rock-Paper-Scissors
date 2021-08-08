let options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay()
{
    return Math.floor(Math.random()*3)
}
function playRound() 
{
    if(playerScore+computerScore == 5){
        playerScore = 0;
        computerScore = 0;
        score.style.color = "black";
    }

    const computerSelection = computerPlay();
    let playerSelection = options.indexOf(this.id);

    if(playerSelection == computerSelection){
        message.textContent = `It's a tie! You both choose ${options[playerSelection]}`
        message.style.color = "blue";
    }
    else if(playerSelection == 0 && computerSelection == 2){
        message.textContent = `${options[playerSelection]} beats ${options[computerSelection]}. You get a point`
        playerScore++;
        message.style.color = "green";
    }
    else if(playerSelection == 2 && computerSelection == 0){
        message.textContent = `${options[computerSelection]} beats ${options[playerSelection]}. Computer gets a point`
        computerScore++;
        message.style.color = "red";
    }
    else{
        if(playerSelection > computerSelection){
            message.textContent = `${options[playerSelection]} beats ${options[computerSelection]}. You get a point`
            playerScore++;
            message.style.color = "green";
        }
        else{
            message.textContent = `${options[computerSelection]} beats ${options[playerSelection]}. Computer gets a point`
            computerScore++;
            message.style.color = "red";
        }
    }
    score.textContent = `${playerScore} - ${computerScore}`;

    if(playerScore+computerScore == 5){
        results();
    }
}

function results()
{
    if(playerScore > computerScore) {
        message.textContent = `Congratulations, you win!`;
        message.style.color = "gold";
        score.style.color = "green";
    }
    else if(computerScore > playerScore) {
        message.textContent = `You loose`;
        message.style.color = "black";
        score.style.color = "red";
    }

}
const UI = document.querySelector("#UI");
let score = document.createElement("h1");
score.id = "score";
score.textContent = "0 - 0";

let message = document.createElement("p");
message.id = "message";

UI.appendChild(score);
UI.appendChild(message);

const buttons = document.querySelectorAll(".btn");
buttons.forEach(button => button.addEventListener("click", playRound));

