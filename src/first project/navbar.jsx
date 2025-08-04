import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css'

export const Navbar = ({func,alf}) => {
    const csn = {
        display:'flex',
        gap:'25px',
        justifyContent:'center',
        margin:'15px',    
    }
    return (
        <>
             <div style={csn}>
        <button onClick={alf} type="button" className="mm btn btn-light">All</button>
        <button onClick={() => func('Action')} type="button" className="mm btn btn-primary">Action</button>
        <button onClick={() => func('Thriller')} type="button" className="mm btn btn-secondary">Thrillor</button>
        <button onClick={() => func('Drama')} type="button" className="mm btn btn-success">Drama</button>
        <button onClick={() => func('Horror')} type="button" className="mm btn btn-danger">Horror</button>
        <button onClick={() => func('Animation')} type="button" className="mm btn btn-warning">Animation</button>
        <button onClick={() => func('Sci-Fi')} type="button" className="btn mm btn-info">Sci-Fi</button>
      </div>
        </>
    )
}
