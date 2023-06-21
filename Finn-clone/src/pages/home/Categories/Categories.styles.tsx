import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledSectionWrapper = styled.section`
    overflow: auto;
`

export const StyledNavGrid = styled.nav`
    display: grid;
    grid-template-columns: repeat(6, 1fr);
    min-width: 640px;

    justify-content: center;
    align-content: center;


    align-items: stretch;
    justify-items: stretch;

    margin: 20px 16px;

`

export const StyledGridItemLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: #636363;
    padding: 16px 0px;
    margin-bottom: 4px;

    :hover {
        svg {
            color: #7b7b7b;
        }
    }

    :focus {
        outline: none;
        border: 2px solid #06befb;
        margin-bottom: 0;
    }

    svg {
        color: #06befb;
        align-self: center;
    }

    p {
        font-size: 14px;
        line-height: 18px;
        text-align: center;
        margin-top: 6px;
    }
`