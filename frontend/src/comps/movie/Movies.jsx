import React, { useState, useEffect } from 'react'
import './movie.css'
import { IoMdPlay, IoIosAdd, } from 'react-icons/io'
import { GoThumbsup, GoThumbsdown } from 'react-icons/go'
import { Link } from 'react-router-dom'
import axios from 'axios'
function Movies({index, id}) {
  const [listMovies, setListMovies] = useState([])
  const [isHover, setIsHover] = useState()

  useEffect(() => {
   const  getSliderList = async () => {
     const res = await axios.get(`http://localhost:8080/api/v1/get_movies/${id}`,{
       headers: {
         token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTgzNDY3M2JjMjEyNzc0ZGIxYmIwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDgyODkwMiwiZXhwIjoxNjU1MjYwOTAyfQ.Y-8eDfx5lVkNVqw9bocxi9e1hAY4fiKQ3gc-JCPbTl4"
       }
     })
     console.log(res.data)
     setListMovies(res.data)
    }
    getSliderList()
  },[id])
  return (
    <Link to={{pathname: '/watch',movie:listMovies}}>
    <div className='movies__container' 
    onMouseEnter={() => setIsHover(true)} 
    onMouseLeave={() => setIsHover(false)}
    style={{left: isHover && index * 350 - 50 + index * 2.5}}
    >
      {
        !isHover ?
        <img src={listMovies.img} alt='movie__pic' className='movie__image'/>
  :
  <>
        <video src={listMovies.video} muted  autoPlay={true} loop  className='view'/>
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
                  <h3 className='time'>{}</h3>
                  <h3 className='age'><span className='range'>{`+${listMovies.limit}` }</span>{listMovies.year }</h3>
            </div>
          <div className="movie__text">
                  <p>{ listMovies.desc}</p>
          </div>
                <h2 className='action'>{ listMovies.genre}</h2>
        </div>
        </div>
        </>
        }
      </div>
      </Link>
  )
}

export default Movies