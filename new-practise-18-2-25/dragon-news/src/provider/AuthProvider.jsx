import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
      };
    const authInfo={
        createUser,
        setUser,

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            console.log("Current User Is", currentUser);
            setUser(currentUser);
          } else {
            console.log("user Is Logged Out");
            setUser(null);
          }
        });
        return () => {
          unSubscribe();
        };
      }, []);
    
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;