class FieldObject {
	value: string;
	player: string | null;
	index: number | null;
	colorClass?: string | null;

	constructor(value: string, player: string | null, index: number, colorClass: string | null = null) {
		this.value = value;
		this.player = player;
		this.index = index;
		this.colorClass = colorClass;
	}
}

export default FieldObject;