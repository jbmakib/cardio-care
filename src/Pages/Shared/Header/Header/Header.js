import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import useAuth from "../../../../hooks/useAuth";
import MobileMenuItem from "../MobileMenuItem/MobileMenuItem";
import PrimaryMenuItem from "../PrimaryMenuItem/PrimaryMenuItem";

const Header = () => {
    const { user, logOut } = useAuth();

    const [isMenuActive, setIsMenuActive] = useState(false);
    const handleMenuToggle = () => {
        setIsMenuActive(!isMenuActive);
    };

    return (
        <nav className="bg-white shadow-lg">
            {/* desktop view menu */}
            <div className="px-4 md:px-0 mx-auto container">
                <div className="flex justify-between">
                    <div className="flex space-x-7">
                        <div>
                            <NavLink
                                to="/"
                                className="flex items-center py-4 px-2"
                            >
                                <span className="font-bold text-red-600 text-lg">
                                    WebName
                                </span>
                            </NavLink>
                        </div>
                        {/* Primary Navbar items */}
                        <div className="hidden md:flex items-center space-x-1">
                            <PrimaryMenuItem location="/home">
                                Home
                            </PrimaryMenuItem>
                            <PrimaryMenuItem location="/services">
                                Services
                            </PrimaryMenuItem>
                            <PrimaryMenuItem location="/about">
                                About
                            </PrimaryMenuItem>
                            <PrimaryMenuItem location="/contact">
                                Contact Us
                            </PrimaryMenuItem>
                        </div>
                    </div>
                    {/* Secondary Navbar items */}
                    <div className="hidden md:flex items-center space-x-3">
                        {user.accessToken ? (
                            <>
                                <span>{user.displayName}</span>
                                <button
                                    onClick={logOut}
                                    className="py-2 px-2 font-medium text-white bg-red-600 rounded hover:bg-red-500 transition duration-300"
                                >
                                    Log Out
                                </button>
                            </>
                        ) : (
                            <>
                                <NavLink
                                    to="/login"
                                    className="py-2 px-3 font-medium text-gray-500 rounded hover:bg-red-600 hover:text-white transition duration-300"
                                >
                                    Log In
                                </NavLink>
                                <NavLink
                                    to="/sign-up"
                                    className="py-2 px-3 font-medium text-white bg-red-600 rounded hover:bg-red-500 transition duration-300"
                                >
                                    Sign Up
                                </NavLink>
                            </>
                        )}
                    </div>
                    {/* Mobile menu button */}
                    <div className="md:hidden flex items-center">
                        <button
                            className="outline-none mobile-menu-button"
                            onClick={handleMenuToggle}
                        >
                            <svg
                                className=" w-6 h-6 text-gray-500 hover:text-red-600 "
                                x-show="!showMenu"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path d="M4 6h16M4 12h16M4 18h16"></path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            <div
                className={`${isMenuActive ? "" : "hidden "}container mx-auto`}
            >
                <ul className="text-center">
                    <MobileMenuItem location="/home">Home</MobileMenuItem>
                    <MobileMenuItem location="/services">
                        Services
                    </MobileMenuItem>
                    <MobileMenuItem location="/about">About</MobileMenuItem>
                    <MobileMenuItem location="/contact">
                        Contact Us
                    </MobileMenuItem>
                    {user.accessToken ? (
                        <li className="flex justify-between items-center px-3 py-3">
                            <span>{user.displayName}</span>
                            <button
                                className="py-2 px-2 font-medium text-white bg-red-600 rounded hover:bg-red-500 transition duration-300"
                                onClick={logOut}
                            >
                                Logout
                            </button>
                        </li>
                    ) : (
                        <>
                            <MobileMenuItem location="/login">
                                Login
                            </MobileMenuItem>
                            <MobileMenuItem location="/sign-up">
                                Sign Up
                            </MobileMenuItem>
                        </>
                    )}
                </ul>
            </div>
        </nav>
    );
};

export default Header;
