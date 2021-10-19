import React from "react";
import { NavLink } from "react-router-dom";
import OneOfFour from "../OneOfFour/OneOfFour";
import "./Footer.css";

const Footer = () => {
    return (
        <nav id="footer" className="bg-red-900 text-white">
            <div className="container mx-auto pt-8 pb-4">
                <div className="flex flex-wrap overflow-hidden sm:-mx-1 md:-mx-px lg:-mx-2 xl:-mx-2">
                    <OneOfFour>
                        <span className="text-3xl">Cardio Care</span>
                    </OneOfFour>
                    <OneOfFour>
                        <h4>Navigation</h4>
                        <ul className="nav navbar-nav">
                            <li className="leading-7 text-sm">
                                <NavLink
                                    className="underline text-small"
                                    to="/services"
                                >
                                    Services
                                </NavLink>
                            </li>
                            <li className="leading-7 text-sm">
                                <NavLink
                                    className="underline text-small"
                                    to="/about"
                                >
                                    About Us
                                </NavLink>
                            </li>
                        </ul>
                    </OneOfFour>
                    <OneOfFour>
                        <h4>Info</h4>
                        <ul>
                            <li className="leading-7 text-sm">
                                <NavLink
                                    className="underline text-small"
                                    to="/login"
                                ></NavLink>
                            </li>
                            <li className="leading-7 text-sm">
                                <NavLink
                                    className="underline text-small"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                        </ul>
                    </OneOfFour>
                    <OneOfFour>
                        <h4>Enter Site</h4>
                        <ul>
                            <li className="leading-7 text-sm">
                                <NavLink
                                    className="underline text-small"
                                    to="/login"
                                >
                                    Login
                                </NavLink>
                            </li>
                            <li className="leading-7 text-sm">
                                <NavLink
                                    className="underline text-small"
                                    to="/sign-up"
                                >
                                    Sign Up
                                </NavLink>
                            </li>
                        </ul>
                    </OneOfFour>
                </div>
            </div>
        </nav>
    );
};

export default Footer;
