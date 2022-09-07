import React, {useState, useEffect} from "react";
import { auth } from '../firebase';
import { onAuthStateChanged } from "firebase/auth";
export const AuthContext = React.createContext();

export function AuthContextProvider({children}){

    let [mainLoader, setMainLoader] = useState(true);
    let [cUser, setUser] = useState(null);
    
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
          if(user){
            // User is logged in
            setUser(user);
          }else{
            // User is logged out
            setUser(null);
          }
          setMainLoader(false);
        })
      }, [])

    let value = {cUser};
    return (
        <AuthContext.Provider value={value}>
            {!mainLoader && children}
        </AuthContext.Provider>
    )
} 