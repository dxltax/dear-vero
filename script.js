const canvas = document.getElementById("confetti-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let confetti = [];

function ConfettiPiece() {
  this.x = Math.random() * canvas.width;
  this.y = Math.random() * -canvas.height;
  this.radius = Math.random() * 6 + 4;
  this.color = ["#ffb6c1", "#ffe4e1", "#e0ffff", "#e6e6fa", "#f0fff0"][Math.floor(Math.random() * 5)];
  this.speed = Math.random() * 2 + 1;
  this.tilt = Math.random() * 10 - 5;
}

function createConfetti(count) {
  for (let i = 0; i < count; i++) {
    confetti.push(new ConfettiPiece());
  }
}

function drawConfetti() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  confetti.forEach(c => {
    ctx.beginPath();
    ctx.fillStyle = c.color;
    ctx.ellipse(c.x, c.y, c.radius, c.radius / 2, c.tilt, 0, 2 * Math.PI);
    ctx.fill();
  });
  updateConfetti();
  requestAnimationFrame(drawConfetti);
}

function updateConfetti() {
  confetti.forEach(c => {
    c.y += c.speed;
    c.x += Math.sin(c.tilt / 10);
    if (c.y > canvas.height) {
      c.y = Math.random() * -canvas.height;
      c.x = Math.random() * canvas.width;
    }
  });
}

createConfetti(150);
drawConfetti();
