import { observer } from "mobx-react";
import { gamePrepareStore } from "../Stores/GamePrepareStore";
import { useEffect, useRef } from "react";
import AddPlayer from "../Component/AddPlayer";
import { useNavigate } from "react-router-dom";
import GamePreparePreviousState from "../Entity/GamePreparePreviousState";
import { PrepareGameStorage } from "../Constants/StorageConstants";

const PreparingGame = observer(() => {
    const inputRef = useRef<HTMLInputElement>(null);
    const player1Ref = useRef<HTMLInputElement>(null);
    const player2Ref = useRef<HTMLInputElement>(null);

    const navigate = useNavigate();

    useEffect(() => {
        let previousState = sessionStorage.getItem(PrepareGameStorage);
        if (previousState !== null) {
            let previousStateModel = JSON.parse(previousState);
            gamePrepareStore.SetPreviousState(previousStateModel, inputRef, player1Ref, player2Ref);
        }
    }, []);

    function saveStateAndStartGame() {
        if (player1Ref.current != null && player2Ref.current != null && inputRef.current != null) {
            let object = new GamePreparePreviousState(
                player1Ref.current.value,
                player2Ref.current.value,
                Number(inputRef.current.value));
            gamePrepareStore.SavePlayers(player1Ref, player2Ref);
            sessionStorage.setItem(PrepareGameStorage, JSON.stringify(object));
        }

        navigate('/game');
    }

    return (
        <div>
            <AddPlayer PlayerTitle="Player1" OnChange={() => gamePrepareStore.updateUserFields(player1Ref, player2Ref)} Ref={player1Ref} />
            <AddPlayer PlayerTitle="Player2" OnChange={() => gamePrepareStore.updateUserFields(player1Ref, player2Ref)} Ref={player2Ref} />
            <input ref={inputRef} type="number" id="quantity" name="quantity" min="3" max="9" defaultValue="3" onChange={() => gamePrepareStore.TurnNumberInValidState(inputRef)} />
            {!gamePrepareStore.allPlayersExist ? <p>Not all players join the Game</p> : <button onClick={saveStateAndStartGame}>Play</button>}
        </div>);
})

export default PreparingGame;