import { observer } from "mobx-react";
import { addPlayerStore } from "../Stores/AddPlayerStore";

type Props = {
    PlayerTitle: string;
    OnChange: React.ChangeEventHandler<HTMLInputElement>;
    Ref: React.LegacyRef<HTMLInputElement>;
};

const AddPlayer = observer(({ OnChange, PlayerTitle, Ref }: Props) => {
    return (
        <div>
            <p>{PlayerTitle}</p>
            { addPlayerStore.IsPlayerAlreadyExist ? <p>already exist</p> : null }
            <input ref={Ref} onChange={OnChange} onBeforeInput={() => addPlayerStore.updateUserFields(Ref)} />
        </ div>
    );
});

export default AddPlayer;