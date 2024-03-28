class GamePreparePreviousState {
	player1Name: string;
	player2Name: string;
	fieldSize: number;

	constructor(player1Name: string, player2Name: string, fieldSize: number) {
		this.player1Name = player1Name;
		this.player2Name = player2Name;
		this.fieldSize = fieldSize;
	}
}

export default GamePreparePreviousState;