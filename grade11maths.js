const buttons = document.querySelectorAll('.answer');
const feedback = document.getElementById('feedback');

// Correct answer
const correctAnswer = 'x = 3';

// Create Next Level button dynamically
const nextButton = document.createElement('button');
nextButton.textContent = 'Next Level';
nextButton.id = 'next-level';
nextButton.style.display = 'none'; // hidden initially
nextButton.onclick = () => {
  window.location.href = 'level2.html'; // link to next level
};

// Add button to the DOM, below feedback
feedback.insertAdjacentElement('afterend', nextButton);

buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Clear previous feedback
    buttons.forEach(b => b.classList.remove('correct', 'wrong'));
    nextButton.style.display = 'none'; // hide until correct answer

    if (button.textContent === correctAnswer) {
      button.classList.add('correct');
      feedback.textContent = '✅ Correct! Great job!';
      nextButton.style.display = 'inline-block'; // show next level button
    } else {
      button.classList.add('wrong');
      feedback.textContent = '❌ Try again!';
    }
  });
});