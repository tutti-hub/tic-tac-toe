export function createPlayer(name, marker) {
	let _name = name;
	let _marker = marker;

	const getMarker = () => _marker;
	const getName = () => _name;
	const info = () => `${_name}: ${_marker}`;
	return { getName, getMarker, info };
}
