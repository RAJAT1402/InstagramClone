import React from 'react'
import './feed.css'
import insta from '../assets/insta.png'
import Movie from '@mui/icons-material/MovieCreation';

function Feed() {
  return (
    <>
      <div className="header">
        <img src={insta} alt="" className='instaImage'/>
        <img src={insta} alt="" className='profileImage'/>
      </div>
      <div className="main_container">
        <div className="upload_container">
          <Movie />
          <div className="upload_text">Upload Movie</div>
        </div>
        <div className="reels_container">Reels</div>
      </div>
    </>
  )
}

export default Feed