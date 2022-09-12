import React, { useState } from 'react'
import '../Style/feed.css'
import { auth } from '../firebase'
import { signOut } from "firebase/auth";
import insta from '../assets/insta.png'
import Movie from '@mui/icons-material/MovieCreation';
import { Link } from 'react-router-dom';

function Feed() {
  let [menu, setMenu] = useState(false);

  const openMenu = () =>{
    let menuItem = document.querySelector(".menu");
    if(!menu){
      menuItem.style.display = "block"
    }else{
      menuItem.style.display = "none"
    }

    setMenu(!menu);
  }

  let SignOut = async () =>{
    await signOut(auth);
    // setUser(null)
  }

  return (
    <>
      <div className="header">
        <img src={insta} alt="" className='instaImage'/>
        <img src={insta} alt="" className='profileImage' onClick={openMenu}/>
        <div className="menu">
          <div>
            <Link to="/profile"> Profile </Link>
          </div>
          <button onClick={SignOut}>SignOut</button>
        </div>
      </div>
      <div className="main_container">
        <div className="upload_container">
          <Movie />
          <div className="upload_text">Upload </div>
        </div>
        <div className="reels_container">Reels</div>
      </div>
    </>
  )
}

export default Feed