import PlayerInfoStore from "../../../Stores/PlayerInfoStore";
import LiRecord from "../../../StyledComponents/LiRecord";

type Props = {
    index: number;
    record: PlayerInfoStore;
};

const RecordField = ({ record, index }: Props) => {
    return (
        <LiRecord position={index} >
            <p>{index}</p>
            <p>{record.PlayerName}</p>
            <p>Wins: {record.WonGames}</p>
            <p>Moves: {record.StepsTaken}</p>
        </LiRecord>
    );
}

export default RecordField;