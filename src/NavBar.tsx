import { useNavigate } from "react-router-dom";
import PageEnum from "./Enum/PageEnum";
import { gameStore } from "./Stores/GameStore";
import { globalStatesStore } from "./Stores/GlobalStatesStore";

type Props = {
    player1Ref: React.RefObject<HTMLInputElement>,
    player2Ref: React.RefObject<HTMLInputElement>,
    sizeRef: React.RefObject<HTMLInputElement>
};

const GameRuleBar = () => {
    const navigate = useNavigate();

    function EndGame() {
        globalStatesStore.EndGameSession();
        gameStore.IsGameStarted = false;
        gameStore.Restart();
        navigate('/')
    }

    function GoToStart() {
        globalStatesStore.GoToStartPage();
        navigate('/');
    }

    function GoToRecords() {
        globalStatesStore.GoToRecordsPage();
        navigate('/Records')
    }

    function GoToGame() {
        globalStatesStore.GoToGamePage();
        navigate('/game')
    }

    return (
        <nav>
            {!globalStatesStore.isGameRun
                ? (<button
                    className={"link-button" + (globalStatesStore.currentPage === PageEnum.StartPage ? " white" : "")}
                    onClick={() => GoToStart()}>Start Page</button>)
                : (<button className="link-button" onClick={() => EndGame()}>End game</button>)}
            {globalStatesStore.isGameRun
                ? (<button
                    className={"link-button" + (globalStatesStore.currentPage === PageEnum.GamePage ? " white" : "")}
                    onClick={() => GoToGame()}>Game</button>)
                : null}
            <button
                className={"link-button" + (globalStatesStore.currentPage === PageEnum.RecordPage ? " white" : "")}
                onClick={() => GoToRecords()}>Records</button>
        </nav>
    );
};

export default GameRuleBar;