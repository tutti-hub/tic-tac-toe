import { createGame } from './game.js';
import { createPlayer } from './player.js';

let player1 = createPlayer('Player One', 'X');
let player2 = createPlayer('Player Two', 'O');

let game = createGame(player1, player2);
[0, 1, 2].forEach((e) => {
	console.log(game.getActivePlayer().getName(), player1.getName());
	game.doTurn(e);
	console.log(game.getActivePlayer().getName(), player2.getName());
	game.doTurn(e + 3);
});
