let options = ["Rock", "Paper", "Scissors"];
let playerScore = 0;
let computerScore = 0;

function computerPlay()
{
    return Math.floor(Math.random()*3)
}
function playRound(playerSelection, computerSelection) 
{
    if(playerSelection == computerSelection){
        console.log(`It's a tie! You both choose ${options[playerSelection]}`)
    }
    else if(playerSelection == 0 && computerSelection == 2){
        console.log(`${options[playerSelection]} beats ${options[computerSelection]}. You get a point`)
        playerScore++;
    }
    else if(playerSelection == 2 && computerSelection == 0){
        console.log(`${options[computerSelection]} beats ${options[playerSelection]}. Computer gets a point`)
        computerScore++;
    }
    else{
        if(playerSelection > computerSelection){
            console.log(`${options[playerSelection]} beats ${options[computerSelection]}. You get a point`)
            playerScore++;
        }
        else{
            console.log(`${options[computerSelection]} beats ${options[playerSelection]}. Computer gets a point`)
            computerScore++;
        }
    }
}

function game()
{

    const computerSelection = computerPlay();
    let playerSelection = parseInt(window.prompt("Type \"1\" to play Rock, \"2\" to play Paper or \"3\" to play Scissors:"))

    while(playerSelection !== 1 && playerSelection !== 2 && playerSelection !== 3)
    {
        alert("Wrong input, please choose a number between 1 and 3.")
        playerSelection = parseInt(window.prompt("Type \"1\" to play Rock, \"2\" to play Paper or \"3\" to play Scissors:"))
    }
    playerSelection -= 1;

    playRound(playerSelection, computerSelection)
}

function results()
{
    if(playerScore > computerScore) console.log(`Congratulations, you win! Score: ${playerScore}-${computerScore}`)
    else if(computerScore > playerScore) console.log(`You loose. Score: ${playerScore}-${computerScore}`)
    else console.log(`Game results in a tie: ${playerScore}-${computerScore}`)
}

for(let i=0; i<5; i++) 
{
    game()
}
    
results()

