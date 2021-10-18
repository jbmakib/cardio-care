import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import Input from "../Input/Input";
import LoginButton from "../LoginButton/LoginButton";

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_URI = location.state?.from || "/";
    const {
        signInWithGoogle,
        signInWithGithub,
        setLoginEmail,
        setLoginPassword,
        logInWithEmailAndPassword,
    } = useAuth();

    // function for handling log in
    const handleSignIn = (provider) => {
        provider()
            .then((result) => {
                history.push(redirect_URI);
                console.log(result.user);
            })
            .catch((err) => {
                console.log(err.message);
            });
    };

    // function for handling form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSignIn(logInWithEmailAndPassword);
    };
    return (
        <div className="container mx-auto px-4 h-full">
            <div className="flex content-center items-center justify-center h-full">
                <div className="w-full lg:w-4/12 px-4 py-8">
                    <div className="relative flex flex-col min-w-0 break-words w-full shadow-lg rounded-lg bg-red-200 border-0">
                        <div className="rounded-t mb-0 px-6 pt-6 pb-4">
                            <div className="text-center mb-3">
                                <h6 className="text-red-600 text-sm font-bold">
                                    Log in with
                                </h6>
                            </div>
                            <div className="btn-wrapper text-center">
                                <LoginButton
                                    onClick={() =>
                                        handleSignIn(signInWithGoogle)
                                    }
                                >
                                    Google
                                </LoginButton>
                                <LoginButton
                                    onClick={() =>
                                        handleSignIn(signInWithGithub)
                                    }
                                >
                                    Github
                                </LoginButton>
                            </div>
                            <hr className="mt-4 border-b-1 border-red-400" />
                        </div>
                        <div className="flex-auto px-4 lg:px-10 pt-0">
                            <div className="text-red-500 text-center mb-3 font-bold">
                                <small>Or Log in with credentials</small>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <Input
                                    type="email"
                                    id="login-email-input"
                                    setInputState={setLoginEmail}
                                >
                                    Email
                                </Input>
                                <Input
                                    type="password"
                                    id="login-password-input"
                                    setInputState={setLoginPassword}
                                >
                                    Password
                                </Input>
                                <div>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input
                                            id="customCheckLogin"
                                            type="checkbox"
                                            className="form-checkbox text-red-800 ml-1 w-5 h-5"
                                            style={{
                                                transition: "all 0.15s ease 0s",
                                            }}
                                        />
                                        <span className="ml-2 text-sm font-semibold text-red-700">
                                            Remember me
                                        </span>
                                    </label>
                                </div>
                                <div className="text-center mt-6">
                                    <input
                                        className="bg-red-900 text-white active:bg-red-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                                        type="submit"
                                        value="Log In"
                                        style={{
                                            transition: "all 0.15s ease 0s",
                                        }}
                                    ></input>
                                </div>
                            </form>
                        </div>
                        <div className="px-4 lg:px-10 my-3">
                            <small>
                                Or{" "}
                                <Link
                                    to="/sign-up"
                                    className="text-red-900 hover:underline"
                                >
                                    Create New Account
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
