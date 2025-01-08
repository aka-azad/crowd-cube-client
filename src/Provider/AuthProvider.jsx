import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import auth from "../Firebase/firebase.config";
import axios from "axios";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const signinWithEmailPassword = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const signUpWithEmailPassword = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signinWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth, email);
  };
  const signOutUser = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (acc) => {
      setUser(acc);
      const user = { email: acc?.email };
      if (acc) {
        axios.post("http://localhost:5000/login", user, {
          withCredentials: true,
        });
      } else {
        axios.post(
          "http://localhost:5000/logout",
          {},
          {
            withCredentials: true,
          }
        );
        setUser(null);
      }
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);
  const values = {
    user,
    loading,
    setLoading,
    signinWithEmailPassword,
    signUpWithEmailPassword,
    signinWithGoogle,
    signOutUser,
    resetPassword,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
