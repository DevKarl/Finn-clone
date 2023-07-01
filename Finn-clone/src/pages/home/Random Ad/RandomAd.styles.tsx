import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRandomAdWrapper = styled.section`

    display: flex;
    flex-direction: row;
    margin: 26px 16px;
    border-radius: 8px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;    
    max-height: 200px;


    /* @media (min-width: 600px) {
        min-height: 180px;
    } */


`

export const StyledDescription = styled.div`
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    padding: 10px;
    flex: 1.5;
    display: flex;
    flex-direction: column;
    gap: 10px;
    justify-content: center;

    > h2 {
        margin-bottom: 5px;
        font-size: large;
        font-weight: 500;
    }

    > p {
        margin-bottom: 5px;
        font-size: small;
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
`

export const StyledImg = styled.img`
    max-width: inherit;
    max-height: inherit;
    width: 100%;
    height: 100%;
    object-fit: cover;
`
