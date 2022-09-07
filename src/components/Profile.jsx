import React, {useContext} from 'react'
import './profile.css'
import { AuthContext } from '../context/AuthContext'

function Profile() {
  let contextObj = useContext(AuthContext);
  console.log(contextObj)
  return (
    <>
      {
        contextObj == null ? <div>Need Login</div> : <div>hello</div>
      }
      {/* <div className="header"></div>
      <div className="main">
        <div className="pimg-container">
          <img src="" alt="" className='pimg'/>
        </div>
        <div className="details">
          <div className="content">Name</div>
          <div className="content">No of posts: <span className='bold'>Posts</span></div>
          <div className="content">Email: <span className='bold'>Email</span></div>
        </div>
      </div> */}
    </>
  )
}

export default Profile