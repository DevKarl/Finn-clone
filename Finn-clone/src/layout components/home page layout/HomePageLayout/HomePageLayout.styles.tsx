import styled from "styled-components";

export const StyledSiteWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

`

export const StyledMainWrapper = styled.main`
    width: 100%;
    max-width: 1010px;
    margin-top: 50px;

    @media (min-width: 786px) {
        margin-top: 80px;
    }
`