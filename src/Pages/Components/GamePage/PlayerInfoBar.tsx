import { observer } from "mobx-react";
import { gameStore } from "../../../Stores/GameStore";

import PlayerContainer from "../../../StyledComponents/PlayerContainer";

type Props = {
    playerIndex: number;
    playerName: string;
};

const PlayerInfoBar = observer(({ playerName, playerIndex }: Props) => {

    const wonGames = gameStore.Players[playerIndex].WonGames;
    const stepsTaken = gameStore.Players[playerIndex].StepsTaken;

    return (
        <PlayerContainer ingame={true} player={playerIndex} >
            <p>{playerName}</p>
            <p>Count of wins: {wonGames}</p>
            <p>Total moves: {stepsTaken}</p>
        </PlayerContainer>
	);
})

export default PlayerInfoBar;