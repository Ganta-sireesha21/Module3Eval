import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { setAuth } = useAuth();
    const navigate = useNavigate();

    const login = () => {
        if (email === "admin@example.com" && password === "admin1234") {
            setAuth({ isAuth: true, role: "admin" });
            navigate("/admin/dashboard");
        } else if (email === "customer@example.com" && password === "customer1234") {
            setAuth({ isAuth: true, role: "customer" });
            navigate("/customer/home");
        } else alert("Invalid credentials");
    };
    return (
        <div>
            <h2>Login</h2>
            <input placeholder="Email" onChange={(e)=>setEmail(e.target.value)} />
            <input placeholder="Password" type="password" onChange={(e)=>setPassword(e.target.value)} />
            <button onClick={login}>Login</button>

        </div>
    );
};
export default Login;