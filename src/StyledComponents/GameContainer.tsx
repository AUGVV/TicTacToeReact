import styled from "styled-components";

const GameContainer = styled.div
    `display: flex;
     justify-content: space-around;
     margin-top: 50px;
     @media (max-width: 560px) {
        display: flex;
        justify-content: space-around;
        margin-top: 20px;
        flex-direction: column;
        align-items: stretch;
     }`

export default GameContainer;