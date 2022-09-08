import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import {auth, db} from '../firebase';
import { doc, setDoc } from "firebase/firestore"

function Signup() {
  let [email, SetEmail] = useState("");
  let [password, SetPassword] = useState("");
  let [name, setName] = useState("");
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  async function processSignup(){
    try{
      setLoading(true);
      let userCred = await createUserWithEmailAndPassword(auth, email, password);
      
      const docRef = await setDoc(doc(db, "users", userCred.user.uid),{
        email,
        name,
        reelsIds: [],
        profileImgUrl: "",
        userId: userCred.user.uid
     })

     }catch(err){
      setError(err.message)
      setTimeout(()=>{
        setError("")
      }, 2000)
     }
     setLoading(false);
  }

  return (
        <>
          <input type="email" placeholder='Email' value={email} onChange={(e)=>{SetEmail(e.target.value)}}/>
          <input type="password" placeholder='Password' value={password} onChange={(e)=>{SetPassword(e.target.value)}}/>
          <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
          <button onClick={processSignup}> Signup </button>
        </>
  )
}

export default Signup