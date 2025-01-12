document.addEventListener('DOMContentLoaded', () => {
    const chordButton = document.getElementById('chordChart');
    const tabButton = document.getElementById('tabChart');

    chordButton.addEventListener('click', () => {
        window.location.href = './chordchart';
    });

    tabButton.addEventListener('click', () => {
        window.location.href = './tabs';
    });
});
