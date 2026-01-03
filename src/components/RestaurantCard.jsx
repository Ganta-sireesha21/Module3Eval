import { useNavigate } from "react-router-dom";
const RestaurantsCard = ({ data, isAdmin, onDelete }) => {
    const navigate = useNavigate();
    return (
        <div>
            <img src={data.image} alt={data.name} width="200" height="150" />
            <h3>{data.restaurtantName}</h3>
            <p>{data.address}</p>
            <p>{data.type}</p>
            <p>Parking Lot: {data.parkingLot ? "Available" : "Not Available"}</p>
            <p>Rating: {data.rating}</p>
            {isAdmin && (
                <>
                <button onClick = {() => onDelete(data.id)}>Delete</button>
                <button onClick={()=> navigate(`/admin/restaurants/update/${data.restaurantId}`)}>Update</button>
                </>
            )}
        </div>
    );
};
export default RestaurantsCard;