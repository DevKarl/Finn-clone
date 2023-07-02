
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid #ccc;
    height: 50px;
    width: 100vw;
    z-index: 100;

    @media (min-width: 786px) {
        height: 60px;
    }
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
    flex: 1;
    height: 100%;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    padding-left: 10px;
    padding-right: 10px;
    text-decoration: none;

    :nth-of-type(1) {
        margin-left: 0;
        padding: 0;
    }

    &:hover {
        border-bottom: 2px solid #0063fb;
        transform: translateY(1px);
    }

    @media (min-width: 786px) {
        margin-left: 20px;
    }

`

/* ____________________________________ COMPONENTS FOR DESKTOP ____________________________________ */

export const StyledDesktopHeaderText = styled.p`
    text-align: center;
    margin-left: 10px;
    color: #474445;
    font-size: 13px;
    font-weight: 700;
    text-decoration: none;
    white-space: nowrap;
`

export const StyledDesktopLinkWrapper = styled.div`
    display: flex;
    flex-direction: row;
`