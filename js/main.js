import { createBoard } from './board.js';
import { createGame } from './game.js';
import { createPlayer } from './player.js';

let player1 = createPlayer('Player One', 'X');
let player2 = createPlayer('Player Two', 'O');
console.log(player1.getName());

let board = createBoard();
let game = createGame(player1, player2);
console.log(game.getActivePlayer().getName());
