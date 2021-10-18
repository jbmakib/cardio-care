import React from "react";
import { NavLink } from "react-router-dom";

const PrimaryMenuItem = ({ location, children }) => {
    return (
        <NavLink
            exact
            to={location}
            className="py-4 px-2 font-semibold text-gray-500 hover:text-red-600 transition duration-300"
            activeClassName="text-red-600 border-b-4 border-red-600"
        >
            {children}
        </NavLink>
    );
};

export default PrimaryMenuItem;
