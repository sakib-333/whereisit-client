import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "../firebase/firebase.config";
import useAxios from "../hooks/useAxios";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [myItems, setMyItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataLoading, setDataLoading] = useState(false);
  const axiosInstance = useAxios();

  // Google provider
  const googleProvider = new GoogleAuthProvider();

  // Sign in with google
  const signinWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  // Signup user
  const signupUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // Signin user
  const signinUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  // Update user profile
  const updateUserProfile = (updatedInfo) => {
    return updateProfile(auth.currentUser, updatedInfo);
  };

  // Tracing current user
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currUser) => {
      setUser(currUser);
      if (currUser) {
        axiosInstance
          .post("/jwt", { email: currUser.email })
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      } else {
        axiosInstance
          .post("/logout", {})
          .then((res) => {
            console.log(res.data);
            setLoading(false);
          })
          .catch((err) => console.log(err));
      }
    });
    return () => unsubscribe();
  }, []);

  // Signout user
  const signoutUser = () => {
    setLoading(true);
    return signOut(auth);
  };

  const authInfo = {
    user,
    setUser,
    myItems,
    setMyItems,
    loading,
    setLoading,
    dataLoading,
    setDataLoading,
    signinWithGoogle,
    signupUser,
    updateUserProfile,
    signinUser,
    signoutUser,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
