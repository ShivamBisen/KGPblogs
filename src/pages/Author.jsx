import React, { useState } from 'react'
import {Link} from 'react-router-dom'


import Author1 from '../component/images/images/avatar1.jpg';
import Author2 from '../component/images/images/avatar2.jpg';
import Author3 from '../component/images/images/avatar3.jpg';
import Author4 from '../component/images/images/avatar4.jpg';
import Author5 from '../component/images/images/avatar5.jpg';



const AuthorData = [
  { id: '1', avatar: Author1, name: 'Arnold kinzy', post: '2' },
  { id: '2', avatar: Author2, name: 'Ayush Kumar', post: '4' },
  { id: '3', avatar: Author3, name: 'Umday kom', post: '6' },
  { id: '4', avatar: Author4, name: 'Denmarkill', post: '1' },
  { id: '5', avatar: Author5, name: 'Itachi Uchiha', post: '2' },
]

const Author = () => {

  const [author, setauthor] = useState(AuthorData)

  return (
    <section className="authors">
      <div className="container author-container">
        {
          author.map(({ id, avatar, name, post }) => {
            return <Link key={id} to={`/posts/user/${id}`} className='author'>
                <div className="author_avatar">
                  <img src={avatar} alt="`Image of ${name}" />
                </div>
                <div className="author_info">
                  <h4>{name}</h4>
                  <p>posts: {post}</p>

                </div>


            </Link>
          })
        }
      </div>
    </section>
  )
}

export default Author
