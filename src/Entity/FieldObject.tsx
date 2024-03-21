import Color from "../Enum/Color";

class FieldObject {
	value: string;
	player: string | null;
	index: number | null;
	color: Color;

	constructor(value: string, player: string | null, index: number, color: Color) {
		this.value = value;
		this.player = player;
		this.index = index;
		this.color = color;
	}
}

export default FieldObject;