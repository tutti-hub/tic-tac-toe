import { createPlayer } from '../model/player.js';

test('create player with name and marker', () => {
	const expectedName = 'Steve';
	const expectedMarker = 'X';
	const player = createPlayer(expectedName, expectedMarker);
	expect(player.getName()).toEqual(expectedName);
	expect(player.getMarker()).toEqual(expectedMarker);
	expect(player.info()).toEqual(`${player.getName()}: ${player.getMarker()}`);
});
