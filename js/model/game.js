import { createBoard } from './board.js';

function createGame(player1, player2, activePlayer) {
	const _board = createBoard();
	const _player1 = player1;
	const _player2 = player2;
	let _activePlayer = activePlayer
		? activePlayer
		: Math.random() > 0.5
		? _player1
		: _player2;
	let _winner;

	const getActivePlayer = () => _activePlayer;

	const nextPlayer = () => (_activePlayer === _player1 ? _player2 : _player1);

	const isGameOver = () => _winner || !_board.hasEmptyCells();

	const doTurn = (index) => {
		if (isGameOver()) throw new Error('this game is over');
		_board.setCellMarker(index, _activePlayer.getMarker());
		const gotLine = _board.gotLine(_activePlayer.getMarker());
		if (gotLine.gotLine) {
			_winner = { winner: _activePlayer, line: gotLine.line };
		} else {
			_activePlayer = nextPlayer();
		}
		return _activePlayer;
	};

	const getWinner = () => _winner;

	return { getActivePlayer, doTurn, isGameOver, getWinner };
}

export { createGame };
