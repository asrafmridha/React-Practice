import React, { createContext, useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.init';

export const AuthContext =createContext();
const auth = getAuth(app);
const UserContext = ({children}) => {
    const [user,setUser] =useState({displayName :'Asraf Mridha'});
    const authInfo={user:user};
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default UserContext;