import { createGame } from './model/game.js';
import { createPlayer } from './model/player.js';

let player1 = createPlayer('Player One', 'X');
let player2 = createPlayer('Player Two', 'O');

let game = createGame(player1, player2, player1);

const controlPanel = document.querySelector('.control-panel');
const board = document.querySelector('.board');
const info = document.querySelector('.info');

controlPanel.innerText = game.getActivePlayer().info();
board.addEventListener('click', (e) => {
	if (!game.isGameOver() && e.target.classList.contains('cell-empty')) {
		e.target.innerText = game.getActivePlayer().getMarker();
		game.doTurn(e.target.dataset.index);
		e.target.classList.remove('cell-empty');

		controlPanel.innerText = game.getActivePlayer().info();
		if (game.isGameOver()) {
			console.log('winner: ', game.getWinner());

			const result =
				game.getWinner() !== undefined
					? `Game Over. ${game.getWinner().info()} wins!`
					: `GameOver. It's draw!`;
			controlPanel.innerText = result;
		}
	}
});
