import { StyledRandomAdWrapper, StyledDescription, StyledImgWrapper } from "./RandomAd.styles";

const RandomAd = () => {

    return(
        <StyledRandomAdWrapper>
            <StyledDescription/>
            <StyledImgWrapper>
                <img src="https://assets.finn.no/pkg/frontpage-podium/2.0.93/travel-feriehus-sorlandet.png"></img>
            </StyledImgWrapper>
        </StyledRandomAdWrapper>
    )
}

export default RandomAd;