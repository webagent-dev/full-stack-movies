import React from 'react'
import Home from '../comps/home/Home'
import Navbar from '../comps/navbar/Navbar'
function Container({type}) {
  return (
    <div className='container__container'>
      <Navbar />
      <Home type={type} />
    </div>
  )
}

export default Container