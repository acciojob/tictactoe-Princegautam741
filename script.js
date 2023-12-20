// Function to check for a win
function checkWin() {
    // Define the winning combinations
    const winPatterns = [
        [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
        [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
        [1, 5, 9], [3, 5, 7]             // Diagonals
    ];

    // Check each winning combination
    for (const pattern of winPatterns) {
        const [a, b, c] = pattern;
        const cellA = document.getElementById(a);
        const cellB = document.getElementById(b);
        const cellC = document.getElementById(c);

        if (
            cellA.textContent !== '' &&
            cellA.textContent === cellB.textContent &&
            cellA.textContent === cellC.textContent
        ) {
            return true; // We found a winner
        }
    }

    return false; // No winner yet
}
