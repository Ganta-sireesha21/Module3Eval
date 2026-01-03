import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [auth, setAuth] = useState(() => {
        return JSON.parse(localStorage.getItem("auth")) || { isAuth: false, role: null };
    });
    useEffect(() => {
        localStorage.setItem("auth", JSON.stringify(auth));
    }, [auth]);
    return (
        <AuthContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthContext.Provider>
    );
};