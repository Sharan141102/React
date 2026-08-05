import { useEffect, useState } from "react";
import { HEADER_LOGO } from "../utils/constants";
import { Link } from "react-router";

const Header = () => {
    const [btnName, setBtnName] = useState("Login")
    console.log("Header rendered")

    // if no dependancy array => useEffect is called on every render
    // if dependancy array is empty => useEffect is called only once after initial render (just once)
    // if dependancy array is [btnName] => called everytime btnName is updated

    useEffect(() => {
        console.log("Effect called");
    }, [btnName])

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={HEADER_LOGO} alt="Logo" />
            </div>
            <div className="nav-items">
                <ul type="none">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <button className="login-btn" onClick={() => {
                        btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
                    }}>{btnName}</button>
                </ul>
            </div>
        </div >
    )
}

export default Header;