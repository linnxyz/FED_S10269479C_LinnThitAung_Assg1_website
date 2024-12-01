let currentStepNumber = 1;
const totalSteps = 5;

function updateProgress() {
  document.getElementById(`step${currentStepNumber}`).classList.add('active')
  const progress = (currentStepNumber / totalSteps) * 100;
  document.querySelector('.progress').style.width = `${progress}%`;
  document.getElementById('currentStep').textContent = currentStepNumber;
  
  // Show/hide back button
  const backButton = document.querySelector('.back-button');
  backButton.style.display = currentStepNumber > 1 ? 'flex' : 'none';
}

function nextStep(currentStep) {
  document.getElementById(`step${currentStep}`).classList.remove('active');
  currentStepNumber = currentStep + 1;
  updateProgress();
  document.getElementById(`step${currentStepNumber}`).classList.add('active');
}

function previousStep() {
  document.getElementById(`step${currentStepNumber}`).classList.remove('active');
  currentStepNumber--;
  updateProgress();
  document.getElementById(`step${currentStepNumber}`).classList.add('active');
}
function submitForm() {
  const email = document.getElementById('email').value;
  if (email && email.includes('@')) {
    // Show loading screen
    document.getElementById("pg").style.display = "none";
    document.getElementById('step5').classList.remove('active');
    document.getElementById('loading').classList.add('active');

    // Simulate loading time (replace with actual form submission)
    setTimeout(() => {
      document.getElementById('loading').classList.remove('active');
      document.getElementById('step6').classList.add('active');
      // Hide progress bar and back button on success
      document.querySelector('.progress-container').style.display = 'none';
    }, 2000);

  } else {
    alert('Please enter a valid email address');
  }
}
document.querySelectorAll('.option').forEach(option => {
  option.addEventListener('click', () => {
    const checkbox = option.querySelector('input[type="checkbox"]');
    checkbox.checked = !checkbox.checked;
    option.classList.toggle('selected', checkbox.checked);
  });
});



