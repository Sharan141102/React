import { CDN_URL } from "../utils/constants";
const RestaurantCard = ({ resData }) => {
    const { name, cuisines, avgRating, image, cloudinaryImageId, deliveryTime, sla } = resData;

    const imageUrl = image || (CDN_URL + cloudinaryImageId);

    const finalDeliveryTime = deliveryTime || sla?.deliveryTime;

    return (
        <div className="res-card">
            <img className="res-logo" src={imageUrl} alt="Logo" />
            <h2>{name}</h2>
            <h3>{cuisines?.join(", ") || ""}</h3>
            <h3>{avgRating} stars</h3>
            <h3>{finalDeliveryTime} minutes</h3>
        </div>
    )
}

export default RestaurantCard;