import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.h1`
    font-size: x-large;
    text-align: center;
    margin-top: 40px;
    margin-bottom: 40px;
    opacity: 0.75;
`

export const StyledContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-auto-rows: 1fr;
`

export const StyledAdLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    padding: 8px;
`

export const StyledAdImgWrapper = styled.div`

    border-radius: 12px;
    overflow: hidden;
    margin-bottom: 10px;
    flex: 2;

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
    aspect-ratio: 1/1;
`

export const StyledTextWrapper = styled.div`
    opacity: 0.75;
    display: flex;
    flex-direction: column;
    flex: 1;

    > p {
        font-size: small;
        margin-bottom: 5px;
    }
`