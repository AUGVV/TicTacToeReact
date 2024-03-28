import { observer } from 'mobx-react';
import { gameStore } from '../../../Stores/GameStore';

import Field from './Field';
import FieldsContainer from '../../../StyledComponents/FieldsContainer';
import PlayerInfoBar from './PlayerInfoBar';
import GameContainer from '../../../StyledComponents/GameContainer';

const GameField = observer(() => {
    let fields = new Array();
    for (let i = 0; i < gameStore.FieldsArray.length; i++) {
        fields.push(<Field key={i} index={i} />);
    }

    const player1 = `${gameStore.Players[0].PlayerName} (X)`;
    const player2 = `${gameStore.Players[1].PlayerName} (O)`;

    return (
        <GameContainer>
            <PlayerInfoBar playerName={player1} playerIndex={0} />
            <FieldsContainer gamesize={gameStore.GameSize} >
                {fields}
            </FieldsContainer>
            <PlayerInfoBar playerName={player2} playerIndex={1} />
        </GameContainer>
    );
})

export default GameField;