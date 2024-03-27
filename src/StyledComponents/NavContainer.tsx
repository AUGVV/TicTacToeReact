import styled from "styled-components";

const NavContainer = styled.nav
    `margin-bottom: 10px;
     @media (max-width: 268px) {
        display: flex;
        height: 20px;
        flex-direction: column;
        justify-content: flex-end;
        align-items: center;
     }`

export default NavContainer;