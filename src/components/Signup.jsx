import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react'
import { useState } from 'react';
import {auth, db} from '../firebase';
import { doc, setDoc } from "firebase/firestore"
import { Link } from 'react-router-dom'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import insta from '../assets/insta.png'
import '../Style/signup.css'

function Signup() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
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
        // <>
        //   <input type="email" placeholder='Email' value={email} onChange={(e)=>{SetEmail(e.target.value)}}/>
        //   <input type="password" placeholder='Password' value={password} onChange={(e)=>{SetPassword(e.target.value)}}/>
        //   <input type="text" placeholder='Name' value={name} onChange={(e)=>{setName(e.target.value)}} />
        //   <button onClick={processSignup}> Signup </button>
        // </>
        <div className="signup-container">
      <div className="signup-card">
        <img src={insta} alt="" className='insta-img'/>
        <TextField
          size="small"
          margin="dense"
          id="outlined-basic"
          fullWidth
          label="Email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          size="small"
          margin="dense"
          id="outlined-basic"
          fullWidth
          label="Password"
          type="password"
          variant="outlined"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <TextField
          size="small"
          margin="dense"
          id="outlined-basic"
          fullWidth
          label="FullName"
          variant="outlined"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Button
          variant="outlined"
          fullWidth
          component="label"
          style={{ marginTop: "1rem" }}
        >
          {/* <input
            type="file"
            accept="image/*"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          /> */}
          Upload Profile Image
        </Button>

        <Button
          variant="contained"
          fullWidth
          component="span"
          style={{ marginTop: "1rem" }}
          onClick={processSignup}
          disabled={loading}
        >
          Sign Up
        </Button>
      </div>
      <div className="login-card">
        Already Have an Account ?{" "}
        <Link to="/login">
          <span style={{ color: "blue" }}>LOGIN</span>
        </Link>
      </div>
    </div>
  )
}

export default Signup