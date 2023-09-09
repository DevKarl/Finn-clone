import { StyledNavGrid, StyledGridItemLink, StyledSectionWrapper } from "./Categories.styles";
import {
    TorgetIcon,
    EiendomIcon,
    BilOgNæringIcon,
    JobbIcon,
    ReiseIcon,
    BåtIcon,
    MCIcon,
    FeriehusOgHytterIcon,
    NybruktMobilIcon,
    BilabonnementIcon,
    NettbilIcon,
    MittAnbudIcon
} from '../../../assets/home/categories/CategoriesIcons'


const Categories = () => {

    return(
        <StyledSectionWrapper>
            <StyledNavGrid>
                <StyledGridItemLink to = '/'>
                    <TorgetIcon/>
                    <p>Torget</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <EiendomIcon/>
                    <p>Eiendom</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <BilOgNæringIcon/>
                    <p>Bil og næring</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <JobbIcon/>
                    <p>Jobb</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <ReiseIcon/>
                    <p>Reise</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <BåtIcon/>
                    <p>Båt</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <MCIcon/>
                    <p>MC</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <FeriehusOgHytterIcon/>
                    <p>Feriehus & hytter</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <NybruktMobilIcon/>
                    <p>Nybrukt mobil</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <BilabonnementIcon/>
                    <p>Bilabonnement</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <NettbilIcon/>
                    <p>Nettbil</p>
                </StyledGridItemLink>
                <StyledGridItemLink to = '/'>
                    <MittAnbudIcon/>
                    <p>Mittanbud</p>
                </StyledGridItemLink>
            </StyledNavGrid>
        </StyledSectionWrapper>
    )
}

export default Categories;