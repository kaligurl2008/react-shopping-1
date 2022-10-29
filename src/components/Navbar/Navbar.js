import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
        <Link to='/'>Homepage</Link>
        <Link to='/cart'>Cart</Link>
        <Link to='/detail'>Product Detail</Link>
        
    </div>
  )
}

export default Navbar