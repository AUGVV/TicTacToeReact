import { Routes, Route, useNavigate } from 'react-router-dom';
import StartPage from './Pages/StartPage';
import RecordsPage from './Pages/RecordsPage';
import { observer } from 'mobx-react';
import { globalStatesStore } from './Stores/GlobalStatesStore';
import { useEffect } from 'react';
import GamePage from './Pages/GamePage';
import NavBar from './NavBar';

const App = observer(() => {
    useEffect(() => {
        globalStatesStore.SetPreviousState();
    }, []);

    return (
        <>
            <header>
                <h1>Tic Tac Toe Game</h1>
                <NavBar />
            </header>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/Records" element={<RecordsPage />} />
                <Route path="/Game" element={<GamePage />} />
            </Routes>
        </>
  );
})

export default App;
