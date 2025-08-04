import React from 'react'
import { Link } from 'react-router-dom'

export const Main_home = () => {
  return (
    <>
        <center>
            <h4>WEL COME TO OUR WEB PAGE</h4>
            <button className='btn btn-danger'><Link to={'movies/'} style={{textDecoration:'none',color:'white'}}>movies</Link></button>
            <button className='btn btn-success'><Link to={'foods/'} style={{textDecoration:'none',color:'white'}} >foods</Link></button>
        </center>
    </>
  )
}
