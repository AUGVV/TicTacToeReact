import PageEnum from "../Enum/PageEnum";

class GlobalStatesStore {

	isGameRun: boolean;
	currentPage: PageEnum;

	constructor(isGameRun: boolean, currentPage: PageEnum) {
		this.isGameRun = isGameRun;
		this.currentPage = currentPage;
	}
}

export default GlobalStatesStore;