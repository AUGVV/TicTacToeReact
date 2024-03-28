import { Routes, Route } from 'react-router-dom';

import StartPage from './Pages/StartPage';
import RecordsPage from './Pages/RecordsPage';
import GamePage from './Pages/GamePage';
import NavBar from './NavBar';
import CustomHeader from './StyledComponents/CustomHeader';

const App = () => {
    return (
        <>
            <CustomHeader>
                <h1>Tic Tac Toe Game</h1>
                <NavBar />
            </CustomHeader>
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="/Records" element={<RecordsPage />} />
                <Route path="/Game" element={<GamePage />} />
            </Routes>
        </>
  );
}

export default App;
