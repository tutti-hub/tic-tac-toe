import { createGame } from './model/game.js';
import { createPlayer } from './model/player.js';

let player1 = createPlayer('Player One', 'X');
let player2 = createPlayer('Player Two', 'O');

let currentGame;
const games = [];

const board = document.querySelector('.board');
const info = document.querySelector('.info');
const newGameBtn = document.querySelector('#new-game-btn');
const control = document.querySelector('.control');

const dialog = document.querySelector('dialog');
const gamesCountTitle = document.querySelector('#games-count-title');
const gamesCountValue = document.querySelector('#games-count-value');
const player1Title = document.querySelector('#player1-title');
const player1Value = document.querySelector('#player1-value');
const player2Title = document.querySelector('#player2-title');
const player2Value = document.querySelector('#player2-value');

newGameBtn.addEventListener('click', (e) => {
	currentGame = createGame(player1, player2, player1);
	info.innerText = currentGame.getActivePlayer().info();
	control.classList.add('hidden');
	board.classList.remove('hidden');
	document.querySelectorAll('.cell').forEach((cell) => {
		cell.innerText = '';
		cell.classList.add('cell-empty');
		cell.classList.remove('win');
	});
});

board.addEventListener('click', (e) => {
	if (
		!currentGame.isGameOver() &&
		e.target.classList.contains('cell-empty')
	) {
		e.target.innerText = currentGame.getActivePlayer().getMarker();
		currentGame.doTurn(e.target.dataset.index);
		e.target.classList.remove('cell-empty');

		info.innerText = currentGame.getActivePlayer().info();
		if (currentGame.isGameOver()) {
			const winner = currentGame.getWinner();
			const result =
				winner !== undefined
					? `Game Over. ${winner.winner.info()} wins!`
					: `GameOver. It's draw!`;
			info.innerText = result;
			games.push(currentGame);
			control.classList.remove('hidden');
			console.log(winner.line);
			winner.line.forEach((e) => {
				document
					.querySelector('.cell[data-index="' + e + '"]')
					.classList.add('win');
			});
			showStatistics();
		}
	}
});

function showStatistics() {
	const player1Wins = games.filter((g) => g.getWinner() == player1).length;
	const player2Wins = games.filter((g) => g.getWinner() == player2).length;
	const msg = `Games count: ${games.length}\n
	${player1.getName()} wins: ${player1Wins} times\n
	${player2.getName()} wins: ${player2Wins} times\n`;
	console.log(msg);
	gamesCountValue.innerText = games.length;
	player1Title.innerText = player1.getName() + ':';
	player1Value.innerText = player1Wins + ' wins';
	player2Title.innerText = player2.getName() + ':';
	player2Value.innerText = player2Wins + ' wins';
	dialog.showModal();
}
