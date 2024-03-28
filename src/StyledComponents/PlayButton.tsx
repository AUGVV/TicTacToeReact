import styled from "styled-components";

const PlayButton = styled.button
    `background-color: white;
     margin-top: 30px;
     width: 200px;
     height: 50px;
     font-size: 20px;
     transition-duration: 1s;
     border-radius: 15px;
     border: 1px double;
     &:hover {
         border-color: orange;
         transition-duration: 1s;
    }`

export default PlayButton;