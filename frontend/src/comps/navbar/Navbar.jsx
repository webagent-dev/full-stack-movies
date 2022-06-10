import React, { useState } from 'react'
import './navbar.css'
import Avatar from 'react-avatar'
import { FaSearch, FaBell, FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
function Navbar ()  {
    const [color, setColor ] = useState(false)
    window.onscroll = () => {
        setColor(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }
  return (
    <div className={ color ? "navbar__container colored" : 'navbar__container'}>
        <div className="wrapper">
            <div className="first__part">
                  <Link to='/'>
                      <img className="logo" src='/img/main.png' alt='mark-up-pic' />
                  </Link> 
<Link to='/' className='link'>
                      <span className="links">Homepage</span>
</Link>
<Link to='/series'  className='link'>
                      <span className="links">Series</span>
</Link>
<Link to='/movies'  className='link'>
                      <span className="links">Movies</span>
</Link>
            <span className="links">New and Popular</span>
            <span className="links">My List</span>
            </div>
            <div className="second__part">
            <FaSearch />
            <div className="text">
                KID
            </div>
            <FaBell />
    <Avatar  name='wk' round='10px' size='50px'/>
    <FaCaretDown />
            <div className="option">
                <div className="setting">Settings</div>
                <div className="setting">Logout</div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar