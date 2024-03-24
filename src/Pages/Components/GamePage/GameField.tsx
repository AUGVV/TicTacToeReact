import Field from './Field';
import { observer } from 'mobx-react';
import FieldsContainer from '../../../StyledComponents/FieldsContainer';
import { gameStore } from '../../../Stores/GameStore';
import PlayerInfoBar from './PlayerInfoBar';

const GameField = observer(() => {
    let fields = new Array();
    for (let i = 0; i < gameStore.FieldsArray.length; i++) {
        fields.push(<Field key={i} index={i} />);
    }

    return (
        <div className="container">
            <PlayerInfoBar playerName={gameStore.Players[0].PlayerName + ' (X)'} playerIndex={0} />
            <FieldsContainer gamesize={gameStore.GameSize} >
                {fields}
            </FieldsContainer>
            <PlayerInfoBar playerName={gameStore.Players[1].PlayerName + ' (O)'} playerIndex={1} />
        </div>
    );
})

export default GameField;