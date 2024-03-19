import { action, makeAutoObservable, observable } from "mobx";
import { PlayerListStorage } from "../Constants/StorageConstants";
import PlayerInfoStore from "./PlayerInfoStore";

class RecordsStore {
    @observable RecordList = new Array();

    constructor() {
        makeAutoObservable(this);
    }

    @action InitRecordList() {
        let playerJson = sessionStorage.getItem(PlayerListStorage);
        if (playerJson !== null) {
            let playerList = JSON.parse(playerJson) as PlayerInfoStore[];
            this.RecordList = playerList.sort((a, b) => a.WonGames - b.WonGames).reverse().slice(0, 10);
        }
    }
}

export const recordsStore = new RecordsStore();