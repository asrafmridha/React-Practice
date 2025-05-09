import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext=createContext();
const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
      setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
      };
    const signInWithUser = (email, password) => {
      setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
      };    
      const updateUserProfile = (updateData) => {
      setLoading(true);
        return updateProfile(auth.currentUser,updateData);
      };
    const signOutUser = () => {
      setLoading(true);
      return signOut(auth);
      };
    
    const authInfo={
        createUser,
        user,
        setUser,
        signInWithUser,
        signOutUser,
        updateUserProfile,
        loading

    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
          if (currentUser) {
            console.log("Current User Is", currentUser);
            setUser(currentUser);
            setLoading(false);
          } else {
            console.log("user Is Logged Out");
            setUser(null);
          }
          setLoading(false);
        });
        return () => {
          unSubscribe();
        };
      }, []);
    
    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>;
};

export default AuthProvider;