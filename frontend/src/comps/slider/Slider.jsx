import React, { useRef, useState } from 'react'
import Movies from '../movie/Movies'
import Type from '../type/Type'
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import './slider.css'
function Slider( {type }) {
  const [slidIndex, setSlidIndex] = useState(0)
  const [move, setMove] = useState(false)
  const  listRef = useRef()
  const handleSlide = (direction) => {
    const distance =  listRef.current.getBoundingClientRect().x - 50
    setMove(true)
      if(direction  === 'left' && slidIndex > 0){
        setSlidIndex(slidIndex - 1)  
        listRef.current.style.transform = `translateX(${230 + distance}px)`
      }
      if(direction === 'right' && slidIndex < 5 ){
          setSlidIndex(slidIndex + 1)
               listRef.current.style.transform = `translateX(${-230 + distance}px)`
      }
  }
  return (
    <div className='slider__container'>
         <Type type={type} />
        <div className="other__container">
          {
            move &&
          <div className="arrow__container left">
         <FaChevronLeft className="arrow" onClick={() => handleSlide('left')} />
          </div>
}
        <div className="slider__wrapper" ref={listRef}>
                <Movies index={0} />
                <Movies index={1} />
                <Movies index={2} />
                <Movies index={3} />
                <Movies index={4}  />
                <Movies index={5} />
                <Movies index={6} />
                <Movies index={7} />
                <Movies index={8} />
                <Movies index={9} />
        </div>
        <div className="arrow__container right">
         <FaChevronRight  className="arrow " onClick={() => handleSlide('right')} />
        </div>
      </div>
    </div>
  )
}

export default Slider