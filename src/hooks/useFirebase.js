import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    GithubAuthProvider,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    updateProfile,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState(null);
    const [showName, setShowName] = useState("");

    // states for login
    const [loginEmail, setLoginEmail] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    // states for sign up
    const [signUpEmail, setSignUpEmail] = useState("");
    const [signUpPassword, setSignUpPassword] = useState("");

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

    // handle sign-up with email and password
    const signUpWithEmailAndPassword = () => {
        return createUserWithEmailAndPassword(
            auth,
            signUpEmail,
            signUpPassword
        );
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
                setUser(null);
            }
        });
        return unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // update user profile
    const updateUserProfile = () => {
        return updateProfile(auth.currentUser, { displayName: showName });
    };

    return {
        user,
        setUser,
        setLoginEmail,
        setLoginPassword,
        logInWithEmailAndPassword,
        setSignUpEmail,
        signUpPassword,
        setSignUpPassword,
        signUpWithEmailAndPassword,
        setShowName,
        updateUserProfile,
        signInWithGoogle,
        signInWithGithub,
        logOut,
    };
};

export default useFirebase;
