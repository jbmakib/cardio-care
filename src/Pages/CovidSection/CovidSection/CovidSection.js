import React from "react";
import "./CovidSection.css";

const CovidSection = () => {
    return (
        <div className="covid my-6">
            <h2 className="text-5xl font-black text-center text-white my-6">
                Covid Section
            </h2>
            <div className="container mx-auto lg:grid-cols-2 grid-cols-1 grid items-center">
                <div></div>
                <div>
                    <div className="md:my-36 my-20">
                        <h1 className="text-2xl pl-1">"Get Covid Solution"</h1>
                        <h1 className="text-6xl font-bold text-red-600 md:text-8xl">
                            Get Vaccine
                        </h1>
                        <span className="md:text-3xl font-bold pl-1 text-2xl">
                            and
                        </span>
                        <h2 className="text-5xl font-bold md:text-7xl">
                            Be Healthy
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CovidSection;
