import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '../component/images/images/avatar1.jpg'
import { FaCheck } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

const UserProfile = () => {

  const [avatar, setavatar] = useState(Avatar)
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [currentPassword,setCurrentPassword] = useState('')
  const [newPassword,setNewPassword] = useState('')
  const [confirmPassword,setConfirmPassword] = useState('')

  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={'/myposts/sdfsdf'} className='btn'>My Posts</Link>

        <div className="profile_details">
          <div className="avatar_wrapper">
            <div className="profile_avatar">
              <img src={avatar} alt="" />
            </div>
            <form action="" className='avatar_form'>
              <input type="file" name='avatar' id='avatar' onChange={e => setavatar(e.target.files[0])} accept='png,jpg,jpeg' />
              <label htmlFor="avatar"><FaEdit /> </label>
            </form>
            <button className='profile_avatar-btn'  ><FaCheck /></button>

          </div>
          <h1>Shivam Bisen</h1>

          <form action="" className='form profile_form'>
             
             <input type="text" placeholder='Full Name' value={name} onChange={e => setName(e.target.value)}/>
             <input type="text" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)}/>
             <input type="text" placeholder='Current Password' value={currentPassword} onChange={e => setCurrentPassword(e.target.value)}/>
             <input type="text" placeholder='New Password' value={newPassword} onChange={e => setNewPassword(e.target.value)}/>
             <input type="text" placeholder='Confirm Password' value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
          </form>
          <button className='btn primary'>Update Details</button>
        </div>
      </div>
    </section>
  )
}

export default UserProfile

