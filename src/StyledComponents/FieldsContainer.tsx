import styled from "styled-components";

interface Props {
    gamesize: number;
}

const FieldsContainer = styled.div<Props>
    `min-width: 300px;
     min-height: 300px;
     height: 300px;
     width: 300px;
     display: grid;
     grid-template-columns: repeat(${props => props.gamesize}, minmax(0, 1fr));
     grid-template-rows: repeat(${props => props.gamesize}, minmax(0, 1fr));`

export default FieldsContainer;