import React, { createContext, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../../firebase/firebase.init';

export const AuthContext =createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser] =useState({displayName :'Asraf Mridha'});
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const authInfo={user:user, createUser: createUser};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;