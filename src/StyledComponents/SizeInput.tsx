import styled from "styled-components";

const SizeInput = styled.input
    `text-align: center;
     border-radius: 5px;
     border: 1px dashed;
     border-color: gray;
     font-size: 20px;
     &:focus {
         outline: 1px solid;
     }
     &::-webkit-inner-spin-button 
     {
         opacity: 1;
     }
     @media (max-width: 446px) {
         font-size: 30px;
     }`

export default SizeInput;