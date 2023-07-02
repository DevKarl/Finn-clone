import { Link } from "react-router-dom";
import styled from "styled-components";


export const StyledFooter = styled.footer`
    margin-top: 30px; 
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const StyledMainWrapper = styled.div`
    border-top: 1px solid #ccc;
    border-bottom: 1px solid #ccc;
    width: 100%;
    padding: 10px;
    gap: 50px;
`

export const StyledSocialsAndLegalWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
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
    text-align: center;
    align-items: center;
    gap: 10px;
    margin-top: 40px;

    > h4 {
        opacity: 0.8;
    }

    & ${StyledLink} {
        opacity: 0.7;
        font-size: 14px;
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
`

export const StyledSchibstedWrapper = styled.div`
    background-color: #e9e9e9;
    height: 50px;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: row;
    gap: 2px;
    opacity: 0.8;
`