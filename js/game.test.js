import { createGame } from './game.js';
import { createPlayer } from './player.js';

const player1 = createPlayer('player1', 'X');
const player2 = createPlayer('player2', 'O');

test('after creating game with active player should equals', () => {
	const game = createGame(player1, player2, player1);
	expect(game.getActivePlayer()).toBe(player1);
});

test('after doTurn() activePlayer should be different', () => {
	const game = createGame(player1, player2, player1);
	expect(game.getActivePlayer()).toBe(player1);
	game.doTurn(0);
	expect(game.getActivePlayer()).toBe(player2);
});
