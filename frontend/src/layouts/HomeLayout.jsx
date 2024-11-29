import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            {/* TODO: Home Page Component */}
        </>
    );
};

export default HomeLayout;
