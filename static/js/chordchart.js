document.addEventListener('DOMContentLoaded', () => {
    const chordContainer = document.getElementById('chordContainer');
    const chordForm = document.getElementById('chordForm');

    const fetchChords = async () => {
        const response = await fetch('/api/chords');
        const chords = await response.json();
        chordContainer.innerHTML = chords.map(chord => `
            <div class="chord">
                <h3>${chord.title}</h3>
                <pre>${chord.content}</pre>
            </div>
        `).join('');
    };

    chordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const title = document.getElementById('chordTitle').value;
        const content = document.getElementById('chordContent').value;

        await fetch('/api/chords', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ title, content }),
        });

        fetchChords();
        chordForm.reset();
    });

    fetchChords();
});
