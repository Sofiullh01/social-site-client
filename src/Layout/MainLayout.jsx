import { Outlet } from "react-router-dom";
import NavBar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayout = () => {
    return (
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
            {/* user: assuser12 password: V8iSivx14gAWS1cR/ */}
        </div>
    );
};

export default MainLayout;