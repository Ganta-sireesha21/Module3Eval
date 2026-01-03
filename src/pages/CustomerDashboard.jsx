import { useState } from "react";
import Navbar from "../components/Navbar";
import RestaurantsCard from "../components/Restaurantcard";
import { getRestaurants } from "../utils/LocalStorage";
const CustomerDashboard = () => {}
    const [data, setData] = useState(getRestaurants);
    const search = (v) => setData(getRestaurants().filter((item) => item.restaurtantName.toLowerCase().includes(v.toLowerCase())));
    const filter = (k, v) => {
        if (!v) return setData(getRestaurants());
        setData(getRestaurants().filter((item) => item[k].toString() === v));
        return (
            <div>
                <Navbar onSearch={search} onFilter={filter} isAdmin={false} />
                <div>
                    {data.map((item) => (<RestaurantsCard key={item.id} data={item} isAdmin={false} />))} </div>      
            </div>
        );
    };
    export default CustomerDashboard;