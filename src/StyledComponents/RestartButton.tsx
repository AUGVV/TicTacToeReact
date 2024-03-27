import styled from "styled-components";

const RestartButton = styled.button
    `background-color: white;
     height: 50px;
     width: 300px;
     font-size: 40px;
     &:hover 
     {
        background-color: greenyellow;
        transition-duration: 2s;
     }
     @media(max-width: 560px) {
        height: 50px;
        width: 130px;
        font-size: 30px;
     }`

export default RestartButton;