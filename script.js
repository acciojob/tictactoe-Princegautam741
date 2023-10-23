// Your JavaScript code for the Tic Tac Toe game goes here
const player1Input = document.getElementById('player-1');
const player2Input = document.getElementById('player-2');
const submitButton = document.getElementById('submit');
const messageDiv = document.querySelector('.message');
const cells = document.querySelectorAll('.cell');

let currentPlayer = 'X';

// Add a click event listener to the Submit button
submitButton.addEventListener('click', () => {
    const player1Name = player1Input.value;
    const player2Name = player2Input.value;
    if (player1Name && player2Name) {
        // Initialize the game
        messageDiv.textContent = `${player1Name}, you're up`;
        for (const cell of cells) {
            cell.addEventListener('click', handleCellClick);
        }
    }
});

// Function to handle cell click
function handleCellClick(event) {
    const cell = event.target;
    if (cell.textContent === '') {
        cell.textContent = currentPlayer;
        if (checkWin()) {
            messageDiv.textContent = `${currentPlayer}, congratulations, you won!`;
            cells.forEach(cell => cell.removeEventListener('click', handleCellClick));
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
            messageDiv.textContent = `${currentPlayer === 'X' ? player1Input.value : player2Input.value}, you're up`;
        }
    }
}

// Function to check for a win
function checkWin() {
    // Implement your win-checking logic here
}

// You can continue building your game logic here
