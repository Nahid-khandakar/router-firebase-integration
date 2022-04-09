import { useEffect, useState } from "react"
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase.init";

const auth = getAuth(app);
const googlProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState({});

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            setUser(user)
        });
    }, [])


    const signInWithGoogle = () => {
        signInWithPopup(auth, googlProvider)
            .then((result) => {
                const user = result.user;
                setUser(user)
                console.log(user)
            }).catch((error) => {
                console.log(error)
            });
    }

    const googleSignOut = () => {
        signOut(auth).then(() => {

        }).catch((error) => {

        });
    }

    return { user, signInWithGoogle, googleSignOut }
}

export default useFirebase