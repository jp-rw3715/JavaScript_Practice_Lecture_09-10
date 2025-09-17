const maxAttempts = 10;
let secretNumber = 1 + Math.floor(Math.random() * 50);
let attempts = 0;

function submitGuess() {
  const guessInput = document.getElementById("guessInput");
  const feedback = document.getElementById("feedback");
  const progressBar = document.getElementById("progressBar");
  const guessBtn = document.getElementById("guessBtn");
  const resetBtn = document.getElementById("resetBtn");

  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 50) {
    feedback.textContent = "⚠️ Please enter a number between 1 and 50.";
    feedback.className = "text-yellow-300 font-semibold mt-4";
    return;
  }

  attempts++;

  if (guess === secretNumber) {
    feedback.textContent = `🎉 Congratulations! You guessed the number in ${attempts} attempts.`;
    feedback.className = "text-green-400 font-bold mt-4";
    guessBtn.disabled = true;
    resetBtn.style.display = "inline-block";
  } else if (attempts >= maxAttempts) {
    feedback.textContent = `😞 Game over! The number was ${secretNumber}. Better luck next time!`;
    feedback.className = "text-red-400 font-bold mt-4";
    guessBtn.disabled = true;
    resetBtn.style.display = "inline-block";
  } else if (guess < secretNumber) {
    feedback.textContent = "⬆️ Too low! Try again.";
    feedback.className = "text-blue-300 font-semibold mt-4";
  } else {
    feedback.textContent = "⬇️ Too high! Try again.";
    feedback.className = "text-purple-300 font-semibold mt-4";
  }

  // Update progress bar width
  progressBar.style.width = `${(attempts / maxAttempts) * 100}%`;

  guessInput.value = "";
  guessInput.focus();
}

function resetGame() {
  secretNumber = 1 + Math.floor(Math.random() * 50);
  attempts = 0;

  const feedback = document.getElementById("feedback");
  const progressBar = document.getElementById("progressBar");
  const guessBtn = document.getElementById("guessBtn");
  const resetBtn = document.getElementById("resetBtn");
  const guessInput = document.getElementById("guessInput");

  feedback.textContent = "";
  progressBar.style.width = "0%";

  guessBtn.disabled = false;
  resetBtn.style.display = "none";

  guessInput.value = "";
  guessInput.focus();
}

// Initial focus
document.getElementById("guessInput").focus();
