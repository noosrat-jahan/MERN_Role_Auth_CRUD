import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';


export const AuthContext = createContext()

import { GoogleAuthProvider } from "firebase/auth";
import axios from 'axios';

const provider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signInUser = (email, password)=>{
        return signInWithEmailAndPassword(auth, email, password)
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
        signInUser,
        googleSignIn,
        logOutUser
    }

    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser)
            console.log('CurrentUser', currentUser)
            if(currentUser){
                const userInfo = {email : currentUser.email }

                axios.post("https://mern-role-auth-crud-server.vercel.app/jwt", userInfo)
                .then((res) =>{
                    if(res.data.token){
                        console.log('Token:', res.data.token)
                        // store access token in the local storage
                        localStorage.setItem("Access-Token", res.data.token)
                    }
                })
            }
            else{
                // remove token from local storage
                localStorage.removeItem("Access-Token")
            }

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