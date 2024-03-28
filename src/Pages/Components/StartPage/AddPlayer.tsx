import { observer } from "mobx-react";
import { addPlayerStore } from "../../../Stores/AddPlayerStore";

import PlayerContainer from "../../../StyledComponents/PlayerContainer";
import PlayerNameInput from "../../../StyledComponents/PlayerNameInput";

type Props = {
    PlayerTitle: string;
    OnChange: React.ChangeEventHandler<HTMLInputElement>;
    Ref: React.LegacyRef<HTMLInputElement>;
};

const AddPlayer = observer(({ OnChange, PlayerTitle, Ref }: Props) => {
    const alreadyText = addPlayerStore.IsPlayerAlreadyExist ? (<p>Exist</p>) : null;
    const playerIndex = PlayerTitle == "Player 1" ? 0 : 1;

    return (
        <PlayerContainer ingame={false} player={playerIndex}>
            <p>{PlayerTitle}</p>
            {alreadyText}
            <PlayerNameInput maxLength={10} placeholder="Write your name here" ref={Ref} onChange={OnChange} />
        </ PlayerContainer>
    );
});

export default AddPlayer;