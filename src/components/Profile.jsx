import React, {useContext, useEffect} from 'react'
import '../Style/profile.css'
import { AuthContext } from '../context/AuthContext'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase';
import { useState } from 'react';

function Profile() {
  let contextObj = useContext(AuthContext);
  let cUser = contextObj.cUser;
  let [user, setUser] = useState();
  let [loading, setLoading] = useState(true);

  useEffect(function fun(){
    (async function (){
      const docRef = doc(db, "users", cUser.uid);
      const userObj = await getDoc(docRef);
      setUser(userObj.data());
      setLoading(false);
    })()
  },[]);
  return (
    <>
      {
        loading == true ? <div>Loading...</div>
        : <>
          <div className="header"></div>
          <div className="main">
            <div className="pimg-container">
              <img src="" alt="" className='pimg'/>
            </div>
            <div className="details">
              <div className="content">{user.name}</div>
              <div className="content">No of posts: <span className='bold'>{user.reelsIds.length}</span></div>
              <div className="content">Email: <span className='bold'>{user.email}</span></div>
            </div>
          </div>
        </>
      }
    </>
  )
}

export default Profile