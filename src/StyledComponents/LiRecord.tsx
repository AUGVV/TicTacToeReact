import styled from "styled-components";

interface Props {
    position: number;
}

const LiRecord = styled.li<Props>
    `height: 40px;
     background-color: lightgoldenrodyellow;
     margin-bottom: 20px;
     padding-left: 10px;
     border-radius: 10px;
     display: grid;
     grid-template-columns: repeat(4, minmax(0, 1fr));
     justify-items: start;
     justify-content: center;
     align-content: center;
     background-color: ${(props) => GetColor(props.position)};
     @media (max-width: 490px) {
        height: 92px;
        padding-left: 0px;
        flex-direction: column;
        align-items: center;
     }`

function GetColor(position: number) {
    switch (position) {
        case 1:
            return "gold;";
        case 2:
            return "silver;";
        case 3:
            return "sandybrown;";
        default:
            return "lightgoldenrodyellow;";
    }
}



export default LiRecord;