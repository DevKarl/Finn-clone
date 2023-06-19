import { SearchIcon } from "../../../assets/home/find/SearchIcon";
import { FinnMapIcon } from "../../../assets/home/find/FinnMapIcon";
import { StyledFindWrapper, StyledSearchField, StyledFinnMapBtn, StyledInput, StyledInputBtn } from "./Find.styles";

const Find = () => {

    return(
        <StyledFindWrapper>
            <StyledSearchField>
                <StyledInput placeholder="Søk etter FINN-kode"></StyledInput>
                <StyledInputBtn>
                    <SearchIcon/>
                </StyledInputBtn>
            </StyledSearchField>
            <StyledFinnMapBtn>
                <FinnMapIcon/>
                <strong>Kart</strong>
            </StyledFinnMapBtn>
        </StyledFindWrapper>
    )
}

export default Find;