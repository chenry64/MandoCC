document.addEventListener('DOMContentLoaded', () => {
    const homeButton = document.getElementById('home');
    const chordButton = document.getElementById('chordCharts');

    homeButton.addEventListener('click', () => {
        window.location.href = './home';
    });

    chordButton.addEventListener('click', () => {
        window.location.href = './chordchart';
    });
});
