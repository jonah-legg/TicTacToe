import AI from './ai.js';

class State {
	constructor() {
		this.currentPlayer = 0; // 0 for player 1, 1 for player 2
		this.ai = new AI(this);
		this.gameBoard = {};
		this.difficulty = "";
		this.ParallelClasses = [
			[
				[0, 1, 2, 3],
				[1, 0, 3, 2],
				[2, 3, 0, 1],
				[3, 2, 1, 0]
			],
			[
				[0, 1, 2, 3],
				[3, 2, 1, 0],
				[1, 0, 3, 2],
				[2, 3, 0, 1]
			],
			[
				[0, 1, 2, 3],
				[2, 3, 0, 1],
				[3, 2, 1, 0],
				[1, 0, 3, 2]
			],
			[
				[0, 1, 2, 3],
				[0, 1, 2, 3],
				[0, 1, 2, 3],
				[0, 1, 2, 3]
			],
			[
				[0, 0, 0, 0],
				[1, 1, 1, 1],
				[2, 2, 2, 2],
				[3, 3, 3, 3]
			]
		];
	}

	initializeGameBoard() {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				this.gameBoard[`${i},${j}`] = '';
			}
		}
	}

	switchPlayer() {
		this.checkState();
		this.currentPlayer = (this.currentPlayer === 0) ? 1 : 0;
		if (this.currentPlayer === 1 && this.difficulty !== "player") {
			this.ai.makeAiMove();
			this.checkState();
			this.currentPlayer = (this.currentPlayer === 0) ? 1 : 0;
		}
	}

	get currentPlayerSymbol() {
		return (this.currentPlayer === 0) ? 'X' : 'O';
	}

	checkWin() {
		for (let i = 0; i < this.ParallelClasses.length; i++) {
			if (i < 4) {
				for (let symbol = 0; symbol < 4; symbol++) {
					let player = null;
					let hasLine = true;
					for (let row = 0; row < 4; row++) {
						let col = this.ParallelClasses[i][row].indexOf(symbol);
						if (this.gameBoard[`${row},${col}`] === '') {
							hasLine = false;
							break;
						}
						if (player === null) {
							player = this.gameBoard[`${row},${col}`];
						} else if (this.gameBoard[`${row},${col}`] !== player) {
							hasLine = false;
							break;
						}
					}
					if (hasLine) {
						return player;
					}
				}
			} else {
				// Check horizontal lines
				for (let symbol = 0; symbol < 4; symbol++) {
					let player = null;
					let hasLine = true;
					for (let row = 0; row < 4; row++) {
						for (let col = 0; col < 4; col++) {
							if (this.gameBoard[`${row},${col}`] === '') {
								hasLine = false;
								break;
							}
							if (player === null) {
								player = this.gameBoard[`${row},${col}`];
							} else if (this.gameBoard[`${row},${col}`] !== player) {
								hasLine = false;
								break;
							}
						}
						if (hasLine) {
							return player;
						}
					}
				}
			}
		}
		return null;
	}

	checkDraw() {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				if (this.gameBoard[`${i},${j}`] === '') {
					return false;
				}
			}
		}
		return true;
	}

	resetGame() {
		for (let i = 0; i < 4; i++) {
			for (let j = 0; j < 4; j++) {
				this.gameBoard[`${i},${j}`] = '';
				document.getElementById(`${i},${j}`).textContent = '';
			}
		}
		this.currentPlayer = 0;
	}

	checkState() {
		let winner = this.checkWin();
		if (winner !== null) {
			this.gameOver(winner);
		} else if (this.checkDraw()) {
			this.gameOver(null);
		}
	}

	gameOver(winner) {
		document.getElementById("game-over-menu").style.display = "block";
		document.getElementById("game-over-menu").style.opacity = 0;
		setTimeout(() => {
			document.getElementById("game-over-menu").style.opacity = 1;
		}, 100);

		document.getElementById("game-board").style.filter = "blur(10px)";
		document.getElementById("game-board").style.pointerEvents = "none";

		if (winner !== null) {
			document.getElementById("game-over-message").textContent = `Player ${winner} wins!`;
		} else {
			document.getElementById("game-over-message").textContent = "It's a draw!";
		}

		document.getElementById("restart-game").addEventListener("click", () => {
			this.resetGame();
			document.getElementById("game-over-menu").style.display = "none";

			document.getElementById("game-board").style.filter = "";
			document.getElementById("game-board").style.pointerEvents = "";
		});

		document.getElementById("change-difficulty").addEventListener("click", () => {
			this.resetGame();
			document.getElementById("game-over-menu").style.display = "none";

			document.getElementById("difficulty-menu").style.display = "block";
			document.getElementById("game-board").style.display = "none";

			document.getElementById("game-board").style.filter = "";
			document.getElementById("game-board").style.pointerEvents = "";
		});

		document.getElementById("exit-game").addEventListener("click", () => {
			this.resetGame();
			document.getElementById("game-over-menu").style.display = "none";

			document.getElementById("start-menu").style.display = "block";
			document.getElementById("game-board").style.display = "none";

			document.getElementById("game-board").style.filter = "";
			document.getElementById("game-board").style.pointerEvents = "";
		});
	}
}

export default State;
