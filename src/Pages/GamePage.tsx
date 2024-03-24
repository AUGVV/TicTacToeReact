import '../Styles/App.css';

import { observer } from 'mobx-react';
import { gameStore } from "../Stores/GameStore";
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import WinField from './Components/GamePage/WinField';
import GameField from './Components/GamePage/GameField';
import { globalStatesStore } from '../Stores/GlobalStatesStore';

const Game = observer(() => {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(Boolean(gameStore.IsGameStarted));

        if (!Boolean(gameStore.IsGameStarted)) {
            navigate('/');
        }

        gameStore.InitPage();

        // Required to change nav menu when changing the route in the browser.
        globalStatesStore.SetPreviousState();
        globalStatesStore.GoToGamePage();
    }, []);

  return (
    <div className="App">
          <main>
              <GameField />
              <WinField />
          </main>
    </div>
  );
})

export default Game;
