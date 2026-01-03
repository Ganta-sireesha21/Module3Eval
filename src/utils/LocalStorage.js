import { data } from "react-router-dom";

export const getRestaurants = () => JSON.parse(localStorage.getItem("restaurants")) || [];
export const setRestaurants =(data)=> localStorage.setItem(evaData, JSON.stringify(data));