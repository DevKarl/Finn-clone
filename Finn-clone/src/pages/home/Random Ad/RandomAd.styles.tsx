import styled from "styled-components";

export const StyledRandomAdWrapper = styled.section`

    height: 192px;
    background-color: skyblue;
    display: flex;
    flex-direction: row;
    margin: 16px;
    border-radius: 8px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`

export const StyledDescription = styled.div`
    background-color: antiquewhite;
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
    flex: 1.5;
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
