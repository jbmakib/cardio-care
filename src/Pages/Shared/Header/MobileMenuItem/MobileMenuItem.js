import React from "react";
import { NavLink } from "react-router-dom";

const MobileMenuItem = ({ location, children }) => {
    return (
        <li>
            <NavLink
                exact
                to={location}
                className="block text-sm px-2 py-3 hover:text-white hover:bg-red-600 transition duration-300"
                activeClassName="text-white bg-red-600 font-semibold"
            >
                {children}
            </NavLink>
        </li>
    );
};

export default MobileMenuItem;
