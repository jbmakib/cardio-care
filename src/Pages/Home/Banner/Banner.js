import React from "react";
import "./Banner.css";

const Banner = () => {
    return (
        <div className="banner">
            <div className="container mx-auto md:grid-cols-2 grid-cols-1 grid items-center">
                <div>
                    <div className="my-40">
                        <h1 className="text-2xl pl-1">
                            "Inspiring Better Health"
                        </h1>
                        <h1 className="text-8xl font-bold text-red-600">
                            Heart Healthy
                        </h1>
                        <span className="text-3xl font-bold pl-1">Means</span>
                        <h2 className="text-7xl font-bold">Body Healthy</h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;
