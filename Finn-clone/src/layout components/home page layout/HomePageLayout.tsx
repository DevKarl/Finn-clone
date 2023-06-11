import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer"


const HomePageLayout = () => {

    // add site wrapper class w/styled components

    return(
        <div>
            <Header/>
            <main>
                <Outlet/>
            </main>
            <Footer/>
        </div>
    )
}


export default HomePageLayout;