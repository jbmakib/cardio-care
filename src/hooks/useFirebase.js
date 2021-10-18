import { useEffect, useState } from "react";
import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";
import initializeAuthentication from "../Pages/Login/Firebase/firebase.init";

initializeAuthentication();

const useFirebase = () => {
    const auth = getAuth();
    const [user, setUser] = useState({});

    // get providers
    const googleProvider = new GoogleAuthProvider();

    // handle google sign in
    const signInWithGoogle = () => {
        return signInWithPopup(auth, googleProvider);
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
        signInWithGoogle,
        logOut,
    };
};

export default useFirebase;
