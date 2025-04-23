import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.init";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const name = "tahmina toma";
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInWithUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signInWithGoogle=()=>{
    return signInWithPopup(auth, provider);
  }
  const signOutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

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

  const authInfo = {
    name,
    user,
    loading,
    createUser,
    signInWithUser,
    signInWithGoogle,
    signOutUser,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
