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

		let ChosenCell;
		if (this.gameState.difficulty === "easy") {
			// Easy AI is very simply random placement, not very useful at all, but helpful
      // for learning the rules of the game
			ChosenCell = emptyCells[Math.floor(Math.random() * emptyCells.length)];
		} else if (this.gameState.difficulty === "medium") {
			// TO DO: Implement medium difficulty AI
			ChosenCell = this.medAI(emptyCells);
		} else if (this.gameState.difficulty === "hard") {
			// Hard AI holds a relatively simple process of events:
      // 1. If there is potential win, it chooses that win
      // 2. If there is a potential opponent win, it blocks that win
      // 3. It randomly chooses a cell
			ChosenCell = this.hardAI(emptyCells);
		}
		this.gameState.gameBoard[ChosenCell] = 'O';
		document.getElementById(ChosenCell).textContent = 'O';
	}

  medAI(emptyCells) {
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }

  hardAI(emptyCells) {
    for (let cell of emptyCells) {
      let [i, j] = cell.split(',').map(Number);
      // Check for potential winning move by placing 'O'
      this.gameState.gameBoard[`${i},${j}`] = 'O';
      if (this.gameState.checkWin() === 'O') {
          this.gameState.gameBoard[`${i},${j}`] = '';
          return cell;
      }
      this.gameState.gameBoard[`${i},${j}`] = '';

      // Check for blocking opponent's winning move by placing 'X'
      this.gameState.gameBoard[`${i},${j}`] = 'X';
      if (this.gameState.checkWin() === 'X') {
          this.gameState.gameBoard[`${i},${j}`] = '';
          this.gameState.gameBoard[`${i},${j}`] = 'O';
          return cell;
      }
      this.gameState.gameBoard[`${i},${j}`] = '';
    }

    // If no immediate winning or blocking move, proceed with a random guess
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }
}

export default AI;