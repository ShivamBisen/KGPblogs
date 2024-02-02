import React from 'react'
import { Link } from 'react-router-dom'

const ErrorPage = () => {
  return (
    <section>
      <div className="center">
        <Link to='/' className='btn primary'> back to home</Link>
        <h2>Page Not Found</h2>

      </div>
    </section>
  )
}

export default ErrorPage
