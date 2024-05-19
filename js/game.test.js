import { createGame } from './game.js';
import { createPlayer } from './player.js';

const player1 = createPlayer('player1', 'X');
const player2 = createPlayer('player2', 'O');
let game;

beforeEach(() => {
	game = createGame(player1, player2, player1);
});

test('after creating game with active player should equals', () => {
	expect(game.getActivePlayer()).toBe(player1);
});

test('after doTurn() activePlayer should be different', () => {
	expect(game.getActivePlayer()).toBe(player1);
	game.doTurn(0);
	expect(game.getActivePlayer()).toBe(player2);
});

function emulateGamePlayer1Win() {
	game.doTurn(0);
}

test('player1 should win', () => {
	expect(game.getActivePlayer().getName()).toEqual(player1.getName());
	expect(game.doTurn(0).getName()).toEqual(player2.getName());
	expect(game.doTurn(3).getName()).toEqual(player1.getName());
	expect(game.doTurn(1).getName()).toEqual(player2.getName());
	expect(game.doTurn(4).getName()).toEqual(player1.getName());
	expect(game.doTurn(2).getName()).toEqual(player1.getName());
	expect(game.isGameOver()).toBeTruthy();
	expect(game.getWinner().getName()).toEqual(player1.getName());
});

test('throws game over', () => {
	const emulateGame = () =>
		[0, 1, 2].forEach((e) => {
			game.doTurn(e);
			game.doTurn(e + 3);
		});

	expect(emulateGame).toThrow('this game is over');
});
