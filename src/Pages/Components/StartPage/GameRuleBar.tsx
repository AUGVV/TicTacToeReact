import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import { startPageStore } from "../../../Stores/StartPageStore";

import PlayButton from "../../../StyledComponents/PlayButton";
import RedText from "../../../StyledComponents/RedText";
import SizeInput from "../../../StyledComponents/SizeInput";
import StartContainer from "../../../StyledComponents/StartContainer";

type Props = {
    player1Ref: React.RefObject<HTMLInputElement>,
    player2Ref: React.RefObject<HTMLInputElement>,
    sizeRef: React.RefObject<HTMLInputElement>
};

const GameRuleBar = observer(({ player1Ref, player2Ref, sizeRef }: Props) => {
    const navigate = useNavigate();

    function saveStateAndStartGame() {
        startPageStore.SaveStartData(sizeRef, player1Ref, player2Ref);
        navigate('/game');
    }

    return (
        <StartContainer>
            <SizeInput
                ref={sizeRef}
                type="number"
                id="quantity"
                name="quantity"
                min="3"
                max="9"
                defaultValue="3"
                onChange={() => startPageStore.TurnNumberInValidState(sizeRef)} />
            {!startPageStore.allPlayersExist
                ? <RedText>Not all players join the Game</RedText>
                : <PlayButton onClick={saveStateAndStartGame}>Play</PlayButton>}
        </StartContainer>
    );
});

export default GameRuleBar;