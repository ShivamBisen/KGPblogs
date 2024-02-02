import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../component/PostItem'

const CatogryPage = () => {
  const [post,setpost] = useState(DUMMY_POSTS )
  return (
    <section className="Catogry-Post">
      <div className="container post_container">
          {
            post.map(({id, thumbnail, category, title, description, authorID })=>
            <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={description} authorID={authorID} />
            )
          }
      </div>
    </section>
  )
}

export default CatogryPage
