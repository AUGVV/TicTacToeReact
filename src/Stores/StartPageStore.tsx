import { action, makeAutoObservable, observable } from "mobx";
import React from "react";
import { GlobalStateStorage, PlayerListStorage, PrepareGameStorage } from "../Constants/StorageConstants";
import GamePreparePreviousState from "../Entity/GamePreparePreviousState";
import GlobalStatesStoreEntity from "../Entity/GlobalStatesStoreEntity";
import PageEnum from "../Enum/PageEnum";
import { globalStatesStore } from "./GlobalStatesStore";
import PlayerInfoStore from "./PlayerInfoStore";

class StartPageStore {
    constructor() {
        makeAutoObservable(this);
        let gameState = sessionStorage.getItem(GlobalStateStorage);
        if (gameState === null) {
            sessionStorage.setItem(GlobalStateStorage, JSON.stringify(new GlobalStatesStoreEntity(false, PageEnum.StartPage)));
        }
    }

    @observable allPlayersExist = false;

    @action updateUserFields: any = (player1: React.RefObject<HTMLInputElement>, player2: React.RefObject<HTMLInputElement>) => {
        if (player1 != null && player2 != null && player1.current?.value != undefined && player2.current?.value != undefined) {
            if (player1.current?.value.length > 0 && player2.current?.value.length > 0) {
                this.allPlayersExist = true;
            }
            else {
                this.allPlayersExist = false;
            }
        }
    }

    @action TurnNumberInValidState: any = (sizeInput: React.RefObject<HTMLInputElement>) => {
        if (sizeInput.current != null) {
            if (Number(sizeInput.current.value) > 9) {
                sizeInput.current.value = '9';
            }
            if (Number(sizeInput.current.value) < 3) {
                sizeInput.current.value = '3';
            }
        }
    }

    @action SetPreviousState: any = (
        sizeInput: React.RefObject<HTMLInputElement>,
        player1: React.RefObject<HTMLInputElement>,
        player2: React.RefObject<HTMLInputElement>) => {

        let previousStateJson = sessionStorage.getItem(PrepareGameStorage);
        if (previousStateJson !== null) {
            let previousState = JSON.parse(previousStateJson) as GamePreparePreviousState;

            if (player1.current != undefined) {
                player1.current.value = previousState.player1Name;
            }
            if (player2.current != undefined) {
                player2.current.value = previousState.player2Name;
            }
            if (sizeInput.current != undefined) {
                sizeInput.current.value = previousState.fieldSize.toString();
            }

            this.allPlayersExist = true;
        }
    }

    @action SaveStartData: any = (
        sizeInput: React.RefObject<HTMLInputElement>,
        player1: React.RefObject<HTMLInputElement>,
        player2: React.RefObject<HTMLInputElement>) => {

        if (player1.current != undefined && player2.current != undefined && sizeInput.current != undefined) {
            let previousState = new GamePreparePreviousState(
                player1.current.value,
                player2.current.value,
                Number(sizeInput.current.value));

            sessionStorage.setItem(PrepareGameStorage, JSON.stringify(previousState));
        }

        let playerJson = sessionStorage.getItem(PlayerListStorage);
        if (playerJson !== null) {
            let playerList: PlayerInfoStore[] = JSON.parse(playerJson);
            var playerExist1 = playerList.find((elem) => elem.PlayerName === player1?.current?.value);
            if (playerExist1 === undefined) {
                playerList.push(new PlayerInfoStore(player1!.current!.value, 0, 0));
            }
            var playerExist2 = playerList.find((elem) => elem.PlayerName === player2?.current?.value);
            if (playerExist2 === undefined) {
                playerList.push(new PlayerInfoStore(player2!.current!.value, 0, 0));
            }
            if (playerExist2 === undefined || playerExist1 === undefined) {
                sessionStorage.setItem(PlayerListStorage, JSON.stringify(playerList));
            }
        }
        else {
            let playerList = new Array();
            playerList.push(new PlayerInfoStore(player1!.current!.value, 0, 0));
            playerList.push(new PlayerInfoStore(player2!.current!.value, 0, 0));
            sessionStorage.setItem(PlayerListStorage, JSON.stringify(playerList));
        }

        globalStatesStore.StartGameSession();
    }
}

export const startPageStore = new StartPageStore();