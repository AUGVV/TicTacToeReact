import '../Styles/StartPage.css';
import { observer } from "mobx-react";
import { startPageStore } from "../Stores/StartPageStore";
import { useEffect, useRef } from "react";
import AddPlayer from "../Component/AddPlayer";
import { useNavigate } from "react-router-dom";

const StartPage = observer(() => {
    const sizeRef = useRef<HTMLInputElement>(null);
    const player1Ref = useRef<HTMLInputElement>(null);
    const player2Ref = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
        startPageStore.SetPreviousState(sizeRef, player1Ref, player2Ref);
    }, []);

    function saveStateAndStartGame() {
        startPageStore.SaveStartData(sizeRef, player1Ref, player2Ref);
        navigate('/game');
    }

    return (
        <>
            <div className="players-container">
                <AddPlayer PlayerTitle="Player 1" OnChange={() => startPageStore.updateUserFields(player1Ref, player2Ref)} Ref={player1Ref} />
                <pre className="vs-title">  VS  </pre>
                <AddPlayer PlayerTitle="Player 2" OnChange={() => startPageStore.updateUserFields(player1Ref, player2Ref)} Ref={player2Ref} />
            </div>
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
            </>);
})

export default StartPage;