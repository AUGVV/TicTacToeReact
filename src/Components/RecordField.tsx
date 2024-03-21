import { observer } from "mobx-react";
import PlayerInfoStore from "../Stores/PlayerInfoStore";

type Props = {
    index: number;
    record: PlayerInfoStore;
};

const RecordField = ({ record, index }: Props) => {
    return (
        <li className={index === 1
            ? "gold"
            : index === 2
                ? "silver"
                : index === 3
                    ? "bronse"
                    : ""}>
            <p>{index}</p>
            <p className="record-player-name">{record.PlayerName}</p>
            <p className="record-wins">Wins: {record.WonGames}</p>
            <p className="record-moves">Moves: {record.StepsTaken}</p>
        </li>
    );
}

export default RecordField;