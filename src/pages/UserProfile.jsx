 import React from 'react'
 import { Link } from 'react-router-dom'

const UserProfile = () => {
  return (
    <section className="profile">
      <div className="container profile_container">
        <Link to={'/myposts/sdfsdf'} className='btn'>My Posts</Link>
      </div>
    </section>
  )
}

export default UserProfile

