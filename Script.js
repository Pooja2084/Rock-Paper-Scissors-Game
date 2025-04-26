const startScreen = document.getElementById("start-screen");
const gameScreen = document.getElementById("game-screen");
const playerScoreEl = document.getElementById("player-score");
const computerScoreEl = document.getElementById("computer-score");
const resultEl = document.getElementById("result");
const choiceButtons = document.querySelectorAll(".choice");

let playerScore = 0;
let computerScore = 0;

function startGame() {
  startScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
}

const choices = ["rock", "paper", "scissors"];

choiceButtons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = getComputerChoice();
    const result = getResult(playerChoice, computerChoice);
    updateScores(result);
    showResult(result, playerChoice, computerChoice);
  });
});

function getComputerChoice() {
  return choices[Math.floor(Math.random() * choices.length)];
}

function getResult(player, computer) {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  } else {
    return "lose";
  }
}

function updateScores(result) {
  if (result === "win") {
    playerScore++;
    playerScoreEl.textContent = playerScore;
  } else if (result === "lose") {
    computerScore++;
    computerScoreEl.textContent = computerScore;
  }
}

function showResult(result, player, computer) {
  if (result === "draw") {
    resultEl.textContent = `It's a draw! You both chose ${player}.`;
  } else if (result === "win") {
    resultEl.textContent = `You win! ${player} beats ${computer}.`;
  } else {
    resultEl.textContent = `You lose! ${computer} beats ${player}.`;
  }
}
