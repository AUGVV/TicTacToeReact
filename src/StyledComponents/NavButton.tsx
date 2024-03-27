import styled from "styled-components";

interface Props {
    iswhite: string;
}

const NavButton = styled.button<Props>
    `background-color: transparent;
     color: ${props => props.iswhite == "true" ? "white;" : "grey;" }
     border: unset;
     font-size: 17px;
     &:hover {
        color: white;
     }
     &.white {
        color: white;
     }`

export default NavButton;