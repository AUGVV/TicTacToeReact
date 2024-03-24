import { startPageStore } from "../../../Stores/StartPageStore";
import AddPlayer from "./AddPlayer";

type Props = {
    player1Ref: React.RefObject<HTMLInputElement>;
    player2Ref: React.RefObject<HTMLInputElement>;
};

const PlayersBar = ({ player1Ref, player2Ref }: Props) => {
    return (
        <div className="players-container">
            <AddPlayer PlayerTitle="Player 1" OnChange={() => startPageStore.updateUserFields(player1Ref, player2Ref)} Ref={player1Ref} />
            <pre className="vs-title">  VS  </pre>
            <AddPlayer PlayerTitle="Player 2" OnChange={() => startPageStore.updateUserFields(player1Ref, player2Ref)} Ref={player2Ref} />
        </div>
    );
};

export default PlayersBar;

