import styled from "styled-components";

interface Props {
    player: number;
    ingame: boolean;
}

const PlayerContainer = styled.div<Props>
    `background-color: transparent;
     border: 1px dashed;
     border-radius: 20px;
     padding: 4px;
     height: ${props => props.ingame ? "100%;" : "100px;"}
     display: flex;
     flex-direction: column;
     align-items: center;
     border-color: ${props => props.player == 0 ? "red;" : "blue;"}`

export default PlayerContainer;