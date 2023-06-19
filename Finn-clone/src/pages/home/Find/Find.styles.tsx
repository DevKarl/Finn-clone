
import styled from "styled-components";

// Find Parent Wrapper 

export const StyledFindWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

// Search Input Field ________________________________

export const StyledSearchField = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 48px;
    flex-grow: 1;
    margin: 16px;
`

export const StyledInput = styled.input`
    height: 30px;
    width: 100%;
    padding: 8px 36px 8px 8px;
    border-radius: 4px;
    border: 1px solid #c3ccd9;
`

export const StyledInputBtn = styled.button`
    position: absolute;
    top: 6px;
    right: 6px;
    background-color: transparent;
    border: none;
    appearance: none;
    padding: 5px;
`


// MAP 

export const StyledFinnMapBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-right: 20px;


    >svg {
        margin-right: 10px;
    }

    >strong {
        font-weight: 500;
    }
`