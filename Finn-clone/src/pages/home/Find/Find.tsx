import { SearchIcon } from "../../../assets/home/find/SearchIcon";
import { FinnMapIcon } from "../../../assets/home/find/FinnMapIcon";
import { StyledFindWrapper, StyledSearchField, StyledFinnMapBtn } from "./Find.styles";

const Find = () => {

    return(
        <StyledFindWrapper>
            <StyledSearchField>
                <input placeholder="Søk etter FINN-kode"></input>
                <button style={{border: 'none', backgroundColor: 'transparent', position: 'absolute'}}>
                    <SearchIcon/>
                </button>
            </StyledSearchField>
            <StyledFinnMapBtn>
                    <FinnMapIcon/>
                <h3>FINN Kart</h3>
            </StyledFinnMapBtn>
        </StyledFindWrapper>
    )
}

export default Find;