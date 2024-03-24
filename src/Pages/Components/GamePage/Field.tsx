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

    return (
        <StyledButton
            fieldcolor={gameStore.FieldsArray[index].color}
            islocked={gameStore.FieldsArray[index].value.length > 0}
            currentState={gameStore.CurrentPlayer}
            onClick={() => ClickHandle()}>{gameStore.FieldsArray[index].value}</StyledButton>
    );
})

export default Field;