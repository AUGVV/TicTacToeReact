import { observer } from 'mobx-react';
import { gameStore } from '../../../Stores/GameStore';
import StyledButton from '../../../StyledComponents/StyledButton';

type Props = {
    index: number;
};


const Field = observer(({ index }: Props) => {
    function ClickHandle() {
        gameStore.click(index + 1)
    }

    const value = gameStore.FieldsArray[index].value;
    const color = gameStore.FieldsArray[index].color;
    const isLocked = gameStore.FieldsArray[index].value.length > 0;

    return (
        <StyledButton
            fieldcolor={color}
            islocked={isLocked}
            currentState={gameStore.CurrentPlayer}
            onClick={() => ClickHandle()}>{value}</StyledButton>
    );
})

export default Field;