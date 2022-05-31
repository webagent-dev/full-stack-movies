import React, { useState } from 'react'
import './movie.css'
import { IoMdPlay, IoIosAdd, } from 'react-icons/io'
import { GoThumbsup, GoThumbsdown } from 'react-icons/go'
import { Link } from 'react-router-dom'
function Movies({index}) {
  const [isHover, setIsHover] = useState()
  return (
    <div className='movies__container' 
    onMouseEnter={() => setIsHover(true)} 
    onMouseLeave={() => setIsHover(false)}
    style={{left: isHover && index * 350 - 50 + index * 2.5}}
    >
      {
        !isHover ?
        <img src='/img/bg.jpg' alt='movie__pic' className='movie__image'/>
  :
  <>
        <video src='https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761' muted  autoPlay={true} loop  className='view'/>
        <div className="movie__content">
              <div className="movie__icon">
                <Link to='/watch' className="icon__wrapper">
                  <div ><IoMdPlay size='18px' /></div>
                  </Link>
            <div className="icon__wrapper">  <IoIosAdd   size='18px' /></div>
            <div className="icon__wrapper"> <GoThumbsup  size='18px ' /></div>
            <div className="icon__wrapper">  <GoThumbsdown  size='18px' /></div>
          </div>
          <div className="other">
            <div className="wrap">
                <h3 className='time'>1 hour 14 mins</h3>
            <h3 className='age'><span className='range'>+16</span>2020</h3>
            </div>
          <div className="movie__text">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur culpa molestiae labore vitae,  sequi.</p>
          </div>
          <h2 className='action'>ACTION</h2>
        </div>
        </div>
        </>
        }
    </div>
  )
}

export default Movies