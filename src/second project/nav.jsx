import React from 'react'

export const Nav = ({func}) => {
  return (
    <>
    <center>
        <div>
          <button onClick={() => func('Indian')} type="button" className="btn btn-outline-primary">Indian</button>
          <button onClick={() => func('Canadian')} type="button" className="btn btn-outline-secondary">Canadian</button>
          <button onClick={() => func('American')} type="button" className="btn btn-outline-success">American</button>
          <button onClick={() => func('Thai')} type="button" className="btn btn-outline-danger">Thai</button>
          <button onClick={() => func('British')} type="button" className="btn btn-outline-warning">British</button>
          <button onClick={() => func('Russian')} type="button" className="btn btn-outline-info">Russian</button>

        </div>
    </center>
    </>
  )
}
