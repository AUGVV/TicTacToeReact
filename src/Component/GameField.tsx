import Field from './Field';
import { gameStore } from "../Stores/GameStore";
import { observer } from 'mobx-react';

const GameField = observer(() => {

    let fields = new Array();
    for (let i = 0; i < gameStore.FieldsArray.length; i++) {
        fields.push(<Field value={gameStore.FieldsArray[i].value} onClick={() => gameStore.click(i+1)} className={gameStore.ColorControl(gameStore.FieldsArray[i], gameStore.GameState)} />);
    }

    return (
        <div className="game-container">
            {fields}
        </div>
    );
})

export default GameField;