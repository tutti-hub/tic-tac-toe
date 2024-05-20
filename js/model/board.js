function createBoard(size = 9) {
	const _emptyCell = '';
	if (size % 3 !== 0)
		throw new Error('wrong board size: should be divisible by 3');
	if (((size / 3) * size) / 3 !== size)
		throw new Error('wrong board size: should be a square');

	const _cells = Array(size).fill(_emptyCell);

	const _lines = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	const getBoardSize = () => _cells.length;

	const getCells = () => [..._cells];

	const setCellMarker = (index, marker) => {
		if (index === undefined) throw new Error('index is undefined');
		if (index < 0 || index > getBoardSize() - 1)
			throw new Error('index out of range');
		if (marker === undefined) throw new Error('marker is undefined');
		if (_cells[index] !== _emptyCell) throw new Error('cell is not empty');

		_cells[index] = marker;
	};

	const gotLine = (marker) => {
		const equal = (e) => e === marker;
		for (let line of _lines) {
			const checkCells = _cells.filter((e, i) => line.includes(i));
			if (checkCells.length && checkCells.every(equal)) {
				return { gotLine: true, line: line };
			}
		}
		return false;
	};

	const hasEmptyCells = () => _cells.some((e) => e === _emptyCell);

	return {
		EMPTY_CELL: _emptyCell,
		getBoardSize,
		getCells,
		setCellMarker,
		gotLine,
		hasEmptyCells,
	};
}

export { createBoard };
