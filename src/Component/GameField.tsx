import GameState from '../Entity/GameState';
import FieldObject from '../Entity/FieldObject';
import Field from './Field';
import PlayerInfo from '../Entity/PlayerInfo';

let currentPlayer = 0;

type Props = {
    array: FieldObject[];
    players: PlayerInfo[];
    gameState: GameState;
    setChanges: any;
};

function GameField(props: Props) {
    let array = props.array.slice();

    function click(index: number) {
        let field = props.array.find(it => it.index == index);
        if (field != undefined && field.value.length == 0 && IsGameNotEnded()) {
            if (currentPlayer == 0) {
                field.player = props.players[currentPlayer].PlayerName;
                field.value = 'x';

                props.players[0].StepsTaken++;

                ChangeStatesIfWin();
                currentPlayer = 1;
            }
            else {
                field.player = props.players[currentPlayer].PlayerName;
                field.value = 'o';

                props.players[1].StepsTaken++;

                ChangeStatesIfWin();
                currentPlayer = 0;
            }
            props.setChanges(array, props.gameState, props.players);
        }
    }

    function ColorControl(field: FieldObject, gameState: GameState) {
        let result = field.value.length == 0 ?
            !gameState.IsGameEnded ? ' clickable' : ''
              : '';
        result += field.colorClass != null ? field.colorClass : '';

        if (currentPlayer == 1) {
            result += " blue";
        }
        else {
            result += " red";
        }

        return result; 
    }

    function ChangeStatesIfWin() {
        let winner = CheckWinner(array);
        if (winner) {
            props.gameState.IsGameEnded = true;
            props.gameState.WinnerName = props.players[currentPlayer].PlayerName;
            props.players[currentPlayer].WonGames++;
        }
        else if (!winner && array.every((elem: FieldObject) => elem.value == 'x' || elem.value == 'o')) {
            props.gameState.IsGameEnded = undefined;
            props.gameState.WinnerName = undefined;
        }
    }

    function IsGameNotEnded() {
        return props.gameState.IsGameEnded != undefined && !props.gameState.IsGameEnded
    }

    const GameSize = 3;

    function CheckWinner(array: FieldObject[]) {
        let horizontalLines = new Array();
        let verticalLines = new Array();
        let otherLines = new Array();
        otherLines[0] = new Array();
        otherLines[1] = new Array();

        let horizontalIndex = 0;
        let verticalIndex = 0;
        let line1index = 0;
        let line2index = GameSize - 1;

        for (let i = 0; i < GameSize; i++) {
            horizontalLines[i] = new Array();
            verticalLines[i] = new Array();

            otherLines[0].push(array[line1index]);
            otherLines[1].push(array[line2index]);

            for (let y = 0; y < GameSize; y++) {
                horizontalLines[i].push(array[horizontalIndex]);
                verticalLines[i].push(array[verticalIndex]);
                horizontalIndex++;
                verticalIndex += GameSize;
            }
            verticalIndex -= GameSize * GameSize - 1;
            line1index += GameSize + 1;
            line2index += GameSize - 1;

            if (IsOnlyOneTypeInLine(horizontalLines[i], 'o') || IsOnlyOneTypeInLine(horizontalLines[i], 'x'))
            {
                AddColorToFields(horizontalLines[i])
                return true;
            }
            else if (IsOnlyOneTypeInLine(verticalLines[i], 'o') || IsOnlyOneTypeInLine(verticalLines[i], 'x')) {
                AddColorToFields(verticalLines[i])
                return true;
            }
        }
        if (IsOnlyOneTypeInLine(otherLines[0], 'o') || IsOnlyOneTypeInLine(otherLines[0], 'x')) {
            AddColorToFields(otherLines[0]);
            return true;
        }
        else if (IsOnlyOneTypeInLine(otherLines[1], 'o') || IsOnlyOneTypeInLine(otherLines[1], 'x')) {
            AddColorToFields(otherLines[1]);
            return true;
        }

        return false;
    }

    function AddColorToFields(fields: FieldObject[]) {
        fields.forEach((field) => field.colorClass = ' green');
    }

    function IsOnlyOneTypeInLine(massive: FieldObject[], type: string) {
        return massive.every((elem: FieldObject) => elem.value == type);
    }

    return (
        <div className="game-container">
            <Field value={array[0].value} onClick={() => click(1)} className={ColorControl(array[0], props.gameState)} />
            <Field value={array[1].value} onClick={() => click(2)} className={ColorControl(array[1], props.gameState)} />
            <Field value={array[2].value} onClick={() => click(3)} className={ColorControl(array[2], props.gameState)} />
            <Field value={array[3].value} onClick={() => click(4)} className={ColorControl(array[3], props.gameState)} />
            <Field value={array[4].value} onClick={() => click(5)} className={ColorControl(array[4], props.gameState)} />
            <Field value={array[5].value} onClick={() => click(6)} className={ColorControl(array[5], props.gameState)} />
            <Field value={array[6].value} onClick={() => click(7)} className={ColorControl(array[6], props.gameState)} />
            <Field value={array[7].value} onClick={() => click(8)} className={ColorControl(array[7], props.gameState)} />
            <Field value={array[8].value} onClick={() => click(9)} className={ColorControl(array[8], props.gameState)} />
        </div>
    );
}

export default GameField;