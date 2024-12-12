// Author: @yukiroow Harry Dominguez
import { Outlet } from "react-router-dom";
import Navbar from "../components/core/Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * Layout for the Home Page upon logging in.
 * The outlet is for the experiences, events, and opportunities tabs of the Navigation Bar.
 * Auto redirects the user to the expriences tab when accessing the Home Page. 
 * This Layout is a child of the RootLayout
 */
const HomeLayout = () => {
    const location = useLocation();
    const nav = useNavigate();
    useEffect(() => {
        if (location.pathname == "/app/home") {
            nav("/app/home/experiences");
        }
    }, []);

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
