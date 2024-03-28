import { observer } from 'mobx-react';
import { gameStore } from '../../../Stores/GameStore';

import RestartButton from '../../../StyledComponents/RestartButton';

const WinField = observer(() => {

	const isGameEnded = gameStore.GameState.IsGameEnded == undefined;

	if (gameStore.GameState.IsGameEnded) {
		return (
			<>
				<p>{gameStore.GameState.WinnerName} Win!</p>
				<RestartButton onClick={gameStore.Restart}>Restart</RestartButton>
			</>
		);
	}
	else if (isGameEnded) {
		return (
			<>
				<p>Draw!</p>
				<RestartButton onClick={gameStore.Restart}>Restart</RestartButton>
			</>
		);
	}
	return null;
})

export default WinField;