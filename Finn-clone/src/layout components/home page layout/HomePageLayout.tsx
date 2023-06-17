import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer"


const HomePageLayout = () => {

    // add site wrapper class w/styled components

    return(
        <>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'column', height: '100vh', maxWidth: '1010px', gap: '30px'}}>
                <main>
                    <Outlet/>
                </main>
                <Footer/>
            </div>
        </>
    )
}


export default HomePageLayout;