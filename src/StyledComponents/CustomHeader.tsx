import styled from "styled-components";

const CustomHeader = styled.header
    `background-color: #282c34;
     min-height: 50px;
     display: flex;
     flex-direction: column;
     align-items: center;
     justify-content: center;
     color: white;
     @media (max-width: 259px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        color: white;
        height: 170px;
        min-height: 70px;
     }`

export default CustomHeader;