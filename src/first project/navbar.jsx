import React from 'react'

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
        <button onClick={alf} type="button" class="btn btn-light">All</button>
        <button onClick={() => func('Action')} type="button" class="btn btn-primary">Action</button>
        <button onClick={() => func('Thriller')} type="button" class="btn btn-secondary">Thrillor</button>
        <button onClick={() => func('Drama')} type="button" class="btn btn-success">Drama</button>
        <button onClick={() => func('Horror')} type="button" class="btn btn-danger">Horror</button>
        <button onClick={() => kw('Animation')} type="button" class="btn btn-warning">Animation</button>
        <button onClick={() => func('Sci-Fi')} type="button" class="btn btn-info">Sci-Fi</button>
      </div>
        </>
    )
}
