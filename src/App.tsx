import { useState } from 'react';
import './App.css';
import FieldObject from './Entity/FieldObject';
import GameState from './Entity/GameState';
import PlayerInfo from './Entity/PlayerInfo';
import WinField from './Component/WinField';
import GameField from './Component/GameField';
import PlayerInfoBar from './Component/PlayerInfoBar';

function App() {
    const [array, setArray] = useState<FieldObject[]>(CreateArray());
    const [gameState, setGameState] = useState<GameState>(new GameState(undefined, false));
    const [players, setPlayers] = useState<PlayerInfo[]>(CreateUsers());

    function CreateArray() {
        const fieldCount = 9;

        let array = new Array();
        let index = 1;
        for (var i = 0; i < fieldCount; i++) {
            array[i] = new FieldObject('', null, index);
            index++;
        }
        return array;
    }

    function CreateUsers() {
        let users = new Array();
        users.push(new PlayerInfo('player 1', 0, 0))
        users.push(new PlayerInfo('player 2', 0, 0))
        return users;
    }

    function SetChanges(newArray: FieldObject[], newGameState: GameState, newPlayersState: PlayerInfo[]) {
        setArray(newArray);
        setGameState(newGameState);
        setPlayers(newPlayersState);
    }

    function Restart() {
        setGameState(new GameState(undefined, false));
        setArray(CreateArray());
    }

  return (
    <div className="App">
          <header className="App-header">
              <h1>Tic Tac Toe Game</h1>
          </header>
          <main>
              <div className="container">
                  <PlayerInfoBar
                      playerName={players[0].PlayerName + ' (X)'}
                      countOfWins={players[0].WonGames}
                      countOfSteps={players[0].StepsTaken}
                      className={"player red"} />
                  <GameField array={array} setChanges={SetChanges} gameState={gameState} players={players} />
                  <PlayerInfoBar
                      playerName={players[1].PlayerName + ' (O)'}
                      countOfWins={players[1].WonGames}
                      countOfSteps={players[1].StepsTaken}
                      className={"player blue"} />
              </div>
              <WinField gameState={gameState} onClick={Restart} />
          </main>
    </div>
  );
}

export default App;
