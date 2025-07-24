function blowCandles() {
  const flame = document.getElementById("flame");
  flame.style.display = "none";

  for (let i = 0; i < 80; i++) {
    createConfetti();
  }
}

function createConfetti() {
  const confetti = document.createElement("div");
  confetti.classList.add("confetti");

  // Position & motion
  confetti.style.left = Math.random() * 100 + "vw";
  confetti.style.animationDuration = 2 + Math.random() * 2 + "s";
  confetti.style.opacity = Math.random();
  confetti.style.transform = `rotate(${Math.random() * 360}deg)`;

  // Size & shape
  const size = Math.random() * 8 + 4;
  confetti.style.width = `${size}px`;
  confetti.style.height = `${size < 6 ? size : size * 0.5}px`;
  confetti.style.borderRadius = size < 6 ? "50%" : "2px";

  // Color
  const colors = ["#ff69b4", "#ffd700", "#87cefa", "#ffb6c1", "#7fff00"];
  confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

  document.body.appendChild(confetti);

  // Remove after animation
  setTimeout(() => {
    confetti.remove();
  }, 4000);
}
