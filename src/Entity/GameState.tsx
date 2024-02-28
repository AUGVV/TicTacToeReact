class GameState {
	IsGameEnded: boolean | undefined;
	WinnerName: string | undefined;

	constructor(winnerName: string | undefined, isGameEnded: boolean | undefined) {
		this.IsGameEnded = isGameEnded;
		this.WinnerName = winnerName;
	}
}

export default GameState;