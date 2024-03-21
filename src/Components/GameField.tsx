import Field from './Field';
import { gameStore } from "../Stores/GameStore";
import { observer } from 'mobx-react';
import styled from 'styled-components';

const GameField = observer(() => {

    const StyledDiv = styled.div
        `min-width: 300px;
         min-height: 300px;
         height: 300px;
         width: 300px;
         display: grid;
         grid-template-columns: repeat(${gameStore.GameSize}, minmax(0, 1fr));
         grid-template-rows: repeat(${gameStore.GameSize}, minmax(0, 1fr));`

    let fields = new Array();
    for (let i = 0; i < gameStore.FieldsArray.length; i++) {
        fields.push(<Field index={i} />);
    }

    return (
        <StyledDiv>
            {fields}
        </StyledDiv>
    );
})

export default GameField;