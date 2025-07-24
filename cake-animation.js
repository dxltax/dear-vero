function blowCandles() {
  const flames = document.querySelectorAll('.flame');
  flames.forEach(flame => {
    flame.style.display = 'none';
  });

  // optional: add confetti after blowing out
  const confetti = document.createElement('div');
  confetti.innerText = '🎉';
  confetti.style.position = 'fixed';
  confetti.style.fontSize = '4rem';
  confetti.style.top = '50%';
  confetti.style.left = '50%';
  confetti.style.transform = 'translate(-50%, -50%)';
  confetti.style.animation = 'pop 1s ease-out forwards';
  document.body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 1500);
}
