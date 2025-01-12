document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');
    const tabButton = document.getElementById('tabChart');

    homeButton.addEventListener('click', () => {
        window.location.href = './home';
    });

    tabButton.addEventListener('click', () => {
        window.location.href = './tabs';
    });
});
