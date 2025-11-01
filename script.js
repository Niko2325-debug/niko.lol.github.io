// Language switching functionality
function switchLanguage(lang) {
    const elements = document.querySelectorAll('[data-lang]');
    elements.forEach(el => {
        if (el.dataset.lang === lang) {
            el.classList.remove('hidden');
        } else {
            el.classList.add('hidden');
        }
    });
    
    // Store preference in localStorage
    localStorage.setItem('preferredLanguage', lang);
}

// Initialize language based on preference or browser language
document.addEventListener('DOMContentLoaded', () => {
    const preferredLang = localStorage.getItem('preferredLanguage') || 
                         (navigator.language.startsWith('ru') ? 'ru' : 'en');
    switchLanguage(preferredLang);
});