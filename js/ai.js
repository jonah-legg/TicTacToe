class AI {
	constructor(gameState) {
		this.gameState = gameState;
	}

	makeAiMove() {
		let emptyCells = [];
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (this.gameState.gameBoard[`${i},${j}`] === '') {
					emptyCells.push(`${i},${j}`);
				}
			}
		}
		let randomCell;
		if (this.gameState.difficulty === "easy") {
			// TO DO: Implement easy difficulty AI
			randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
		} else if (this.gameState.difficulty === "medium") {
			// TO DO: Implement medium difficulty AI
			randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
		} else if (this.gameState.difficulty === "hard") {
			// TO DO: Implement hard difficulty AI
			randomCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
		}
		this.gameState.gameBoard[randomCell] = 'O';
		document.getElementById(randomCell).textContent = 'O';
	}
}

export default AI;