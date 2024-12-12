// Author: @yukiroow Harry Dominguez
import { Outlet } from "react-router-dom";
/**
 * Layout for the Login and Signup Pages.
 * The pages are automatically inserted to the Outlet component
 */
const AuthLayout = () => {
    return (
        <>
            <Outlet />
        </>
    );
};

export default AuthLayout;
