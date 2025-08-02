import React from 'react'
import { movie_list } from './info'
import '../App.css'
import { Navbar } from './navbar'
import { useState } from 'react'

export const Home = () => {
  const [m_arr, setm_arr] = useState(movie_list)
  const cs = {
    height: '250px',
    width: 'auto',
    border: '1px yellow double',
    margin: '5px',
  }
  const kw = (cat) => {
    let n_arr = movie_list.filter(mov => mov.category === cat)
    setm_arr(n_arr)
  }
  const kal = () => {
    setm_arr(movie_list)
  }
  return (
    <>
      <Navbar func={kw} alf={kal}/>
      <br></br><br></br>
      <div className='container'>
        <div className='ao'>
          {m_arr.map((moves) =>
          <a href={moves.backdrop_path} alt='loading'>
            <div className='fdv'>
           
              <img style={cs} src={moves.poster_path} alt="error" />
              <div className='sdv'>{moves.title}</div>
              <div className='sdv'>{moves.release_date}</div>
            </div></a>
          )}
        </div>
      </div>
    </>
  )
}
