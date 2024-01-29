import { Outlet } from "react-router-dom";
import Home from "../home/Home";
import Footer from "./footer/Footer";
import ResponsiveAppBar from "./navbar/Navbar";


const Layout = () => {
    return (
        <div className="layout-container">
            <ResponsiveAppBar/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout;