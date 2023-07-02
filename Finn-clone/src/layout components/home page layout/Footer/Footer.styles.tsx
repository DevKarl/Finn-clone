import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledFooter = styled.footer`
    margin-top: 30px; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1010px;
`

export const StyledMainWrapper = styled.div`
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    padding-bottom: 40px;
    gap: 50px;
    display: flex;
    flex-direction: column;

    @media (min-width: 786px) {
        flex-direction: row;
        margin-top: 100px; 
        padding: 30px;
    }
`

export const StyledSocialsAndLegalWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;

    @media (min-width: 786px) {
        flex-direction: row;
        padding: 0px 20px;
    }
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const StyledSection = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    margin-top: 20px;

    > h4, > h2 {
        opacity: 0.8;
    }

    & ${StyledLink} {
        opacity: 0.7;
        font-size: 14px;
        margin-top: 10px;
    }

    @media (min-width: 786px) {
        align-items: flex-start;

        > h2 {
            white-space: nowrap;
        }
        gap: 10px;

        & ${StyledLink} {
            margin-top: 2px;
        }
    }
`

export const StyledSocialSection = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 50px;
    align-items: center;
    margin: 30px 0;
`

export const StyledLegalSection = styled.section`
    text-align: center;
    font-size: 13px;
`

export const StyledLegalSectionParagraphWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 16px;
    margin-bottom: 15px;
    opacity: 0.7;

    @media (min-width: 786px) {
        text-align: start;
        margin-left: 30px;
    }
`

export const StyledSchibstedWrapper = styled.div`
    background-color: #e9e9e9;
    height: 60px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 2px;
    font-size: inherit;

    > p,
    & ${StyledLink} {
        opacity: 0.8;
        font-size: 14px;
    }

    @media (min-width: 786px) {
        width: 100%;
        width: 100vw;

        > img {
            margin: 0 20px;
        }

        > p {
            font-size: 14px;
        }
    }

`

export const StyledDesktopSchibstedLogo = styled.img`
    width: 100px;
`