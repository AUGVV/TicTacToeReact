import { action, makeAutoObservable, observable } from "mobx";
import React from "react";

class AddPlayerStore {
    constructor() {
        makeAutoObservable(this);
    }

    @observable IsPlayerAlreadyExist = false;

    @action updateUserFields: any = (ref: React.RefObject<HTMLInputElement>) => {




    }

}

export const addPlayerStore = new AddPlayerStore();