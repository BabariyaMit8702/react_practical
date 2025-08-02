import React from 'react'
import { useState } from 'react'
import '../App.css'

export const Sh = () => {
    const [obj, setobj] = useState({name:'prl',address:'talangana',ph_no:7861035305})
    
    let change = () => {
        setobj({...obj,
            name:'meet',
            ph_no: 9316606017
        })
    }
  return (
    <>
    <br></br><hr></hr>
        <div>Name = {obj.name} </div>
        <div>address = {obj.address} </div>
        <div>ph_no = {obj.ph_no} </div>
        <button onClick={change} className='cn'>change!</button>
        
    </>
  )
}
