import { createContext, useContext, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage("user", null);
    const [id, setId] = useLocalStorage("userid", null);
    const navigate = useNavigate();

    const login = async ({user, id}) => {
        setUser(user);
        setId(id);
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
            login,
            logout,
        }),
        [user, id]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};