import React from 'react'
import Home from '../comps/home/Home'
import Navbar from '../comps/navbar/Navbar'
function Container() {
  return (
    <div className='container__container'>
      <Navbar />
      <Home />
    </div>
  )
}

export default Container