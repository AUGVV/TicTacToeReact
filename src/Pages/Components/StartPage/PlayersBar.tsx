import { observer } from "mobx-react";
import { startPageStore } from "../../../Stores/StartPageStore";

import PlayersContainer from "../../../StyledComponents/PlayersContainer";
import VsTitle from "../../../StyledComponents/VsTitle";
import AddPlayer from "./AddPlayer";

type Props = {
    player1Ref: React.RefObject<HTMLInputElement>;
    player2Ref: React.RefObject<HTMLInputElement>;
};

const PlayersBar = observer(({ player1Ref, player2Ref }: Props) => {
    return (
        <PlayersContainer>
            <AddPlayer PlayerTitle="Player 1" OnChange={() => startPageStore.updateUserFields(player1Ref, player2Ref)} Ref={player1Ref} />
            <VsTitle>  VS  </VsTitle>
            <AddPlayer PlayerTitle="Player 2" OnChange={() => startPageStore.updateUserFields(player1Ref, player2Ref)} Ref={player2Ref} />
        </PlayersContainer>
    );
});

export default PlayersBar;

