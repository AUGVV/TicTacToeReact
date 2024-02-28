type Props = {
	playerName: string;
    countOfWins: number;
    countOfSteps: number;
    className?: string | undefined;
};

function PlayerInfoBar({ playerName, countOfWins, countOfSteps, className }: Props) {
    return (
        <div className={className} >
            <p>{playerName}</p>
            <p>Count of wins: {countOfWins}</p>
            <p>Total moves: {countOfSteps}</p>
        </div>
	);
}

export default PlayerInfoBar;