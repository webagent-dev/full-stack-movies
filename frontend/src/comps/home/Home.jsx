import React, {useState,useEffect } from 'react'
import Main from '../main/Main';
import Slider from '../slider/Slider'
import axios from 'axios'
// import Type from '../type/Type'
const list = [1,2,3,4,5,6,7,8,9,10]
function Home({type}){
  const [lists, setLists] = useState([])
  const [genre, setGenre] = useState(null)
  useEffect(() => {
    const getRandomData = async () => {
      try{
        const res = await axios.get(`http://localhost:8080/api/v1/get_list${type ? "?type=" + type : ''}${genre ? "genre=" + genre : ''}`, {

          headers: {
                token: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyOTgzNDY3M2JjMjEyNzc0ZGIxYmIwOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY1NDgyODkwMiwiZXhwIjoxNjU1MjYwOTAyfQ.Y-8eDfx5lVkNVqw9bocxi9e1hAY4fiKQ3gc-JCPbTl4"
              }
            })
        // console.log(res)
        setLists(res.data)
      } catch (err) {
        console.log(err)
      }
    }
    getRandomData()
  },[genre, type])
  return (
    <div>
 <Main type={type} />
      {
        lists.map((item) => <Slider types={item.title} data={item} key={item._id} />)
      }
   {/* <Slider type='Contiune Watching' data={list}  /> */}
   {/* <Slider type='Contiune Watching' data={list}  /> */}
    </div>
  )
}

export default Home