import React from 'react'
import { Link } from 'react-router-dom'

export const Courses = () => {
    const arr = [
        {id:'mern001',name:'mern-stack',price:3000,duration:'3-months'},
        {id:'mean002',name:'mean-stack',price:2500,duration:'3-months'},
        {id:'api003',name:'DRF',price:4500,duration:'4-months'},
        {id:'dl0004',name:'deep-learning',price:7000,duration:'6-months'}
    ]
  return (
    <>
        <div>
            {arr.map((cur) => 
            <div key={cur.id}>
                <div><Link to={`/courses/${cur.id}/`} >{cur.name}</Link></div>
            </div>
            )}
        </div>
    </>
  )
}
