import React from "react";
import { useHistory } from "react-router-dom";
import Input from "../../Shared/Input/Input";
import useAuth from "../../../hooks/useAuth";

const ContactUs = () => {
    const { user } = useAuth();
    const history = useHistory();
    const handleFormSubmit = (e) => {
        e.preventDefault();
        history.push("/");
    };
    return (
        <div className="container mx-auto my-6">
            <h1 className="font-bold text-center mt-3 mb-5 text-5xl">
                Contact
                <span className="text-red-500"> Us</span>
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
                <div>
                    <h5 className="font-bold">Get in touch</h5>
                    <p>
                        Have a question? Concern? Request? We’d love to hear
                        from you. Connect with us through the following ways.
                    </p>
                    <div className="flex items-center justify-start py-3">
                        <div className="w-1/6 md:w-1/12 flex justify-center">
                            <i
                                className="fas fa-headset h3"
                                aria-hidden="true"
                            ></i>
                        </div>
                        <div className="w-5/6 md:w-11/12">
                            <h6 className="font-bolder m-0 my-1">
                                Support 24/7
                            </h6>
                            <a
                                href="tel:+8801322810867"
                                className="no-underline text-red-600 hover:underline my-1"
                            >
                                <span className="text-orange">01322810867</span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-start py-3">
                        <div className="w-1/6 md:w-1/12 flex justify-center">
                            <i
                                className="fas fa-map-marker-alt h3"
                                aria-hidden="true"
                            ></i>
                        </div>
                        <div className="w-5/6 md:w-11/12">
                            <h6 className="font-bolder m-0 my-1">Location</h6>
                            <a
                                href="https://goo.gl/maps/wj4uBTA79oUoSnHR8"
                                target="_blank"
                                className="no-underline text-red-600 hover:underline my-1"
                                rel="noreferrer"
                            >
                                <span className="text-orange">
                                    CTG, Bangladesh
                                </span>
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-start py-3">
                        <div className="w-1/6 md:w-1/12 flex justify-center">
                            <i
                                className="fas fa-envelope h3"
                                aria-hidden="true"
                            ></i>
                        </div>
                        <div className="w-5/6 md:w-11/12">
                            <h6 className="font-bolder m-0 my-1">Email</h6>
                            <a
                                href="mailto:web@programming-hero.com"
                                className="no-underline text-red-600 hover:underline my-1"
                            >
                                <span className="text-orange">
                                    web@programming-hero.com
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
                <div>
                    <h5 className="font-bold">Message Me</h5>
                    <form onSubmit={handleFormSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-3">
                            <Input
                                type="text"
                                id="msg-name-input"
                                defaultValue={user?.displayName}
                            >
                                Full Name
                            </Input>
                            <Input
                                type="email"
                                id="msg-email-input"
                                defaultValue={user?.email}
                            >
                                Email
                            </Input>
                        </div>
                        <Input type="text" id="msg-subject-input">
                            Subject
                        </Input>
                        <div className="form-floating my-3">
                            <label
                                htmlFor="floatingTextarea2"
                                className="block uppercase text-red-700 text-xs font-bold mb-2"
                            >
                                Message...
                            </label>
                            <textarea
                                className="px-3 py-3 placeholder-red-400 text-red-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full small-transition"
                                placeholder="Leave a comment here"
                                id="floatingTextarea2"
                                style={{ height: "140px" }}
                                required
                            ></textarea>
                        </div>
                        <input
                            type="submit"
                            className="py-2 px-3 font-medium text-white bg-red-600 rounded hover:bg-red-500 transition duration-300 cursor-pointer"
                            value="Send Message"
                        />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
