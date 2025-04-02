import State from './state.js';
import Player from './player.js';

const gameState = new State();
const player = new Player(gameState);

document.getElementById("start-button").addEventListener("click", function() {
	document.getElementById("start-menu").style.display = "none";
	document.getElementById("player-menu").style.display = "block";
});

document.getElementById("two-player").addEventListener("click", function() {
  gameState.difficulty = "player";
	document.getElementById("player-menu").style.display = "none";
	document.getElementById("game-board").style.display = "block";
	gameState.initializeGameBoard();
	for (let i = 0; i < 16; i++) {
		document.getElementById(`${Math.floor(i / 4)},${i % 4}`).addEventListener('click', function() {
			player.makeMove(i);
		});
	}
});

document.getElementById("cpu-player").addEventListener("click", function() {
	document.getElementById("player-menu").style.display = "none";
	document.getElementById("difficulty-menu").style.display = "block";
});

document.getElementById("easy-button").addEventListener("click", function() {
	gameState.difficulty = "easy";
	document.getElementById("difficulty-menu").style.display = "none";
	document.getElementById("game-board").style.display = "block";
	gameState.initializeGameBoard();
	for (let i = 0; i < 16; i++) {
		document.getElementById(`${Math.floor(i / 4)},${i % 4}`).addEventListener('click', function() {
			player.makeMove(i);
		});
	}
});

document.getElementById("medium-button").addEventListener("click", function() {
	gameState.difficulty = "medium";
	document.getElementById("difficulty-menu").style.display = "none";
	document.getElementById("game-board").style.display = "block";
	gameState.initializeGameBoard();
	for (let i = 0; i < 16; i++) {
		document.getElementById(`${Math.floor(i / 4)},${i % 4}`).addEventListener('click', function() {
			player.makeMove(i);
		});
	}
});

document.getElementById("hard-button").addEventListener("click", function() {
	gameState.difficulty = "hard";
	document.getElementById("difficulty-menu").style.display = "none";
	document.getElementById("game-board").style.display = "block";
	gameState.initializeGameBoard();
	for (let i = 0; i < 16; i++) {
		document.getElementById(`${Math.floor(i / 4)},${i % 4}`).addEventListener('click', function() {
			player.makeMove(i);
		});
	}
});