window.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('lang-toggle');

  const userLang = navigator.language || navigator.userLanguage;
  const langCode = userLang.split('-')[0];
  const supportedLangs = ['en', 'ja'];
  const initialLang = supportedLangs.includes(langCode) ? langCode : 'en';

  // Initial show/hide
  document.querySelectorAll('[lang]').forEach(el => {
    if (el.getAttribute('lang') === initialLang) {
      el.style.display = '';
    } else {
      el.style.display = 'none';
    }
  });

  // Set checkbox state
  if (toggle) {
    toggle.checked = (initialLang === 'ja');
  }

  // Add listener AFTER everything above
  function toggleLanguage() {
    const displayLanguage = toggle.checked ? 'ja' : 'en';

    document.querySelectorAll('[lang]').forEach(el => {
      if (el.getAttribute('lang') === displayLanguage) {
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });

    document
      .querySelector('.toggle-row')
      ?.classList.toggle('ja', displayLanguage === 'ja');
  }

  if (toggle) {
    toggle.addEventListener('change', toggleLanguage);
  }
});

