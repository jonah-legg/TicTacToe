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
			// Medium AI holds a relatively simple process of events:
      // 1. If there is potential win, it chooses that win
      // 2. If there is a potential opponent win, it blocks that win
      // 3. It randomly chooses a cell
			ChosenCell = this.medAI(emptyCells);
		} else if (this.gameState.difficulty === "hard") {
			// Hard AI holds a relatively simple process of events:
      // 1. If there is potential win, it chooses that win
      // 2. If there is a potential opponent win, it blocks that win
      // 3. Finds best move, picks said move
      // 4. As a fall back, chooses random cell
			ChosenCell = this.hardAI(emptyCells);
		}
		this.gameState.gameBoard[ChosenCell] = 'O';
		document.getElementById(ChosenCell).textContent = 'O';
	}

  medAI(emptyCells) {
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

  hardAI(emptyCells) {
    let bestScore = 0;
    let bestMove = null;

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

        // Find best strategic move
        let score = this.evaluateMove(i, j);

        if (score > bestScore) {
            bestScore = score;
            bestMove = cell;
        }
    }

    // Return the best move based on the score if no immediate win or block
    if (bestMove !== null) {
        return bestMove;
    }

    // Fallback to random move in case of bizarre case
    return emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }

  evaluateMove(i, j) {
    let score = 0;

    for (let m = 0; m < this.MOLS.length; m++) {
        let symbol = this.MOLS[m][i][j];

        // Calculate the potential of completing a line for 'O'
        let ownLinePotential = this.linePotential(m, symbol, 'O');
        if (ownLinePotential === 3) {
            score += 100;
        } else if (ownLinePotential > 0) {
            score += ownLinePotential * 10;
        }

        // Calculate the necessity of blocking opponent's line for 'X'
        let opponentLinePotential = this.linePotential(m, symbol, 'X');
        if (opponentLinePotential === 3) {
            score += 90;
        }
    }

    return score;
  }

  // Helper function to calculate the potential of a line in a given MOLS and symbol
  linePotential(molsIndex, symbol, player) {
    let potential = 0;
    let isBlocked = false;
    for (let row = 0; row < 4; row++) {
        let col = this.gameState.MOLS[molsIndex][row].indexOf(symbol);
        if (this.gameState.gameBoard[`${row},${col}`] === player) {
            potential++;
        } else if (this.gameState.gameBoard[`${row},${col}`] !== '') {
            isBlocked = true;
            break;
        }
    }
    return isBlocked ? 0 : potential;
  }
}

export default AI;