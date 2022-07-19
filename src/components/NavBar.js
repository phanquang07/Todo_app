import React from 'react'
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <div className='container'>
      <nav className='navbar'>
        <h1>
          <Link to='/' className='logo'>
            <i className="fa-solid fa-house"></i>
            <span>Todo App</span>
          </Link>
        </h1>
      </nav>
    </div>
  )
}

export default NavBar