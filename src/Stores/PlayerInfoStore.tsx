import { makeAutoObservable, observable } from "mobx";

class PlayerInfoStore {
	constructor(playerName: string, wonGames: number, stepsTaken: number) {
		makeAutoObservable(this);

		this.PlayerName = playerName;
		this.WonGames = wonGames;
		this.StepsTaken = stepsTaken;
	}

	@observable PlayerName: string;
	@observable WonGames: number;
	@observable StepsTaken: number;
}

export default PlayerInfoStore;