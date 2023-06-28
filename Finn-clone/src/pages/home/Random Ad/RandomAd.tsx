import { StyledRandomAdWrapper, StyledDescription, StyledImgWrapper, StyledImg } from "./RandomAd.styles";

const RandomAd = () => {

    return(
        <StyledRandomAdWrapper>
            <StyledDescription/>
            <StyledImgWrapper>
                <StyledImg src="https://assets.finn.no/pkg/frontpage-podium/2.0.93/travel-feriehus-sorlandet.png"/>
            </StyledImgWrapper>
        </StyledRandomAdWrapper>
    )
}

export default RandomAd;