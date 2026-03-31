// Theme toggle functionality
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or default to dark mode
const currentTheme = localStorage.getItem('theme') || 'dark';

// Apply saved theme on page load
function applyTheme(theme) {
  if (theme === 'light') {
    htmlElement.classList.add('light-mode');
    themeToggle.textContent = '🌙';
  } else {
    htmlElement.classList.remove('light-mode');
    themeToggle.textContent = '☀️';
  }
  localStorage.setItem('theme', theme);
}

// Initialize theme on page load
applyTheme(currentTheme);

// Toggle theme on button click
themeToggle.addEventListener('click', () => {
  const isLightMode = htmlElement.classList.contains('light-mode');
  const newTheme = isLightMode ? 'dark' : 'light';
  applyTheme(newTheme);
});

// Profile navigation functionality
const profileButtons = document.querySelectorAll('.profile-link, .profile button[data-href]');
profileButtons.forEach((button) => {
  button.addEventListener('click', (event) => {
    event.preventDefault();

    const profileName = button.dataset.name || button.getAttribute('data-name');
    const profileImage = button.dataset.image || button.getAttribute('data-image');

    if (profileName) {
      localStorage.setItem('perfilAtivoNome', profileName);
    }
    if (profileImage) {
      localStorage.setItem('perfilAtivoImagem', profileImage);
    }

    const target = button.dataset.href || button.getAttribute('href');
    if (target) {
      window.location.href = target;
    }
  });
});
