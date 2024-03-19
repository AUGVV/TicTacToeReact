import { Routes, Route, useNavigate } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import Game from './Pages/Game';
import RecordsPage from './Pages/RecordsPage';
import { observer } from 'mobx-react';
import { globalStatesStore } from './Stores/GlobalStatesStore';
import { gameStore } from './Stores/GameStore';
import { useEffect } from 'react';
import PageEnum from './Enum/PageEnum';

const App = observer(() => {
    const navigate = useNavigate();

    function EndGame() {
        navigate('/')
        globalStatesStore.EndGameSession();
        gameStore.Restart();
    }

    function GoToStart() {
        navigate('/');
        globalStatesStore.GoToStartPage();
    }

    function GoToRecords() {
        navigate('/Records')
        globalStatesStore.GoToRecordsPage();
    }

    function GoToGame() {
        navigate('/game')
        globalStatesStore.GoToGamePage();
    }

    useEffect(() => {
        globalStatesStore.SetPreviousState();
    }, []);

    return (
        <>
            <header>
                <h1>Tic Tac Toe Game</h1>
                <nav>
                    {!globalStatesStore.isGameRun
                        ? (<button
                            className={"link-button" + (globalStatesStore.currentPage === PageEnum.StartPage ? " white" : "")}
                            onClick={() => GoToStart()}>Start Page</button>)
                        : (<button className="link-button" onClick={EndGame}>End game</button>)}
                    {globalStatesStore.isGameRun
                        ? (<button
                            className={"link-button" + (globalStatesStore.currentPage === PageEnum.GamePage ? " white" : "")}
                            onClick={() => GoToGame()}>Game</button>)
                               : null}
                    <button
                        className={"link-button" + (globalStatesStore.currentPage === PageEnum.RecordPage ? " white" : "")}
                        onClick={() => GoToRecords()}>Records</button>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/Records" element={<RecordsPage />} />
                <Route path="/Game" element={<Game />} />
            </Routes>
        </>
  );
})

export default App;
