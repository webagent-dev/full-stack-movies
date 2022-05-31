import React from 'react'
import Main from '../main/Main';
import Slider from '../slider/Slider'
import Type from '../type/Type'
const list = [1,2,3,4,5,6,7,8,9,10]
function Home() {
  return (
    <div>
 <Main type='movie' />
   <Slider type='Contiune Watching' data={list}  />
   <Slider type='Contiune Watching' data={list}  />
   <Slider type='Contiune Watching' data={list}  />
    </div>
  )
}

export default Home