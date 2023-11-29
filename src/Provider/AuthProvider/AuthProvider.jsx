import { useEffect, useState } from "react";
import { createContext } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";
import { auth } from "../firebase/firebase.config";

export const  AuthContext = createContext(null);
const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const createUser = (email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const loginUser = (email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    };
    const logOut = ()=>{
        setLoading(true);
        return signOut(auth);
    }

    const updateUserProfile = (name,photo)=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            console.log('currentUser',currentUser);
            setLoading(false);
          });
          return ()=>{
            return unsubscribe();
          }
    },[])
    const authInfos = {
        user,
        logOut,
        loading,
        loginUser,
        createUser,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfos}>
            {children}
        </AuthContext.Provider>
    );
};
AuthProvider.propTypes ={
    children: PropTypes.node,
}
export default AuthProvider;