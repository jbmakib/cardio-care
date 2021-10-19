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
    const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    };

    // handle github sign in
    const signInWithGithub = () => {
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
    };

    // handle login with email and password
    const logInWithEmailAndPassword = () => {
        setIsLoading(true);
        return signInWithEmailAndPassword(auth, loginEmail, loginPassword);
    };

    // handle sign-up with email and password
    const signUpWithEmailAndPassword = () => {
        setIsLoading(true);
        return createUserWithEmailAndPassword(
            auth,
            signUpEmail,
            signUpPassword
        );
    };

    // for logging out
    const logOut = () => {
        setIsLoading(true);
        signOut(auth).finally(() => {
            setIsLoading(false);
        });
    };

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(null);
            }
            setIsLoading(false);
        });
        return unsubscribed;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // update user profile
    const updateUserProfile = () => {
        setIsLoading(true);
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
        isLoading,
        setIsLoading,
        logOut,
    };
};

export default useFirebase;
