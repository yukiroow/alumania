// Author @yukiroow Harry Dominguez
import { Outlet } from "react-router-dom";
import Navbar from "../components/core/Navbar";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
