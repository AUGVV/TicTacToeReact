import { useNavigate } from "react-router-dom";
import { gameStore } from "../../../Stores/GameStore";
import { startPageStore } from "../../../Stores/StartPageStore";

type Props = {
    player1Ref: React.RefObject<HTMLInputElement>,
    player2Ref: React.RefObject<HTMLInputElement>,
    sizeRef: React.RefObject<HTMLInputElement>
};

const GameRuleBar = ({ player1Ref, player2Ref, sizeRef }: Props) => {
    const navigate = useNavigate();

    function saveStateAndStartGame() {
        startPageStore.SaveStartData(sizeRef, player1Ref, player2Ref);
        gameStore.IsGameStarted = true;
        navigate('/game');
    }

    return (
        <div className="start-container">
            <input
                className="size-input"
                ref={sizeRef}
                type="number"
                id="quantity"
                name="quantity"
                min="3"
                max="9"
                defaultValue="3"
                onChange={() => startPageStore.TurnNumberInValidState(sizeRef)} />
            {!startPageStore.allPlayersExist
                ? <p className="red">Not all players join the Game</p>
                : <button className="play-button" onClick={saveStateAndStartGame}>Play</button>}
        </div>
    );
};

export default GameRuleBar;