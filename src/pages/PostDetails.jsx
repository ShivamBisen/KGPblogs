import React from 'react'
import PostAuthore from '../component/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../component/images/images/blog1.jpg'

const PostDetails = () => {
  return (
    <section className="post-details">
      <div className="container post-details_container">
        <div className="post-details_headers">
          <PostAuthore/>
          <div className="post-detail_button">
            <Link to={'/posts/:id/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'/post/:id/delete'} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <div className="post-detail_content">
          <h1>This is Post Heading</h1>
          <div className="post-detail_thumbnail">
            <img src={Thumbnail} alt="" />
          </div>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit iusto ut ipsum voluptatem culpa vitae delectus suscipit ab sequi reiciendis, possimus nam, laboriosam earum a quod vero consequuntur pariatur itaque quidem facilis molestiae! Velit numquam similique incidunt nesciunt non? Deleniti error ullam illo? Nobis facilis, reprehenderit adipisci consectetur libero vero corporis dolorum facere maiores sequi labore. Quibusdam officiis maxime voluptate minus temporibus consectetur nisi vero nobis repudiandae architecto dolores praesentium, dolorum deserunt! Veritatis modi at, adipisci odit cum perferendis assumenda saepe ullam dicta inventore ab deserunt nostrum labore praesentium maiores quas deleniti magni architecto earum quidem molestias, officiis tenetur. Consectetur ducimus, exercitationem fugiat reiciendis corrupti eius minus et nostrum id, consequatur ad perspiciatis. Eaque, hic necessitatibus. Fugit enim reiciendis quod omnis minus voluptate, quis maiores consequatur autem ab, nulla perferendis suscipit ullam placeat deleniti corrupti inventore non ut amet? A voluptate ex veniam impedit ipsa id deleniti, quo porro tenetur sapiente molestiae nisi odio dicta recusandae aliquid veritatis saepe enim dolorem adipisci voluptas! Quod ut nulla dolor laudantium aut quasi consectetur? Est at delectus expedita corrupti eligendi amet accusamus molestias numquam, culpa non porro itaque similique architecto iure iste eius necessitatibus doloribus deleniti aliquid dolores sint soluta quam? In iure vero incidunt expedita quos suscipit non totam perspiciatis officiis necessitatibus dolorum placeat ex enim id accusantium porro impedit, perferendis magnam harum consequatur aliquam quasi laboriosam error. Sit quas vitae commodi architecto excepturi consequatur sed voluptate impedit doloribus? Et ipsa aspernatur eveniet nostrum optio adipisci sed, earum at ullam vero repellendus, architecto inventore nemo, rem quae suscipit quas! Consequatur incidunt sed repudiandae tenetur facilis! Blanditiis dolore pariatur unde modi quibusdam odit ab! Blanditiis quia ab similique excepturi aut perferendis modi dolores, ratione quam architecto incidunt soluta eligendi natus, reiciendis voluptas autem sequi dolorem vitae debitis. Voluptatem cum asperiores et maiores quae.</p>
          
        </div>

      </div>
    </section>
  )
}

export default PostDetails
