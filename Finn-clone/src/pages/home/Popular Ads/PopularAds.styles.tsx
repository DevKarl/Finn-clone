import { Link } from "react-router-dom";
import styled from "styled-components";

export const StyledHeader = styled.h1`
    font-size: x-large;
    text-align: start;
    margin: 40px;
    opacity: 0.75;

    @media (min-width: 786px) {
        margin: 40px 30px;
    }
`

export const StyledContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2, minmax(50px, 1fr));
    grid-auto-rows: 0.8fr;
    gap: 5px;
    margin: 0 10px;

    @media (min-width: 786px) {
        grid-template-columns: repeat(3, 1fr);
        grid-column-gap: 20px;
        grid-row-gap: 30px;
        margin: 20px;
    }
`

export const StyledAdLink = styled(Link)`
    display: flex;
    flex-direction: column;
    text-decoration: none;
    color: inherit;
    border-radius: 12px;
    padding: 10px 10px 0 10px;

    :hover, :active {
        background-color: #e1f1fe;
    }
`

export const StyledAdImgWrapper = styled.div`

    overflow: hidden;
    aspect-ratio: 1/1;
    border-radius: 12px;
    position: relative;

    > p {
        position: absolute;
        width: 100%;
        left: 0;
        bottom: 0;
        color: #fff;
        font-weight: 700;
        padding: 38px 16px 8px;
        background: linear-gradient(transparent,rgba(0,0,0,.04935) 13.71%,
                    rgba(0,0,0,.11481) 25.12%,rgba(0,0,0,.1925) 34.61%,
                    rgba(0,0,0,.27852) 42.59%,rgba(0,0,0,.36898) 49.46%,
                    rgba(0,0,0,.46) 55.63%,rgba(0,0,0,.54769) 61.47%,
                    rgba(0,0,0,.62815) 67.41%,rgba(0,0,0,.6975) 73.83%,
                    rgba(0,0,0,.75185) 81.13%,rgba(0,0,0,.78731) 89.73%,rgba(0,0,0,.8));
    }

`


export const StyledAdImg = styled.img`
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 12px;
`

export const StyledTextWrapper = styled.div`
    opacity: 0.75;
    display: flex;
    flex-direction: column;
    padding: 10px;

    > p {
        font-size: small;
        margin-bottom: 5px;
    }

    > h3 {
        text-overflow: ellipsis;
        max-height: 50px;

        @media (min-width: 786px) {
            margin-bottom: 10px;
        }
    }
`