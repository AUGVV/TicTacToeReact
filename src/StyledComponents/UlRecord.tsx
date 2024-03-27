import styled from "styled-components";

const UlRecord = styled.ul
    `list-style-type: none;
     padding-inline-end: 40px;
     @media (max-width: 490px) { 
        list-style-type: none;
        padding-inline-end: 10px;
        padding-inline-start: 10px;
    }`

export default UlRecord;