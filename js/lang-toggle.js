const toggle = document.getElementById('lang-toggle');

function toggleLanguage() {
    const displayLanguage = toggle.checked ? 'ja' : 'en';

    document.querySelectorAll('[lang]').forEach(el => {
        el.style.display = (el.getAttribute('lang') === displayLanguage) ? 'inline' : 'none';
    });
    document.querySelector('.toggle-row').classList.toggle('ja', displayLanguage === 'ja');
}

toggle.addEventListener('change', toggleLanguage);

window.addEventListener('DOMContentLoaded', () => {
  // Get browser language code, e.g., "en-US" or "ja-JP"
  const userLang = navigator.language || navigator.userLanguage;
  // Extract just the first part, e.g., "en" or "ja"
  const langCode = userLang.split('-')[0];

  // Define supported languages on your site
  const supportedLangs = ['en', 'ja'];

  // Default to English if browser language not supported
  const initialLang = supportedLangs.includes(langCode) ? langCode : 'en';

  // Show only the elements with matching lang attribute
  document.querySelectorAll('[lang]').forEach(el => {
    el.style.display = (el.getAttribute('lang') === initialLang) ? 'inline' : 'none';
  });

  // Set the toggle slider to match initial language state
  const toggle = document.getElementById('lang-toggle');
  if (toggle) {
    toggle.checked = (initialLang === 'ja');  // checked means Japanese here
  }
});
