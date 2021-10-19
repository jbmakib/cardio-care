import React from "react";
import CovidSection from "../../CovidSection/CovidSection/CovidSection";
import Services from "../../Services/Services/Services";
import Banner from "../Banner/Banner";
import Doctors from "../Doctors/Doctors";

const Home = () => {
    return (
        <>
            <Banner></Banner>
            <Services items={6}></Services>
            <Doctors></Doctors>
            <CovidSection></CovidSection>
        </>
    );
};

export default Home;
