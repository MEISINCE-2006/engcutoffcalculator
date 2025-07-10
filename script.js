function calculateCutoff() {
  const maths = parseFloat(document.getElementById('maths').value);
  const physics = parseFloat(document.getElementById('physics').value);
  const chemistry = parseFloat(document.getElementById('chemistry').value);
  const resultCard = document.getElementById('result');

  // Validate inputs
  if (isNaN(maths) || isNaN(physics) || isNaN(chemistry) ||
      maths < 0 || maths > 200 ||
      physics < 0 || physics > 200 ||
      chemistry < 0 || chemistry > 200) {
    resultCard.innerHTML = "⚠️ Please enter valid marks between 0 and 200 for all subjects.";
    resultCard.classList.add('show');
    return;
  }

  // Calculate cutoff
  const cutoff = (maths ) + (physics/2) + (chemistry /2);

  // Display result with smooth transition
  resultCard.innerHTML = `🎉 Your Engineering Cutoff is: <span style="color:#005ad3">${cutoff.toFixed(2)}</span>`;
  resultCard.classList.add('show');
}
