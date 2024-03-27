import styled from "styled-components";

const PlayerNameInput = styled.input
    `text-align: center;
    border-radius: 5px;
    border: 1px dashed;
    border-color: gray;
    &:focus {
        outline: 1px solid;
    }
    @media (max-width: 446px) {
        font-size: 20px;
    }`

export default PlayerNameInput;
