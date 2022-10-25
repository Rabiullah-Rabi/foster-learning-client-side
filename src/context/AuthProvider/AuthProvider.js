import React, { useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GithubAuthProvider,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { createContext } from "react";
import app from "../../firebase/firebase.init";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // register with email and password
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  // Log in  with email password
  const emailPassSignIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
      setLoading(false);
    });
    return () => unSubscribe();
  }, []);
  const providerLogIn = (provider) => {
    return signInWithPopup(auth, provider);
  };
  // google log in
  const googleProvider = new GoogleAuthProvider();
  const handleGoogleSignin = () => {
    providerLogIn(googleProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };
  // git log in
  const gitProvider = new GithubAuthProvider();
  const handleGithubSignin = () => {
    providerLogIn(gitProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => console.error(error));
  };
  const authInfo = {
    user,
    loading,
    createUser,
    providerLogIn,
    emailPassSignIn,
    logOut,
    handleGoogleSignin,
    handleGithubSignin,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
