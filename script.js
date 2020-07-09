// C Button
function clearScreen() {
  document.getElementById('result').value = '';
}

// Display entered value on screen
function liveScreen(value) {
  document.getElementById('result').value += value;
}

// Swaps stylesheet
function switchTheme() {
  let darkMode = document.getElementById('dark-mode');
  let theme = document.getElementById('theme');
  if (theme.getAttribute('href') == 'css/light.css') {
    theme.href = 'css/dark.css';
    darkMode.innerHTML = 'Light Mode 🔆';
  } else {
    theme.href = 'css/light.css';
    darkMode.innerHTML = 'Dark Mode 🌙';
  }
}
