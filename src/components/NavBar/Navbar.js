import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul className="container">
                <Link to="/">
                    <img src="https://images.ctfassets.net/5gv1edeicqfs/48EM0LU3Z6gWkQCcCaeoq2/704ea273b5d50d09ff450a5ceaa74631/guidesmiths-logo.png" alt="guidesmiths_logo" className="image" />
                </Link>
                <li>
                    <Link to="/phones" className="navbar__option">
                        Phones
                </Link>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;