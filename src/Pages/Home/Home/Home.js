import React from "react";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services items={6}></Services>
        </>
    );
};

export default Home;
