import Color from "../Enum/Color";

class FieldObject {
	value: string;
	player: string | null;
	index: number | null;
	colorClass: Color;

	constructor(value: string, player: string | null, index: number, colorClass: Color) {
		this.value = value;
		this.player = player;
		this.index = index;
		this.colorClass = colorClass;
	}
}

export default FieldObject;