import React from 'react'
import { Link } from 'react-router-dom'
import PostAuthor from './PostAuthor'

const PostItem = ({postID,thumbnail,category,title,description,authorID}) => {
    const shortDescription = description.length>145? description.substring(0, 100) + '...': description;
    const shortTitle=title.length>30? title.substring(0,30)+'...':title;

  return (
   

    <article className='post'>
        <div className="post_thumbnail">
            <img src={thumbnail} alt={title} />
        </div>
        <div className="post_content">
            <Link to={'Post/${postID}'}>
                <h3>{shortTitle}</h3>
            </Link>
            <p>{shortDescription}</p>
        </div>
        
        <div className="post_footer">
            <PostAuthor/>

            <Link to={"Post/Catogry/${category}"} className='btn category'>
                <p>{category}</p>
            </Link>
        </div>  

    </article>
  )
}

export default PostItem
