import { Routes, Route, useNavigate, NavigateOptions } from 'react-router-dom';
import PreparingGame from './Pages/PreparingGame';
import Game from './Pages/Game';
import Records from './Pages/Records';

function App() {
    const navigate = useNavigate();

    return (
        <>
            <header className="App-header">
                <h1>Tic Tac Toe Game</h1>
                <nav>
                    <button onClick={() => navigate('/')}>StartPage</button>
                    <button onClick={() => navigate('/game')}>Game</button>
                    <button onClick={() => navigate('/Records')}>Records</button>
                </nav>
            </header>
            <Routes>
                <Route path="/" element={<PreparingGame />} />
                <Route path="/Records" element={<Records />} />
                <Route path="/Game" element={<Game />} />
            </Routes>
        </>
  );
}

export default App;
