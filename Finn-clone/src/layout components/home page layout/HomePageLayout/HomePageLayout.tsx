import Header from "../Header/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer"
import StyledSiteWrapper from "./HomePageLayout.styles";

const HomePageLayout = () => {

    return(
        <StyledSiteWrapper>
            <Header/>
                <main>
                    <Outlet/>
                </main>
            <Footer/>
        </StyledSiteWrapper>
    )
}


export default HomePageLayout;