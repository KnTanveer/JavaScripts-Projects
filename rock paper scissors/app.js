const display = document.getElementById('display')
const scoreBoard = document.getElementById('score')
const score = { wins: 0, loses: 0, ties: 0 }

function playGame(playerMove) {
    let result = '';
    let computerMove = pickComputerMove()

    if (playerMove === 'rock') {
       if (computerMove === 'rock') {
        display.innerHTML = `Tie. You ${playerMove} : Computer ${computerMove}`   
       } else if (computerMove === 'paper') {
        display.innerHTML = `You lose. You ${playerMove} : Computer ${computerMove}`
       } else if (computerMove === 'scissors') {
        display.innerHTML = `You Win! You ${playerMove} : Computer ${computerMove}`
       }
    } else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
        display.innerHTML = `You win! You ${playerMove} : Computer ${computerMove}`   
       } else if (computerMove === 'paper') {
        display.innerHTML = `Tie. You ${playerMove} : Computer ${computerMove}`
       } else if (computerMove === 'scissors') {
        display.innerHTML = `You lose. You ${playerMove} : Computer ${computerMove}`
       }
    } else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
        display.innerHTML = `You lose. You ${playerMove} : Computer ${computerMove}`   
       } else if (computerMove === 'paper') {
        display.innerHTML = `You win! You ${playerMove} : Computer ${computerMove}`
       } else if (computerMove === 'scissors') {
        display.innerHTML = `Tie. You ${playerMove} : Computer ${computerMove}`
       }
    }

    updateScore()
}

function updateScore() {
    if (display.innerHTML.includes('win')) {
        score.wins++
    }   else if (display.innerHTML.includes('lose')) {
        score.loses++
    }    else if (display.innerHTML.includes('Tie')) {
        score.ties++
    }

    scoreBoard.innerHTML = `Wins: ${score.wins}, Loses: ${score.loses}, Ties: ${score.ties}`
}

function resetScore() {
    score.wins = 0;
    score.loses = 0;
    score.ties = 0;

    display.innerHTML = ''
    updateScore()
}

function pickComputerMove() {
    const moves = ['rock', 'paper', 'scissors']
    const random = Math.floor(Math.random() * 3)

    let computerMove = moves[random]
    return computerMove;
}