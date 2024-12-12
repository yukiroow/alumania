// Author: @yukiroow Harry Dominguez
import SideBar from "../components/core/Sidebar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

/**
 * The main Layout of the application upon logging in.
 * Contains the Sidebar and an Outlet for the different pages of the application.
 */
const RootLayout = () => {
    const location = useLocation();
    const nav = useNavigate();
    useEffect(() => {
        if (location.pathname == "/app") {
            nav("/app/home/experiences");
        }
    }, []);
    return (
        <>
            <SideBar />
            <main className="ml-20">
                <Outlet />
            </main>
        </>
    );
};

export default RootLayout;
