import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ul className="container">
            <li>
                <Link to="/phones" className="navbar__option">
                    Phones
                </Link>
            </li>
        </ul>
    );
};

export default NavBar;