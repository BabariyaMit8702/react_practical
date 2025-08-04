import React from 'react'
import { useParams, useLocation ,useNavigate} from 'react-router-dom'

export const Course_details = () => {
  let { c_id } = useParams();
  let l = useLocation()
  let navigate = useNavigate()
  const arr = [
    { id: 'mern001', name: 'mern-stack', price: 3000, duration: '3-months' },
    { id: 'mean002', name: 'mean-stack', price: 2500, duration: '3-months' },
    { id: 'api003', name: 'DRF', price: 4500, duration: '4-months' },
    { id: 'dl0004', name: 'deep-learning', price: 7000, duration: '6-months' }
  ]

  let f_a = arr.filter(cr => cr.id == c_id);

  const rd = () => {
      navigate('/courses/')
  }
const ro = () => {
  navigate(-1)
}
  return (
    <>
      <div>
        {f_a.map((f) => <div key={f.id} >
          <div>id :- {f.id} </div>
          <div>course name :- {f.name}</div>
          {l.pathname != '/courses/api003/' &&
            <>
              <div>price :- {f.price} </div>
              <div>dur. :- {f.duration} </div>
            </>}
        </div>)}
              
      </div>
      <button onClick={rd}>go home</button>
              <button onClick={ro}>boback</button>
    </>
  )
}
