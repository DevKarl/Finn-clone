import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer"
import { StyledSiteWrapper, StyledMainWrapper } from "./HomePageLayout.styles";

const HomePageLayout = () => {

    return(
        <StyledSiteWrapper>
            <Header/>
                <StyledMainWrapper>
                    <Outlet/>
                </StyledMainWrapper>
            <Footer/>
        </StyledSiteWrapper>
    )
}


export default HomePageLayout;