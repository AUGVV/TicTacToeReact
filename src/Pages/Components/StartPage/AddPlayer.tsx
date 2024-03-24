import { observer } from "mobx-react";
import { addPlayerStore } from "../../../Stores/AddPlayerStore";

type Props = {
    PlayerTitle: string;
    OnChange: React.ChangeEventHandler<HTMLInputElement>;
    Ref: React.LegacyRef<HTMLInputElement>;
};

const AddPlayer = observer(({ OnChange, PlayerTitle, Ref }: Props) => {
    return (
        <div className={"player-container" + (PlayerTitle == "Player 1" ? " red" : " blue") }>
            <p>{PlayerTitle}</p>
            {addPlayerStore.IsPlayerAlreadyExist ? <p>already exist</p> : null}
            <input className="player-name-input" maxLength={10} placeholder="Write your name here" ref={Ref} onChange={OnChange} onBeforeInput={() => addPlayerStore.updateUserFields(Ref)} />
        </ div>
    );
});

export default AddPlayer;