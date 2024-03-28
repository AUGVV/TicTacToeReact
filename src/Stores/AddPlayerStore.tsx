import { makeAutoObservable, observable } from "mobx";
import React from "react";

class AddPlayerStore {
    constructor() {
        makeAutoObservable(this);
    }

    @observable IsPlayerAlreadyExist = false;
}

export const addPlayerStore = new AddPlayerStore();