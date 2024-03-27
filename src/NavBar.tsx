import { observer } from "mobx-react";
import { useNavigate } from "react-router-dom";
import PageEnum from "./Enum/PageEnum";
import { gameStore } from "./Stores/GameStore";
import { globalStatesStore } from "./Stores/GlobalStatesStore";
import NavButton from "./StyledComponents/NavButton";

const GameRuleBar = observer(() => {
    const navigate = useNavigate();

    function EndGame() {
        globalStatesStore.EndGameSession();
        gameStore.Restart();
        navigate('/')
    }

    function GoToStart() {
        globalStatesStore.InitStartPage();
        navigate('/');
    }

    function GoToRecords() {
        globalStatesStore.InitRecordsPage();
        navigate('/Records')
    }

    function GoToGame() {
        globalStatesStore.InitGamePage();
        navigate('/game')
    }

    return (
        <nav>
            {!globalStatesStore.isGameRun
                ? (<NavButton iswhite={String(globalStatesStore.currentPage === PageEnum.StartPage)} onClick={() => GoToStart()}>Start Page</NavButton>)
                : (<NavButton iswhite="false" onClick={() => EndGame()}>End game</NavButton>)}
            {globalStatesStore.isGameRun
                ? (<NavButton iswhite={String(globalStatesStore.currentPage === PageEnum.GamePage)} onClick={() => GoToGame()}>Game</NavButton>)
                : null}
            <NavButton iswhite={String(globalStatesStore.currentPage === PageEnum.RecordPage)} onClick={() => GoToRecords()}>Records</NavButton>
        </nav>
    );
});

export default GameRuleBar;