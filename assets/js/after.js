document.addEventListener('DOMContentLoaded', () => {
    const headerIcon = document.querySelector('.header-icon');
    const card = document.getElementById('card');

    headerIcon.addEventListener('click', () => {
        if (card.style.display === 'none' || !card.style.display) {
            card.style.display = 'block';
            setTimeout(() => {
                card.classList.add('visible');
            }, 10); 
        } else {
            card.classList.remove('visible');
            card.addEventListener('transitionend', () => {
                if (!card.classList.contains('visible')) {
                    card.style.display = 'none';
                }
            }, { once: true });
        }
    });
});
