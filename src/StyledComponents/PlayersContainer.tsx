import styled from "styled-components";

const PlayersContainer = styled.div
    `margin-top: 30px;
     display: flex;
     flex-direction: row;
     align-items: center;
     justify-content: center;
     @media(max-width: 560px) {
         flex-direction: column;
     }`

export default PlayersContainer;