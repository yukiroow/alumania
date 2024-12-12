// Author: @yukiroow Harry Dominguez
import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [id, setId] = useLocalStorage("userid", null);
    const [dp, setDp] = useLocalStorage("userdp", null);
    const navigate = useNavigate();

    const login = async ({ user, id, dp }) => {
        setUser(user);
        setId(id);
        setDp(dp);
        navigate("/home");
    };

    const logout = () => {
        setUser(null);
        navigate("/app", { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            id,
            dp,
            login,
            logout,
        }),
        [user, id, dp]
    );
    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
