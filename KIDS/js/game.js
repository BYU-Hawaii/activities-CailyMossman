document.addEventListener('DOMContentLoaded', () => {
    const choices = document.querySelectorAll('.choices img');
    const resultDiv = document.getElementById('result');
    const resetButton = document.getElementById('resetButton');

    choices.forEach(choice => {
        choice.addEventListener('click', () => {
            const playerChoice = choice.getAttribute('data-choice');
            const computerChoice = choices[Math.floor(Math.random() * choices.length)].getAttribute('data-choice');
            const result = determineWinner(playerChoice, computerChoice);
            displayResult(playerChoice, computerChoice, result);
        });
    });

    resetButton.addEventListener('click', () => {
        resultDiv.textContent = '';
    });

    function determineWinner(playerChoice, computerChoice) {
        if (playerChoice === computerChoice) {
            return 'It\'s a tie!';
        } else if (
            (playerChoice === 'rock' && computerChoice === 'scissors') ||
            (playerChoice === 'paper' && computerChoice === 'rock') ||
            (playerChoice === 'scissors' && computerChoice === 'paper')
        ) {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }

    function displayResult(playerChoice, computerChoice, result) {
        resultDiv.innerHTML = `
            <p>You chose:</p>
            <img src="images/${playerChoice}.png" alt="${playerChoice}">
            <p>Computer chose:</p>
            <img src="images/${computerChoice}.png" alt="${computerChoice}">
            <p>${result}</p>
        `;
    }
});

