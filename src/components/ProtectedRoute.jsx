import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Children } from "react";
const protectedRoute = ({ Children, role}) => {
    const { auth } = useAuth();
    if (!auth.isAuth) return <Navigate to = "/Login" />;
    if (role && auth.role !== role) return <Navigate to = "/Login" />;
    return Children;
};
export default protectedRoute;