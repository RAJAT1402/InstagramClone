import React, {useState} from 'react'
import { auth } from '../firebase'
import { signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom'

function Login() {

  let [email, SetEmail] = useState("");
  let [password, SetPassword] = useState("");
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  let printDetails = async () =>{
    // console.log(email , "  " , password);
   try{
    setLoading(true);
    let userCred = await signInWithEmailAndPassword(auth, email, password);
    console.log(userCred.user); 
    setUser(userCred.user);
   }catch(err){
    setError(err.message)
    console.log(error)
    setTimeout(()=>{
      setError("")
    }, 2000)
   }
   setLoading(false);
  }

  let signout = async () =>{
    await signOut(auth);
    setUser(null)
  }

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if(user){
        // User is logged in
        setUser(user);
      }else{
        // User is logged out
        setUser(null);
      }
    })
  }, [])

  return (
    <>  
      {
        loading == true ? <h1>Loading...</h1> : 
        user != null ? <><h1>User Logged in</h1> <button onClick={signout}>SignOut</button></> :
        <>
          <input type="email" placeholder='Email' value={email} onChange={(e)=>{SetEmail(e.target.value)}}/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{SetPassword(e.target.value)}}/>
          <button onClick={printDetails}> Login </button>
          <Link to="/signup">go to signup</Link>
        </>
      }
    </>

  )
}

export default Login