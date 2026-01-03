import { use, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantsCard from "../components/Restaurantcard";
import  { getRestaurants, setRestaurants } from "../utils/LocalStorage";
const AdminDashboard = () => {
    const [restaurants, setRestaurant] = useState([]);
    useEffect(() => {
        setRestaurant(getRestaurants());
    }, []);
    const handleDelete = (id) => {
       if (!window.confirm("Are you sure you want to delete this restaurant?")) return;
       const updated = restaurants.filter((item) => item.id !== id);
       setRestaurant(updated);
        refresh();
        alert("Restaurant deleted successfully");
    };
    const handleSearch = (query) => {
        const filtered = getRestaurants().filter((item) =>
            item.restaurtantName.toLowerCase().includes(query.toLowerCase())
        );
        setRestaurant(filtered);
    };
    const handleFilter = (key, value) => {  
        if(!value) return refresh();
        const filtered = getRestaurants().filter((item) => item[key].toString() === value);
        setRestaurant(filtered);
    };
    const refresh = () => {
        setRestaurant(getRestaurants());
    };
    return (
        <div>
            <h2>Admin Dashboard</h2>        
            <Navbar onSearch={handleSearch} onFilter={handleFilter} isAdmin={true} />
            <div>
                {restaurants.map((item) => ( 
                    <RestaurantsCard key={item.id} data={item} isAdmin={true} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};
export default AdminDashboard;