import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledRandomAdWrapper = styled.section`

    display: flex;
    flex-direction: row;
    margin: 16px;
    border-radius: 8px;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;


    @media (max-width: 480px) {




    }


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
        font-family: inherit;
        font-size: 1.5em;
        margin-bottom: 5px;
    }

    > p {
        margin-bottom: 5px;
    }
`

export const StyledLink = styled(Link)`
    margin-bottom: 5px;
    background-color: #0063fb;
    color: white;
    text-decoration: none;
    padding: 8px 16px;
    font-size: 12px;
    font-weight: 700;
    line-height: 16px;
    border-radius: 4px;
`

export const StyledImgWrapper = styled.div`
    flex: 1;
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
