document.addEventListener('DOMContentLoaded', () => {
    const cells = document.querySelectorAll('.cell');
    const resetButton = document.getElementById('reset');
    const messageElement = document.getElementById('message');
    let currentPlayer = 'X';
    let board = Array(9).fill(null);
    let gameActive = true;

    const winningCombinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    const checkWin = () => {
        for (const combination of winningCombinations) {
            const [a, b, c] = combination;
            if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                return true;
            }
        }
        return false;
    };

    const checkDraw = () => {
        return board.every(cell => cell !== null);
    };

    const handleCellClick = (e) => {
        const index = e.target.getAttribute('data-index');
        if (board[index] || !gameActive) {
            return;
        }

        board[index] = currentPlayer;
        e.target.textContent = currentPlayer;

        if (checkWin()) {
            messageElement.textContent = `${currentPlayer} wins!`;
            gameActive = false;
        } else if (checkDraw()) {
            messageElement.textContent = 'It\'s a draw!';
            gameActive = false;
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    };

    const resetGame = () => {
        board.fill(null);
        cells.forEach(cell => cell.textContent = '');
        currentPlayer = 'X';
        gameActive = true;
        messageElement.textContent = '';
    };

    cells.forEach(cell => cell.addEventListener('click', handleCellClick));
    resetButton.addEventListener('click', resetGame);
});
