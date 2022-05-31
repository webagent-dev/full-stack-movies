import React from 'react'
import { IoMdArrowBack, } from 'react-icons/io'
import { Link } from 'react-router-dom'
function Watch() {
  return (
    <div className='watch__container'>
       <Link to='/'>
      <div className="back__btn">
          <IoMdArrowBack size='25px'  />
          <span classNam='home'>Home</span>
        </div>
          </Link>
            <video src="https://player.vimeo.com/external/371433846.sd.mp4?s=236da2f3c0fd273d2c6d9a064f3ae35579b2bbdf&profile_id=139&oauth2_token_id=57447761" className='show__video' autoPlay={true} progress controls/>
        </div>
  )
}

export default Watch