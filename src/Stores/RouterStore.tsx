import { makeAutoObservable, observable } from "mobx";
import { PlayerListStorage } from "../Constants/StorageConstants";
import PlayerInfoStore from "./PlayerInfoStore";

class RouterStore {
    @observable RecordList = new Array();

    constructor() {
        makeAutoObservable(this);
    }
}

export const routerStore = new RouterStore();