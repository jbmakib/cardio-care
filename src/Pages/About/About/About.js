import React from "react";
import "./About.css";

const About = () => {
    return (
        <>
            <div className="about">
                <div className="container mx-auto lg:grid-cols-2 grid-cols-1 grid items-center">
                    <div></div>
                    <div>
                        <div className="md:my-40 my-20">
                            <h1 className="text-2xl">
                                "HEALTHCARE THAT CARES"
                            </h1>
                            <h1 className="text-6xl font-bold text-red-600 md:text-8xl">
                                Trusted care,
                            </h1>
                            <h2 className="text-5xl font-thin md:text-7xl">
                                with Medicare
                            </h2>
                            <p className="text-2xl">
                                Distinctively exploit optimal alignments for
                                intuitive bandwidth. Quickly coordinate
                                e-business applications.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container mx-auto lg:grid-cols-2 grid-cols-1 grid items-center">
                <div>
                    <div className="md:my-40 my-20">
                        <h1 className="text-2xl pl-1">
                            "MEDICAL EXCELLENCE, COMPASSIONATE CARE"
                        </h1>
                        <h1 className="text-6xl font-thin text-red-600 md:text-8xl">
                            What we stand for?
                        </h1>
                        <h2 className="text-5xl font-bold md:text-7xl">
                            Our core values
                        </h2>
                        <p className="text-2xl pl-1">
                            Completely synergize resource taxing relationships
                            via premier niche markets. Professionally cultivate
                            one-to-one customer service with robust ideas.
                        </p>
                    </div>
                </div>
                <div>
                    <img
                        className="w-3/4"
                        src="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default About;
