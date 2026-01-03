import { useState } from "react";
import { getRestaurants, setRestaurants } from "../utils/LocalStorage";
const AddRestaurant = ({onAdd}) => {
    const [form, setForm] = useState({
        restaurantID: "",
        restaurantName: "",
        address: "",
        type: "",
        parkingLot: true,
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/2izhqnTaNLdenHYF.jpeg"
});
const handleSunmit = (e) => {
    e.preventDefault();
    if (Object.values(form).some((value) => value === "")) {
        alert("Please fill all the fields");
        return;
    }
    const newRestaurant = {
        ...form,
        restaurantID: Date.now(),
        parkingLot: form.parkingLot === "true" ? true : false
        
    };
    const data = getRestaurants();
    setRestaurants([...data, newRestaurant]);
    alert("Restaurant added successfully");
    onAdd();
    setForm ({
        restaurantID: "",
        restaurantName: "",
        address: "",
        type: "",
        parkingLot: true,
        image: "https://coding-platform.s3.amazonaws.com/dev/lms/tickets/7524df6e-46fa-4506-8766-eca8da47c2f1/
    });
};return (
    <form onSubmit={handleSunmit}>
        <input placeholder="Restaurant Name" value={form.restaurantName} onChange={(e) => setForm({...form, restaurantName: e.target.value})} />    
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
            <button type="submit">Add Restaurant</button>
    </form>
);
}
export default AddRestaurant;