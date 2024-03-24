import { action, makeAutoObservable, observable } from "mobx";
import { GameStateStorage, PlayerListStorage, PrepareGameStorage } from "../Constants/StorageConstants";
import FieldObject from "../Entity/FieldObject";
import GamePreparePreviousState from "../Entity/GamePreparePreviousState";
import GlobalStatesStoreEntity from "../Entity/GlobalStatesStoreEntity";
import Color from "../Enum/Color";
import GameStateStore from "./GameStateStore";
import PlayerInfoStore from "./PlayerInfoStore";

class GameStore {
    @observable Players =
        [
            new PlayerInfoStore('Player1', 0, 0),
            new PlayerInfoStore('Player2', 0, 0)
        ];
    @observable GameSize = 3;
    @observable FieldsArray = new Array();

    constructor() {
        makeAutoObservable(this);
    }

    @action InitPage: any = () => {
        let previousState = sessionStorage.getItem(PrepareGameStorage);
        let playerJson = sessionStorage.getItem(PlayerListStorage);
        if (previousState !== null && playerJson !== null) {
            let playerList: PlayerInfoStore[] = JSON.parse(playerJson);
            let previousStateModel: GamePreparePreviousState = JSON.parse(previousState);
            if (playerList !== null && previousStateModel !== null) {
                let playerExist1 = playerList.find((elem) => elem.PlayerName === previousStateModel.player1Name) as PlayerInfoStore;
                let playerExist2 = playerList.find((elem) => elem.PlayerName === previousStateModel.player2Name) as PlayerInfoStore;
                this.Players[0] = playerExist1;
                this.Players[1] = playerExist2;
                this.GameSize = previousStateModel.fieldSize;
            }
        }
        this.FieldsArray = this.CreateFieldsArray(this.GameSize * this.GameSize);
        this.WinMatrix = this.SetWinMatrix();
    }

    @observable GameState = new GameStateStore(undefined, false);

    @observable CurrentPlayer = 0;

    @action IsGameStarted: any = () => {
        let gameStateJson = sessionStorage.getItem(GameStateStorage);
        if (gameStateJson === null) {
            return false;
        }
        let gameState: GlobalStatesStoreEntity = JSON.parse(gameStateJson);

        return gameState.isGameRun;
    }

    @action CreateFieldsArray: any = (fieldsSize: number) => {
        const fieldCount = fieldsSize;

        let array = new Array();
        let index = 1;
        for (var i = 0; i < fieldCount; i++) {
            array[i] = new FieldObject('', null, index, Color.black);
            index++;
        }
        return array;
    }

    @action Restart: any = () => {
        this.GameState = new GameStateStore(undefined, false);
        this.FieldsArray = this.CreateFieldsArray(this.GameSize * this.GameSize);
        this.CurrentPlayer = 0;
    }

    @action click: any = (index: number) => {
        let field = this.FieldsArray.find((it: { index: number; }) => it.index == index);
        if (field != undefined && field.value.length == 0 && this.IsGameNotEnded()) {
            if (this.CurrentPlayer == 0) {
                field.player = this.Players[this.CurrentPlayer].PlayerName;
                field.value = 'x';

                this.Players[0].StepsTaken++;

                this.ChangeStatesIfWin();
                this.CurrentPlayer = 1;
            }
            else {
                field.player = this.Players[this.CurrentPlayer].PlayerName;
                field.value = 'o';

                this.Players[1].StepsTaken++;

                this.ChangeStatesIfWin();
                this.CurrentPlayer = 0;
            }
        }
    }

    SetWinMatrix: any = () => {
        let horizontalLines = new Array();
        let verticalLines = new Array();
        let otherLines1 = new Array();
        let otherLines2 = new Array();

        let horizontalIndex = 1;
        let verticalIndex = 1;
        let line1index = 1;
        let line2index = this.GameSize;

        for (let i = 0; i < this.GameSize; i++) {
            horizontalLines[i] = new Array();
            verticalLines[i] = new Array();

            otherLines1.push(line1index);
            otherLines2.push(line2index);

            for (let y = 0; y < this.GameSize; y++) {
                horizontalLines[i].push(horizontalIndex);
                verticalLines[i].push(verticalIndex);
                horizontalIndex++;
                verticalIndex += this.GameSize;
            }
            verticalIndex -= this.GameSize * this.GameSize - 1;
            line1index += this.GameSize + 1;
            line2index += this.GameSize - 1;
        }
        let matrix = [...horizontalLines, ...verticalLines, otherLines1, otherLines2];
        return matrix;
    }

    WinMatrix = this.SetWinMatrix();

    @action ChangeStatesIfWin: any = () => {
        let winner = this.CheckWinner();
        if (winner) {
            this.GameState.IsGameEnded = true;
            this.GameState.WinnerName = this.Players[this.CurrentPlayer].PlayerName;
            this.Players[this.CurrentPlayer].WonGames++;
        }
        else if (!winner && this.FieldsArray.every((elem: FieldObject) => elem.value == 'x' || elem.value == 'o')) {
            this.GameState.IsGameEnded = undefined;
            this.GameState.WinnerName = undefined;
        }
        this.SaveNewPlayerStatus();
    }

    @action SaveNewPlayerStatus: any = () => {
        let playerJson = sessionStorage.getItem(PlayerListStorage);
        if (playerJson !== null) {
            let playerList: PlayerInfoStore[] = JSON.parse(playerJson);
            let playerExist1 = playerList.find((elem) => elem.PlayerName === this.Players[0].PlayerName);
            playerExist1!.StepsTaken = this.Players[0].StepsTaken;
            playerExist1!.WonGames = this.Players[0].WonGames;

            let playerExist2 = playerList.find((elem) => elem.PlayerName === this.Players[1].PlayerName);
            playerExist2!.StepsTaken = this.Players[1].StepsTaken;
            playerExist2!.WonGames = this.Players[1].WonGames;

            sessionStorage.setItem(PlayerListStorage, JSON.stringify(playerList));
        }
    }

    @action IsGameNotEnded: any = () => {
        return this.GameState.IsGameEnded != undefined && !this.GameState.IsGameEnded
    }

    CheckWinner: any = () => {
        for (let i = 0; i < this.WinMatrix.length; i++) {
            if (this.IsOnlyOneTypeInLine(this.WinMatrix[i], 'o')) {
                this.AddColorToFields(this.WinMatrix[i])
                return true;
            }
            else if (this.IsOnlyOneTypeInLine(this.WinMatrix[i], 'x')) {
                this.AddColorToFields(this.WinMatrix[i])
                return true;
            }
        }

        return false;
    }

    AddColorToFields: any = (partOfMatrix: Array<number>) => {
        this.FieldsArray
            .filter((elem: FieldObject) => partOfMatrix.includes(elem.index ?? 0))
            .forEach((elem: FieldObject) => elem.color = Color.green);
    }

    IsOnlyOneTypeInLine: any = (partOfMatrix: Array<number>, type: string) => {
        return this.FieldsArray
            .filter((elem: FieldObject) => partOfMatrix.includes(elem.index ?? 0))
            .every((elem: FieldObject) => elem.value == type);
    }
}

export const gameStore = new GameStore();