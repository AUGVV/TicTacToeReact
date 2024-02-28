class PlayerInfo {
	PlayerName: string;
	WonGames: number;
	StepsTaken: number;

	constructor(playerName: string, wonGames: number, stepsTaken: number) {
		this.PlayerName = playerName;
		this.WonGames = wonGames;
		this.StepsTaken = stepsTaken;
	}
}

export default PlayerInfo;