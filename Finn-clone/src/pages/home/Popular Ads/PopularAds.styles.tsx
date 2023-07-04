import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.h1`
    font-size: x-large;
    text-align: center;
    margin-top: 40px;
    opacity: 0.75;
`

export const StyledContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
    column-gap: 20px;
    row-gap: 30px;
    margin: 30px;
`

export const StyledAdLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
`

export const StyledAdImgWrapper = styled.div`
    border-radius: 12px;
    overflow: hidden;

    margin-bottom: 10px;
    height: 60%;
    width: 100%;

    > p {
        position: relative;
        bottom: 30px;
        left: 10px;
        color: whitesmoke;
        font-weight: 600;
    }
`


export const StyledAdImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
`

export const StyledTextWrapper = styled.div`
    opacity: 0.75;
    display: flex;
    flex-direction: column;
    gap: 5px;
    height: 40%;

    > p {
        font-size: small;
    }
`