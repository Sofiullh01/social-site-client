import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from "prop-types";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,GoogleAuthProvider,
  updateProfile,
  signInWithPopup,
} from "firebase/auth";
import auth from "../../Firebase/firebase.config";
import useAxionOpne from "../../Hooks/useAxionOpne";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const axiosOpne = useAxionOpne();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const loginUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };
  const googleLogin = () => {
    setLoading(true);
    return signInWithPopup(auth,googleProvider)
  };
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUserProfile = (username,photo) => {
    updateProfile(auth.currentUser, {
      displayName:username,
      photoURL: photo,
    });
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      const userInfo = {eamil:currentUser?.email}
      console.log(userInfo)
      if(currentUser){
        // anythisg
        axiosOpne.post('/jwt',userInfo)
        .then(res=>{
          if(res.data.token){
            localStorage.setItem('access_token',res.data.token);
          }
        })
      }else{
        // sumthing
        localStorage.removeItem('access_token')
      }
      console.log("currentUser", currentUser);
      setLoading(false);
    });
  
    return () => {
      return unsubscribe();
    };
  }, [axiosOpne]);
  const authInfos = {
    user,
    logOut,
    loading,
    loginUser,
    createUser,
    googleLogin,
    updateUserProfile,
  };
  return (
    <AuthContext.Provider value={authInfos}>{children}</AuthContext.Provider>
  );
};
AuthProvider.propTypes = {
  children: PropTypes.node,
};
export default AuthProvider;
