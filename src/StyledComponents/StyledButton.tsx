import styled from "styled-components";
import Color from "../Enum/Color";

interface Props {
    currentState: number;
    isLocked: boolean;
    fieldColor: Color;
}

const StyledButton = styled.button<Props>
        `width: 100%;
         height: 100%;
         background-color: transparent;
         color: ${props => props.fieldColor === Color.green ? `green;` : `black;`}
         border: 1px solid;
         font-size: calc(4em - 200%);
         text-align: center;
         ${props => !props.isLocked ? props.currentState == 0 ?
         `&:hover::after {
            content: "X";
            background-color: red;
            border: 1px solid;
            transition: 1s;
            animation: animX 1s linear infinite alternate;
            display: contents;
            font-size: calc(1em)}`
        : `&:hover::after {
            content: "O";
            background-color: blue;
            border: 1px solid;
            transition: 1s;
            animation: animY 1s linear infinite alternate;
            display: contents;
            font-size: calc(1em)}` : ``}
         ${props => props.currentState == 0
         ? `@keyframes animX {
              0% {
                  content: "X";
              }
              100% {
                  color: red
              }}`
         : `@keyframes animY {
         0% {
             content: "O";
         }
         100% {
             color: blue};
         }`
}`

export default StyledButton;