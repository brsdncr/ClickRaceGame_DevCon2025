let playerScore = 0;
let computerScore = 0;
let maxScore = 100;
let gameRunning = false;
let computerInterval;

const playerButton = document.getElementById("player-button");
const playerScoreDisplay = document.getElementById("player-score");
const computerScoreDisplay = document.getElementById("computer-score");
const resultPopup = document.getElementById("result-popup");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-button");

playerButton.addEventListener("click", () => {
    if (!gameRunning) startGame();
    if (playerScore < maxScore && computerScore < maxScore) {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
        animateButton(playerButton);
        checkWinner();
    }
});

function startGame() {
    gameRunning = true;

    //Computer speed is between 100 - 250
    let computerSpeed = 120
    console.log("computerSpeed:", computerSpeed)
    computerInterval = setInterval(() => {
        if (computerScore < maxScore && playerScore < maxScore) {
            computerScore++;
            computerScoreDisplay.textContent = computerScore;
            animateButton(document.getElementById("computer-button"));
            checkWinner();
        }
    }, computerSpeed);
}

function checkWinner() {
    if (playerScore >= maxScore) {
        endGame("You won! 🎉");
    } else if (computerScore >= maxScore) {
        endGame("Automation Won! 😢");
    }
}

function endGame(message) {
    clearInterval(computerInterval);
    gameRunning = false;
    resultMessage.textContent = message;
    resultPopup.classList.remove("hidden");
    playerButton.disabled = true;
}

restartButton.addEventListener("click", () => {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
    resultPopup.classList.add("hidden");
    playerButton.disabled = false;
    gameRunning = false;
});

function animateButton(button) {
    button.classList.add("animate");
    setTimeout(() => button.classList.remove("animate"), 200);
}
