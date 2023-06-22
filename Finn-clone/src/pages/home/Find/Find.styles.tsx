
import styled from "styled-components";

// Find Parent Wrapper 

export const StyledFindWrapper = styled.section`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin:14px 16px 16px 16px;
    gap: 20px;
`

// Search Input Field ________________________________

export const StyledSearchField = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-grow: 1;
    height: 50px;
    min-width: 200px;
`

export const StyledInput = styled.input`
    height: 45px;
    width: 100%;
    padding: 8px;
    border-radius: 4px;
    border: 1px solid #c3ccd9;
    font-size: medium;
    overflow: hidden;
    font-weight: 100;
    opacity: 0.7;
    text-overflow: ellipsis;

    :hover {
        border: 1px solid #393939;
    }

    :focus {
        outline: none;
    }
`

export const StyledInputBtn = styled.button`
    position: absolute;
    top: 8px;
    right: 8px;
    padding: 5px 5px 8px 8px;
    height: 35px;
    background-color: white;
    border: none;
    appearance: none;

    >svg {
        opacity: 0.6;
    }

    :hover {
        color: #008cbb;
        cursor: pointer;
    }
`


// MAP 

export const StyledFinnMapBtn = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    :hover {
        cursor: pointer;
        p {
            text-decoration: underline;
        }
    }

    >svg {
        margin-right: 10px;
        flex-shrink: 0;
    }

    >p {
        font-weight: 600;
        opacity: 0.7;
    }
`