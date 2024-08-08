"use client";
 
import { useContext, createContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GithubAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "./firebase";
 
const AuthContext = createContext();
 
export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const router = useRouter();
 
  const gitHubSignIn = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
  };
 
  const firebaseSignOut = () => {
    return signOut(auth);
  };
  
  const firebaseSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const firebaseSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
 
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      if (currentUser) {
        router.push("/tracker");
      }
    });
    return () => unsubscribe();
  }, [router]);
 
  return (
    <AuthContext.Provider value={{ user, gitHubSignIn, firebaseSignOut, firebaseSignIn, firebaseSignUp }}>
      {children}
    </AuthContext.Provider>
  );
};
 
export const useUserAuth = () => {
  return useContext(AuthContext);
};