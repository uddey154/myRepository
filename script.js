document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const shuffleButton = document.getElementById('shuffleButton');

    let words = [];

    fetch('words.json')
        .then(response => response.json())
        .then(data => {
            words = data;
        })
        .catch(error => console.error('Error loading words:', error));

    shuffleButton.addEventListener('click', function() {
        if (words.length > 0) {
            const randomIndex = Math.floor(Math.random() * words.length);
            display.textContent = words[randomIndex];
        } else {
            display.textContent = 'データの読み込み中です';
        }
    });
});
