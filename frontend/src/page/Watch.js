import React from 'react'
import { IoMdArrowBack, } from 'react-icons/io'
import { Link, useLocation } from 'react-router-dom'
function Watch() {
  const location = useLocation()
  console.log(location)
  const movies = location.movie
  return (
    <div className='watch__container'>
       <Link to='/'>
      <div className="back__btn">
          <IoMdArrowBack size='25px'  />
          <span classNam='home'>Home</span>
        </div>
          </Link>
            <video src={'movies.video'} className='show__video' autoPlay={true} progress controls/>
        </div>
  )
}

export default Watch