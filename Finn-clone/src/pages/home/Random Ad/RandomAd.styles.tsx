import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRandomAdWrapper = styled.section`
    display: flex;
    flex-direction: row;
    margin: 16px;
    border-radius: 8px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px; 
    max-height: 240px;
    height: 220px;

    @media (min-width: 364px) {
        height: 200px;
    }

    @media (min-width: 600px) {
        height: 150px;
        margin: 10px 30px;
    }
    
`

export const StyledDescription = styled.div`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 12px 8px;
    flex: 1.5;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;
    margin: 0 10px;

    > h2 {
        margin-bottom: 5px;
        margin-top: 2px;
        font-size: larger;
        font-weight: 550;
        opacity: 0.8;
    }

    > p {
        margin-bottom: 5px;
        font-size: small;
        opacity: 0.75;
        font-weight: 500;
        line-height: 1.2rem;
    }

    @media (max-width: 364px) {
        gap: 2px;
        margin: 0 5px;
    }
`

export const StyledLink = styled(Link)`
    max-width: 165px;
    margin-bottom: 5px;
    background-color: #0063fb;
    color: white;
    text-decoration: none;
    padding: 12px 12px;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    border-radius: 4px;

    :hover {
        background-color: #004abc;
    }
`

export const StyledImgWrapper = styled.div`
    flex: 1.5;
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

    @media (min-width: 600px) {
        flex: 1;
    }
`

export const StyledImg = styled.img`
    max-width: inherit;
    max-height: inherit;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
