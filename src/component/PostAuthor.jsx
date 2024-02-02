import React from 'react'
import { Link } from 'react-router-dom'
import Avatar from './images/images/avatar1.jpg'

const PostAuthor = () => {
  return (
    <div>
        <Link to='Post/User/hggh' className='post_author' >
            <div className="post_author-avatar">
                <img src={Avatar} alt="" />
            </div>
            <div className="post_author-details">
                <h5>By-Eryen Yager</h5>
                <small>Just Now</small>
            </div>
        </Link>
      
    </div>  
  )
}

export default PostAuthor
