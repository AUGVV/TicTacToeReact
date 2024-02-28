import GameState from '../Entity/GameState';

type Props = {
	gameState: GameState;
	onClick: React.MouseEventHandler<HTMLButtonElement>;
};

function WinField({ gameState, onClick }: Props) {
	if (gameState.IsGameEnded) {
		return (
			<>
				<p>{gameState.WinnerName} Win!</p>
				<button className="restart-button" onClick={onClick}>Restart</button>
			</>
		);
	}
	else if (gameState.IsGameEnded == undefined) {
		return (
			<>
				<p>Draw!</p>
				<button className="restart-button" onClick={onClick}>Restart</button>
			</>
		);
	}
	return null;
}

export default WinField;