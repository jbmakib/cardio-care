import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container mx-auto lg:grid-cols-2 grid-cols-1 grid items-center">
                <div>
                    <div className="md:my-40 my-20">
                        <h1 className="text-2xl pl-1">
                            "Inspiring Better Health"
                        </h1>
                        <h1 className="text-6xl font-bold text-red-600 md:text-8xl">
                            Heart Healthy
                        </h1>
                        <span className="md:text-3xl font-bold pl-1 text-2xl">
                            Means
                        </span>
                        <h2 className="text-5xl font-bold md:text-7xl">
                            Body Healthy
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
