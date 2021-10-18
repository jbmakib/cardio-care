import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    // states for login
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // get providers
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    // handle google sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
    };

    // handle github sign in
    const signInWithGithub = () => {
        return signInWithPopup(auth, githubProvider);
    };

    // handle login with email and password
    const logInWithEmailAndPassword = () => {
        return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    };

    // for logging out
    const logOut = () => {
        signOut(auth);
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
        });
        return unsubscribed;
    }, [auth]);

    return {
        user,
        setLoginEmail,
        setLoginPassword,
        logInWithEmailAndPassword,
        signInWithGoogle,
        signInWithGithub,
        logOut,
    };
};

export default useFirebase;
