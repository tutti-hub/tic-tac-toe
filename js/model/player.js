export function createPlayer(name, marker) {
	let _name = name;
	let _marker = marker;

	const getMarker = () => _marker;
	const getName = () => _name;
	const toString = () => `Player: {name: ${_name}, marker: ${_marker}}`;
	return { getName, getMarker, toString };
}
