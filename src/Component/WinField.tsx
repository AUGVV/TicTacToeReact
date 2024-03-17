import { observer } from 'mobx-react';
import { gameStore } from "../Stores/GameStore";

const WinField = observer(() => {
	if (gameStore.GameState.IsGameEnded) {
		return (
			<>
				<p>{gameStore.GameState.WinnerName} Win!</p>
				<button className="restart-button" onClick={gameStore.Restart}>Restart</button>
			</>
		);
	}
	else if (gameStore.GameState.IsGameEnded == undefined) {
		return (
			<>
				<p>Draw!</p>
				<button className="restart-button" onClick={gameStore.Restart}>Restart</button>
			</>
		);
	}
	return null;
})

export default WinField;