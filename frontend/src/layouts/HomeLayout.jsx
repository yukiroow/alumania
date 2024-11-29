import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const HomeLayout = () => {
    return (
        <>
            <Navbar />
            <main className="mt-24">
                <Outlet />
            </main>
        </>
    );
};

export default HomeLayout;
