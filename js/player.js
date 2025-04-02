class Player {
	constructor(gameState) {
		this.gameState = gameState;
	}

	makeMove(cellId) {
		if (this.gameState.currentPlayer === 0 || this.gameState.difficulty === "player") {
			let row = Math.floor(cellId / 4);
			let col = cellId % 4;
			if (this.gameState.gameBoard[`${row},${col}`] === '') {
				this.gameState.gameBoard[`${row},${col}`] = this.gameState.currentPlayerSymbol;
				document.getElementById(`${row},${col}`).textContent = this.gameState.currentPlayerSymbol;
				this.gameState.switchPlayer();
			}
		}
	}

}

export default Player;