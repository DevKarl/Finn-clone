import { StyledRandomAdWrapper, StyledDescription, StyledImgWrapper, StyledImg, StyledLink } from "./RandomAd.styles";

const RandomAd = () => {

    return(
        <StyledRandomAdWrapper>
            <StyledDescription>
                <h2>Skjærgårdsidyll i sør</h2>
                <p>Krabbefiske, saltvannshår og bløde konsonanter – hva med Sørlandet i år?</p>
                <StyledLink to="/">
                Se feriehus på Sørlandet
                </StyledLink>
            </StyledDescription>
            <StyledImgWrapper>
                <StyledImg src="https://assets.finn.no/pkg/frontpage-podium/2.0.93/travel-feriehus-sorlandet.png"/>
            </StyledImgWrapper>
        </StyledRandomAdWrapper>
    )
}

export default RandomAd;