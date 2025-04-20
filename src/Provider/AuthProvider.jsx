import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext()

import { GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const googleSignIn = () =>{
        return signInWithPopup(auth, provider)
    }

    const logOutUser = () =>{        
        return signOut(auth)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        googleSignIn,
        logOutUser
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('CurrentUser', currentUser)

        })

        return () =>{
            return unSubscribe()
        }
    },[])

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;