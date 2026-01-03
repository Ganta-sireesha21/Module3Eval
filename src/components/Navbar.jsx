import { use, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
const Navbar = ({ onSearch, onFilter}) => {
    const inputRef = useRef();
    const navigate = useNavigate();
    const { auth, setAuth } = useAuth();
    useEffect(()=> inputRef.current.focus(),[]);
    const logout = () => {
        setAuth({ isAuth: false, role: null });
        navigate("/login");
    };
    return (
        <div>
            <input ref ={inputRef} placeholder="Search Restaurants" onChange={(e) => onSearch(e.target.value)} />
            <select onChange={(e) => onFilter("type", e.target.value)}>
                <option value ="">All Type</option>
                <option value = "Rajasthani">Rajasthani</option>
                <option value = "Gujarati">Gujarati</option>
                <option value = "Mughlai">Mughlai</option>
                <option value = "Jain">Jain</option>
                <option value = "Thai">Thai</option>
                <option value = "Notth Indian">North Indian</option>
                <option value= "South Indian">South Indian</option>
            </select>
            <select onChange={(e)=> onFilter("parkingLot", e.target.value)}>
                <option value= "">Parking</option>
                <option value = "true">Yes</option>
                <option value = "false">No</option>
            </select>
            <button onClick={logout}>Logout</button>
        </div>
    );
};
export default Navbar;