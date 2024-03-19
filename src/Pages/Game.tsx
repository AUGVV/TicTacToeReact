import '../Styles/App.css';
import WinField from '../Component/WinField';
import GameField from '../Component/GameField';
import PlayerInfoBar from '../Component/PlayerInfoBar';
import { observer } from 'mobx-react';
import { gameStore } from "../Stores/GameStore";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Game = observer(() => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!Boolean(gameStore.IsGameStarted)) {
            navigate('/');
        }

        gameStore.InitPage();
    }, []);


  return (
    <div className="App">
          <main>
              <div className="container">
                  <PlayerInfoBar playerName={gameStore.Players[0].PlayerName + ' (X)'} playerIndex={0} />
                  <GameField />
                  <PlayerInfoBar playerName={gameStore.Players[1].PlayerName + ' (O)'} playerIndex={1} />
              </div>
              <WinField />
          </main>
    </div>
  );
})

export default Game;
