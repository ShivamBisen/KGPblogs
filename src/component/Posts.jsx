import React, { useState } from 'react'
import PostItem from './PostItem'
import { DUMMY_POSTS } from '../data'


// const DUMMY_POSTS = [
//     {
//         id: 1,
//         thumbnail: Thumbnail1,
//         category: 'education',
//         title: 'This is the title of very firts post',
//         description: 'Lorem ipsum, dolor sit amet consectetur a',
//         authorID: 3
//     },
//     {
//         id: 2,
//         thumbnail: Thumbnail2,
//         category: 'science',
//         title: 'This is the title of very second post',
//         description: 'Lorem ipsum, dolor sit amet consectetur a',
//         authorID: 4
//     },
//     {
//         id: 3,
//         thumbnail: Thumbnail3,
//         category: 'weather',
//         title: 'This is the title of very third post',
//         description: 'Lorem ipsum, dolor sit amet consectetur a',
//         authorID: 1
//     },
//     {
//         id: 4,
//         thumbnail: Thumbnail4,
//         category: 'farming',
//         title: 'This is the title of very forth post',
//         description: 'Lorem ipsum, dolor sit amet consectetur a',
//         authorID: 2
//     }
// ]

const Posts = () => {
    const [posts, setPosts] = useState(DUMMY_POSTS)
    return (
        <section className='posts'>
            <div className="container post_container">
                {
                    posts.map(({ id, thumbnail, category, title, description, authorID }) =>
                        <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} />)
                }
            </div>

        </section>
    )
}

export default Posts
