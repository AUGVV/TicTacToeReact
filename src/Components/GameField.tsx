import Field from './Field';
import { gameStore } from "../Stores/GameStore";
import { observer } from 'mobx-react';
import FieldsContainer from '../StyledComponents/FieldsContainer';

const GameField = observer(() => {
    let fields = new Array();
    for (let i = 0; i < gameStore.FieldsArray.length; i++) {
        fields.push(<Field key={i} index={i} />);
    }

    return (
        <FieldsContainer gamesize={gameStore.GameSize} >
            {fields}
        </FieldsContainer>
    );
})

export default GameField;