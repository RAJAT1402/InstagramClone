import React, {useState} from 'react'
import { auth } from '../firebase'
import { signOut, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useEffect } from 'react';
import { Navigate, Link } from 'react-router-dom'
// import { Carousel } from 'react-responsive-carousel';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import bg1 from '../assets/bg1.png'
import bg2 from '../assets/bg2.png'
import bg3 from '../assets/bg3.png'
import insta from '../assets/insta.png'
import '../Style/login.css'

function Login() {

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [user, setUser] = useState(null);
  let [loading, setLoading] = useState(false);
  let [error, setError] = useState("");

  let login = async () =>{
    // console.log(email , "  " , password);
   try{
    setLoading(true);
    let userCred = await signInWithEmailAndPassword(auth, email, password);
    // console.log(userCred.user); 
    setUser(userCred.user);
   }catch(err){
    setError(err.message)
    // console.log(error)
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

  // useEffect(() => {
  //   onAuthStateChanged(auth, (user) => {
  //     if(user){
  //       // User is logged in
  //       setUser(user);
  //     }else{
  //       // User is logged out
  //       setUser(null);
  //     }
  //   })
  // }, [])

  return (
    // <>  
    //   {
    //     loading == true ? <h1>Loading...</h1> : 
    //     <>
    //       <input type="email" placeholder='Email' value={email} onChange={(e)=>{SetEmail(e.target.value)}}/>
    //       <input type="password" placeholder='Password' value={password} onChange={(e)=>{SetPassword(e.target.value)}}/>
    //       <button onClick={printDetails}> Login </button>
    //       <Link to="/signup">go to signup</Link>
    //     </>
    //   }
    // </>
    <div className="login-container">
      <div className="phonebg">
        <div className="photos">

        </div>
      </div>
      <div>
        <div className="login-card">
        <img src={insta} alt="" className='insta-img'/>
          <TextField size='small' margin='dense' id="outlined-basic" fullWidth 
                    label="Email" variant="outlined" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        
          <TextField size='small' margin='dense' id="outlined-basic" fullWidth 
                label="Password" type='password' variant="outlined" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          {
            error != "" && <div style={{color: 'red'}}>{error}</div>
          }
          <Button variant="contained" fullWidth component="span" style={{marginTop:'1rem'}} onClick={login} disabled={loading}>
                Login
          </Button>
          <div style={{color:'blue', marginTop:'0.5rem'}}>Forgot Password ?</div>
        </div>
        <div className='signup-card'>
            Don't Have a Account ? <Link to="/signup">Signup</Link>
        </div>
      </div>
    </div>
  )
}

export default Login