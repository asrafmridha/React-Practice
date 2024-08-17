import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext =createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser] =useState({displayName :'Asraf Mridha'});
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    useEffect(()=>{
        const unsuscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);   
            console.log('auth state changed',currentUser);
        })
        return ()=>{
            unsuscribe();
        }
    },[]);
    const authInfo={user:user, createUser: createUser,signIn};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;