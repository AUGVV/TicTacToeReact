import { action, makeObservable, observable } from "mobx";
import { GlobalStateStorage } from "../Constants/StorageConstants";
import GlobalStatesStoreEntity from "../Entity/GlobalStatesStoreEntity";
import PageEnum from "../Enum/PageEnum";

class GlobalStatesStore {

	@observable isGameRun: boolean;
	@observable currentPage: PageEnum = PageEnum.StartPage;

	constructor() {
		makeObservable(this);
		this.isGameRun = false;
	}

	@action StartGameSession: any = () => {
		this.InitGlobalState();
		this.isGameRun = true;
		this.currentPage = PageEnum.GamePage;
		this.SetNewSessionStorageValue();
	}

	@action EndGameSession: any = () => {
		this.InitGlobalState();
		this.isGameRun = false;
		this.currentPage = PageEnum.StartPage;
		this.SetNewSessionStorageValue();
	}

	@action InitGamePage: any = () => {
		this.InitGlobalState();
		this.currentPage = PageEnum.GamePage;
		this.SetNewSessionStorageValue();
	}

	@action InitStartPage: any = () => {
		this.InitGlobalState();
		this.currentPage = PageEnum.StartPage;
		this.SetNewSessionStorageValue();
	}

	@action InitRecordsPage: any = () => {
		this.InitGlobalState();
		this.currentPage = PageEnum.RecordPage;
		this.SetNewSessionStorageValue();
	}

	@action InitGlobalState: any = () => {
		let globalStateJson = sessionStorage.getItem(GlobalStateStorage);
		if (globalStateJson !== null) {
			let GlobalState: GlobalStatesStoreEntity = JSON.parse(globalStateJson)
			this.isGameRun = GlobalState.isGameRun;
			this.currentPage = GlobalState.currentPage;
		}
	}

	SetNewSessionStorageValue() {
		sessionStorage.setItem(GlobalStateStorage, JSON.stringify(new GlobalStatesStoreEntity(this.isGameRun, this.currentPage)));
    }
}

export const globalStatesStore = new GlobalStatesStore();