import React from "react";
import Doctor from "../Doctor/Doctor";

const Doctors = () => {
    return (
        <div className="container mx-auto">
            <h2 className="text-5xl text-red-500 font-bold text-center my-4">
                Our Specialist
            </h2>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5">
                <Doctor
                    img="https://media.istockphoto.com/photos/happy-healthcare-practitioner-picture-id138205019?k=20&m=138205019&s=612x612&w=0&h=KpsSMVsplkOqTnAJmOye4y6DcciVYIBe5dYDgYXLVW4="
                    name="Mr. Drew"
                    des="FOUNDER / CHIEF SURGEON"
                />
                <Doctor
                    img="https://img.freepik.com/free-photo/portrait-smiling-handsome-male-doctor-man_171337-5055.jpg"
                    name="Polin Kaker"
                    des="ASSISTANT SURGEON"
                />
                <Doctor
                    img="https://media.istockphoto.com/photos/portrait-of-happy-african-doctor-at-private-clinic-picture-id1189303662?k=20&m=1189303662&s=612x612&w=0&h=q3P08I8GlYRHIYFoN-h_WBM0PPGzO6ox4XJx8kxJRsc="
                    name="Anthony Marker"
                    des="Cardio Specialist"
                />
            </div>
        </div>
    );
};

export default Doctors;
