import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='Footer'>
      <ul className="Footer_categories">
        <li><Link to="Post/Catogry/Agriculture">Agriculture</Link></li>
        <li><Link to="Post/Catogry/Business">Business</Link></li>
        <li><Link to="Post/Catogry/Education">Education</Link></li>
        <li><Link to="Post/Catogry/Entertainment">Entertainment</Link></li>
        <li><Link to="Post/Catogry/Art">Art</Link></li>
        <li><Link to="Post/Catogry/Investment">Investment</Link></li>
        <li><Link to="Post/Catogry/Uncategorized">Uncategorized</Link></li>
        <li><Link to="Post/Catogry/Weather">Weather</Link></li>
      </ul>
      <div className="Footer_copyright">
        <small>All Right Reserve &copy; Copyright, ERA Esports</small>
      </div>
    </footer>
  )
}

export default Footer
