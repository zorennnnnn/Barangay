// Show and hide popup form
const subscribeBtn = document.getElementById('subscribeBtn');
const popupForm = document.getElementById('popupForm');
const closeBtn = document.querySelector('.close-btn');

subscribeBtn.addEventListener('click', () => {
    popupForm.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
    popupForm.style.display = 'none';
});

// Close popup if clicked outside of the form
window.addEventListener('click', (event) => {
    if (event.target === popupForm) {
        popupForm.style.display = 'none';
    }
});
