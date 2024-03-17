import { makeAutoObservable, observable } from "mobx";

class GameStateStore {
	constructor(winnerName: string | undefined, isGameEnded: boolean | undefined) {
		makeAutoObservable(this);
		this.IsGameEnded = isGameEnded;
		this.WinnerName = winnerName;
	}

	@observable IsGameEnded: boolean | undefined;
	@observable WinnerName: string | undefined;
}

export default GameStateStore;