import React, { useState } from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import LoginButton from "../../Login/LoginButton/LoginButton";
import Input from "../../Shared/Input/Input";

const SignUp = () => {
    // states for checking passwords
    const [rePass, setRePass] = useState("");

    const location = useLocation();
    const history = useHistory();
    const redirect_URI = location.state?.from || "/";

    const {
        error,
        setError,
        setUser,
        signInWithGoogle,
        signInWithGithub,
        setSignUpEmail,
        signUpPassword,
        setSignUpPassword,
        signUpWithEmailAndPassword,
        setShowName,
        updateUserProfile,
        setIsLoading,
    } = useAuth();

    const handleSignIn = (provider) => {
        provider()
            .then((result) => {
                history.push(redirect_URI);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    // handle form submit
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (signUpPassword.length < 6) {
            setError("Password must be 6 character long");
            return;
        } else if (signUpPassword !== rePass) {
            setError("Your Entered Password and Retyped isn't the same");
            return;
        }
        signUpWithEmailAndPassword()
            .then((result) => {
                updateUserProfile().then(() => {
                    setUser(result.user);
                });
                history.push(redirect_URI);
            })
            .catch((err) => {
                setError(err.message);
            })
            .finally(() => {
                setIsLoading(false);
            });
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
                                <small>
                                    Or Create Account with credentials
                                </small>
                            </div>
                            <form onSubmit={handleFormSubmit}>
                                <Input
                                    type="text"
                                    id="signUp-name-input"
                                    setInputState={setShowName}
                                >
                                    Full Name
                                </Input>
                                <Input
                                    type="email"
                                    id="signUp-email-input"
                                    setInputState={setSignUpEmail}
                                >
                                    Email
                                </Input>
                                <Input
                                    type="password"
                                    id="signUp-password-input"
                                    setInputState={setSignUpPassword}
                                >
                                    Password
                                </Input>
                                <Input
                                    type="password"
                                    id="signUp-re-password-input"
                                    setInputState={setRePass}
                                >
                                    Re-Type Password
                                </Input>
                                {error ? (
                                    <small className="text-red-900 block px-4 py-2 text-center">
                                        {error}
                                    </small>
                                ) : (
                                    ""
                                )}
                                <div className="text-center mt-6">
                                    <input
                                        className="bg-red-900 text-white active:bg-red-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full small-transition cursor-pointer"
                                        type="submit"
                                        value="Register"
                                    ></input>
                                </div>
                            </form>
                        </div>
                        <div className="px-4 lg:px-10 my-3">
                            <small>
                                Have an account?{" "}
                                <Link
                                    to="/login"
                                    className="text-red-900 hover:underline"
                                >
                                    Log in now
                                </Link>
                            </small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
