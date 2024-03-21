import { observer } from "mobx-react";
import { gameStore } from "../Stores/GameStore";

type Props = {
    playerIndex: number;
    playerName: string;
};

const PlayerInfoBar = observer(({ playerName, playerIndex }: Props) => {
    return (
        <div className={playerIndex == 0 ? "player red" : "player blue"} >
            <p>{playerName}</p>
            <p>Count of wins: {gameStore.Players[playerIndex].WonGames}</p>
            <p>Total moves: {gameStore.Players[playerIndex].StepsTaken}</p>
        </div>
	);
})

export default PlayerInfoBar;