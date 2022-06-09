import React from 'react'
import './main.css'
function Main({type}) {
  return (
    <div className='main__container'>
        <div className="main__wrapper">
            {   type &&
                      <div className="type__container">
                          <h2 className="type__category">{type === 'movies' ?  "Movies" : "Series"}</h2>
                          <select name='genre' id='genre' className='type__select'>
                              <option>Genre</option>
                              <option value="adventure">Adventure</option>
                              <option value="comedy">Comedy</option>
                              <option value="crime">Crime</option>
                              <option value="fantasy">Fantasy</option>
                              <option value="historical">Historical</option>
                              <option value="horror">Horror</option>
                              <option value="romance">Romance</option>
                              <option value="sci-fi">Sci-fi</option>
                              <option value="thriller">Thriller</option>
                              <option value="western">Western</option>
                              <option value="animation">Animation</option>
                              <option value="drama">Drama</option>
                              <option value="documentary">Documentary</option>
                          </select>
            </div>
            }
            <div className="content">
            <img src="/img/main.png" alt="content__image" className="content__image" />
            <h2 className="text__content">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt illum laudantium numquam sit accusamus in. Tempora est similique possimus adipisci in sint. Laboriosam qui quae officia maxime accusantium, perferendis eius.</h2>
            <div className="content__btn">
                <button className="btn"> Play</button>
                <button className="btn"> Info</button>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Main