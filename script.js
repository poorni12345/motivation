const quotes = [
  "Believe in yourself and all that you are. 💪",
  "Every day is a fresh start. 🌞",
  "Dream big and dare to fail. 🚀",
  "Be the energy you want to attract. 🌈",
  "Make today ridiculously amazing! ✨",
  "You are stronger than you think. 🦁",
  "Push yourself, because no one else will. 🏃‍♀️",
  "You’ve got this! 🔥"
];

function newQuote() {
  const quoteText = document.getElementById("quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteText.textContent = quotes[randomIndex];
}
