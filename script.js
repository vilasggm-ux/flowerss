const revealBtn = document.getElementById('revealBtn');
const secret = document.getElementById('secret');

revealBtn.addEventListener('click', () => {
  const opening = secret.hidden;
  secret.hidden = !opening;
  revealBtn.textContent = opening ? 'Hide the surprise ♡' : 'Open your little surprise 💌';
  if (opening) secret.scrollIntoView({ behavior: 'smooth', block: 'center' });
});
