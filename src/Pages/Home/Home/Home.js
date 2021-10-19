import React from "react";
import Services from "../../Services/Services/Services";
import CovidSection from "../CovidSection/CovidSection";
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
