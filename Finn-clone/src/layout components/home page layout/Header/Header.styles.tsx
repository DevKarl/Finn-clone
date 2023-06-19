
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    height: 49px;
    width: 100vw;
    z-index: 100;
`

export const StyledNavBar = styled.nav`
    max-width: 1010px;
    width: 100%;
    padding: 0px 16px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
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
        padding: 0;
    }

    &:hover {
        border-bottom: 2px solid #0063fb;
    }
`