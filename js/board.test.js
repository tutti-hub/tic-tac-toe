import { createBoard } from './board.js';

let board;

const lines = [
	[0, 1, 2],
	[3, 4, 5],
	[6, 7, 8],
	[0, 3, 6],
	[1, 4, 7],
	[2, 5, 8],
	[0, 4, 8],
	[2, 4, 6],
];

beforeEach(() => {
	board = createBoard();
});

test('throws on wrong board size', () => {
	const testSize10 = () => createBoard(10);
	expect(testSize10).toThrow(/should be divisible by 3/);
	const testSize27 = () => createBoard(27);
	expect(testSize27).toThrow('should be a square');
});

test('default board size should be 9', () => {
	expect(board.getBoardSize()).toEqual(9);
});

test('undefined index for setCellMarker() throws error', () => {
	const testIndex = () => board.setCellMarker(undefined);
	expect(testIndex).toThrow('index is undefined');
});

test('undefined marker for setCellMarker() throws error', () => {
	const testMarker = () => board.setCellMarker(1);
	expect(testMarker).toThrow('marker is undefined');
});

test('throws if cell is not empty', () => {
	board.setCellMarker(0, 'X');
	const testCell = () => board.setCellMarker(0, 'X');
	expect(testCell).toThrow('cell is not empty');
});

test('hasEmptyCells on new board should be true', () => {
	expect(board.hasEmptyCells()).toEqual(true);
});

test('hasEmptyCells should be false if all cells are not empty', () => {
	Array(9)
		.fill('X')
		.forEach((marker, i) => board.setCellMarker(i, marker));
	expect(board.hasEmptyCells()).toEqual(false);
});

test('gotLine = false', () => {
	expect(board.gotLine('X')).toEqual(false);
});

test('gotLine = true', () => {
	const marker = 'X';
	lines.forEach((line) => {
		board = createBoard();
		line.forEach((e) => board.setCellMarker(e, marker));
		expect(board.gotLine(marker)).toBeTruthy();
	});
});
