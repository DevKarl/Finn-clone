
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: sticky;
    top: 0;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    height: 49px;
    width: 100vw;
`

export const StyledNavBar = styled.nav`
    width: 1010px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 16px;
    padding-right: 16px;
    background-color: white;
`

export const StyledLink = styled(Link)`
    display:flex;
    width: 100%;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 10px;

    :nth-of-type(1) {
        margin-left: 0;
    }

    &:hover {
        border-bottom: 2px solid #0063fb;
    }
    &:hover svg {
        transform: translateY(1px);
    }
`