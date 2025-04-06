
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
import React, { createContext, useState } from 'react';
import { auth } from '../firebase/firebase.init';


export const AuthContext=createContext(null);

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const name ="tahmina toma";
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);

    }
    const signInWithUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    // onAuthStateChanged(auth, (currentUser) => {
    //     if (currentUser) {
    //       console.log('Current User Is',currentUser)
    //       setUser(currentUser);
    //     } else {
    //         console.log("user Is Logged Out");
    //         setUser(null);
    //     }
    // });

    const authInfo={
        name ,
        user,
        createUser,
        signInWithUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;