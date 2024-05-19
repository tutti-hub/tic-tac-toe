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

	const doTurn = (index) => {
		_board.setCellMarker(index, _activePlayer.getMarker());
		const gotLine = _board.gotLine(_activePlayer.getMarker());
		if (gotLine) {
			_winner = _activePlayer;
		} else {
			_activePlayer = nextPlayer();
		}
	};

	const getWinner = () => _winner;

	return { getActivePlayer, doTurn, getWinner };
}

export { createGame };
