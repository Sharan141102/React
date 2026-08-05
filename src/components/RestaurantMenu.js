import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null);

    const { resId } = useParams();

    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async (retryCount = 0) => {
        try {
            const res = await fetch(`${MENU_API}${resId}`)

            if (!res.ok || res.status === 202) {
                if (retryCount < 3) {
                    setTimeout(() => fetchMenu(retryCount + 1), 1000)
                    return
                }
                throw new Error(`Request failed with status ${res.status}`)
            }

            const json = await res.json()
            setResInfo(json.data)
        } catch (err) {
            console.log("Error on fetching API", err)
        }
    }

    if (resInfo === null) return <Shimmer />;

    const infoCard = resInfo?.cards?.find(
        (card) => card?.card?.card?.["@type"]?.includes("food.v2.Restaurant")
    )?.card?.card?.info ?? {};

    const { name, cuisines, costForTwoMessage, avgRatingString } = infoCard;

    if (!name) return <div>Restaurant not found. Please try a different restaurant.</div>;

    return (
        <div>
            <h1>{name}</h1>
            <h2>
                {cuisines?.join(", ") ?? ""}
            </h2>
            <h2>
                {costForTwoMessage || ""}
                {costForTwoMessage && avgRatingString ? " / " : ""}
                {avgRatingString || ""}
            </h2>
        </div>
    )
}

export default RestaurantMenu;
