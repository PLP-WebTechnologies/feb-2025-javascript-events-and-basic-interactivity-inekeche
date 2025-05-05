
const clickBtn = document.getElementById('clickBtn');
const keypressInput = document.getElementById('keypressInput');
const secretBox = document.getElementById('secretBox');
const output = document.getElementById('output');

// Button click event
clickBtn.addEventListener('click', () => {
  output.textContent = '✅ Button was clicked!';
});

// Keypress detection
keypressInput.addEventListener('keydown', (e) => {
  output.textContent = `You pressed: ${e.key}`;
});

// Double-click event
secretBox.addEventListener('dblclick', () => {
  output.textContent = '🎉 Secret double-click activated!';
});

// Long press detection
let pressTimer;
secretBox.addEventListener('mousedown', () => {
  pressTimer = setTimeout(() => {
    output.textContent = '🔒 Secret long-press action triggered!';
  }, 1000); // 1 second long press
});

secretBox.addEventListener('mouseup', () => {
  clearTimeout(pressTimer);
});
secretBox.addEventListener('mouseleave', () => {
  clearTimeout(pressTimer);
});


// Toggle Button
function toggleButton(btn) {
  btn.classList.toggle('active');
  btn.textContent = btn.classList.contains('active') ? 'Clicked!' : 'Click Me';
}

// Image Gallery
const images = [
  'https://placekitten.com/500/300',
  'https://placekitten.com/501/300',
  'https://placekitten.com/502/300',
];
let currentImg = 0;
const imgElement = document.getElementById('gallery-img');

function showImage(index) {
  currentImg = (index + images.length) % images.length;
  imgElement.style.opacity = 0;
  setTimeout(() => {
    imgElement.src = images[currentImg];
    imgElement.style.opacity = 1;
  }, 200);
}

function nextImage() {
  showImage(currentImg + 1);
}

function prevImage() {
  showImage(currentImg - 1);
}

// Tabs
function openTab(index) {
  document.querySelectorAll('.tab-content').forEach((el, i) => {
    el.classList.toggle('active', i === index);
  });
  document.querySelectorAll('.tab-buttons button').forEach((btn, i) => {
    btn.classList.toggle('active', i === index);
  });
}



const form = document.getElementById('signupForm');
const email = document.getElementById('email');
const password = document.getElementById('password');
const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');

function validateEmail(value) {
  const pattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  return pattern.test(value);
}

function validatePassword(value) {
  return value.length >= 8;
}

function showError(input, message) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = message;
  errorDiv.className = 'error';
}

function clearError(input) {
  const errorDiv = input.nextElementSibling;
  errorDiv.textContent = '';
}

// Real-time validation
email.addEventListener('input', () => {
  if (!email.value) {
    showError(email, 'Email is required');
  } else if (!validateEmail(email.value)) {
    showError(email, 'Enter a valid email');
  } else {
    clearError(email);
  }
});

password.addEventListener('input', () => {
  if (!password.value) {
    showError(password, 'Password is required');
  } else if (!validatePassword(password.value)) {
    showError(password, 'Password must be at least 8 characters');
  } else {
    clearError(password);
  }
});

form.addEventListener('submit', (e) => {
  e.preventDefault();

  let isValid = true;

  if (!email.value || !validateEmail(email.value)) {
    showError(email, 'Enter a valid email');
    isValid = false;
  }

  if (!password.value || !validatePassword(password.value)) {
    showError(password, 'Password must be at least 8 characters');
    isValid = false;
  }

  if (isValid) {
    alert('Form submitted successfully!');
    form.reset();
    clearError(email);
    clearError(password);
  }
});