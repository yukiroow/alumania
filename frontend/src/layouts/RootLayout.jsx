import React from "react";
import SideBar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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
