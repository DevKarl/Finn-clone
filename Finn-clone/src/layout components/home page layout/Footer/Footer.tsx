
import { BigFinnLogo } from "../../../assets/header/BigFinnLogo";

import { 
    StyledFooter, 
    StyledSection, 
    StyledMainWrapper, 
    StyledSocialsAndLegalWrapper, 
    StyledSocialSection, 
    StyledLink,
    StyledLegalSection, 
    StyledSchibstedWrapper,
    StyledLegalSectionParagraphWrapper
} 
from "./Footer.styles";

import { FbIcon, TwitterIcon, InstagramIcon, YtIcon } from "../../../assets/footer/FooterIcons";


const Footer = () => {

    return(
            <StyledFooter>
                <StyledMainWrapper>
                    <StyledSection>
                        <BigFinnLogo/>
                        <h2>Mulighetenes marked</h2>  
                    </StyledSection>
                    <StyledSection>
                        <h4>For bedrifter</h4>
                        <StyledLink to='/'>Bli bedriftskunde</StyledLink>
                        <StyledLink to='/'>Informasjon og inspirasjon</StyledLink>
                        <StyledLink to='/'>Admin for bedrifter</StyledLink>
                    </StyledSection>
                    <StyledSection>
                        <h4>Om finn</h4>
                        <StyledLink to='/'>Jobbe i FINN</StyledLink>
                        <StyledLink to='/'>FINNspirasjon</StyledLink>
                    </StyledSection>
                    <StyledSection>
                        <h4>Personvern</h4>
                        <StyledLink to='/'>Personvernærklering</StyledLink>
                        <StyledLink to='/'>Personvern i FINN</StyledLink>
                        <StyledLink to='/'>Instillinger for personvern</StyledLink>
                        <StyledLink to='/'>Cookies</StyledLink>
                    </StyledSection>
                    <StyledSection>
                        <h4>Få hjelp</h4>
                        <StyledLink to='/'>Kundeservice</StyledLink>
                        <StyledLink to='/'>Trygg handel på FINN</StyledLink>
                        <StyledLink to='/'>Fiks Ferdig</StyledLink>
                        <StyledLink to='/'>Brukervilkår</StyledLink>
                        <StyledLink to='/'>Annonseregler</StyledLink>
                    </StyledSection>
                </StyledMainWrapper>
                <StyledSocialsAndLegalWrapper>
                    <StyledSocialSection>
                        <StyledLink to='./'>
                            <FbIcon/>
                        </StyledLink>
                        <StyledLink to= './'>
                            <TwitterIcon/>
                        </StyledLink>
                        <StyledLink to= './'>
                            <InstagramIcon/>
                        </StyledLink>
                        <StyledLink to= './'>
                            <YtIcon/>
                        </StyledLink>
                    </StyledSocialSection>
                    <StyledLegalSection>
                        <StyledLegalSectionParagraphWrapper>
                            <p>
                                Innholdet er beskyttet etter åndsverkloven. Regelmessig, systematisk eller 
                                kontinuerlig innhenting, lagring, indeksering, distribusjon og all annen 
                                form for sammenstilling av data tillates ikke uten eksplisitt, skriftlig 
                                tillatelse fra FINN.no.
                            </p>
                            <p>
                            © 1996-2023 FINN.no AS
                            </p>
                        </StyledLegalSectionParagraphWrapper>
                        <StyledSchibstedWrapper>
                            <p>
                                Schibsted er ansvarlig for dine data på denne siden.
                            </p>
                            <StyledLink to = './'>Les mer</StyledLink>
                        </StyledSchibstedWrapper>
                    </StyledLegalSection>
                </StyledSocialsAndLegalWrapper>
            </StyledFooter>
    )
}

export default Footer;