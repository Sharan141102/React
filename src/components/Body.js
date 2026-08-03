import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        fetchData();
    }, [])

    const fetchData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0697174&lng=80.2432839&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    const handleFilterClick = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => (res.info?.avgRating || res.avgRating) >= 4.5
        );
        setFilteredList(filteredList);
    }

    const handleSearch = () => {
        const filteredList = listOfRestaurants.filter(
            (res) => (res.info?.name).toLowerCase().includes(searchText.toLowerCase()));
        setFilteredList(filteredList);
    }

    return listOfRestaurants.length === 0 ? <Shimmer /> : (
        <div className="body">
            <div className="filter-search">
                <div className="search">
                    <input className="search-box" type="text" placeholder="Search" value={searchText} onChange={(e) => setSearchText(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") handleSearch(); }} />
                    <button className="search-btn" onClick={handleSearch}>Search</button>
                </div>
                <div className="filter">
                    <button className="filter-btn" onClick={handleFilterClick}>Top Rated Restaurants</button>
                </div>
            </div>
            <div className="res-container">
                {filteredList.map((res) => (
                    <RestaurantCard key={res.info?.id} resData={res.info} />
                ))}
            </div>
        </div>
    )
}

export default Body;