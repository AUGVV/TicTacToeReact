import { action, makeAutoObservable, observable } from "mobx";
import { GameStateStorage } from "../Constants/StorageConstants";
import GlobalStatesStoreEntity from "../Entity/GlobalStatesStoreEntity";
import PageEnum from "../Enum/PageEnum";

class GlobalStatesStore {

	@observable isGameRun: boolean;
	@observable currentPage: PageEnum = PageEnum.StartPage;

	constructor() {
		makeAutoObservable(this);
		this.isGameRun = false;
	}

    @action StartGameSession: any = () => {
		this.isGameRun = true;
		this.currentPage = PageEnum.GamePage;
		this.SetNewSessionStorageValue();
	}

	@action EndGameSession: any = () => {
		this.isGameRun = false;
		this.currentPage = PageEnum.StartPage;
		this.SetNewSessionStorageValue();
	}

	@action GoToGamePage: any = () => {
		this.currentPage = PageEnum.GamePage;
		this.SetNewSessionStorageValue();
	}

	@action GoToStartPage: any = () => {
		this.currentPage = PageEnum.StartPage;
		this.SetNewSessionStorageValue();
	}

	@action GoToRecordsPage: any = () => {
		this.currentPage = PageEnum.RecordPage;
		this.SetNewSessionStorageValue();
	}

	@action SetPreviousState: any = () => {
		let globalStateJson = sessionStorage.getItem(GameStateStorage);
		if (globalStateJson !== null) {
			let GlobalState: GlobalStatesStoreEntity = JSON.parse(globalStateJson)
			this.isGameRun = GlobalState.isGameRun;
			this.currentPage = GlobalState.currentPage;
		}
	}

	SetNewSessionStorageValue() {
		sessionStorage.setItem(GameStateStorage, JSON.stringify(new GlobalStatesStoreEntity(this.isGameRun, this.currentPage)));
    }
}

export const globalStatesStore = new GlobalStatesStore();