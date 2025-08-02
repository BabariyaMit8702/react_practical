import React from 'react'
import { useState } from 'react'
import '../App.css'

export const Th = () => {
    const [arr, setarr] = useState([9,8,6,5,4,3,2,1])
    const change = () => {
        const sa = [...arr].sort((a,b) => a-b)
        setarr(sa)
    }
    return (
        <>
        <br></br><hr/>
        <div>{arr}</div>
        <button onClick={change} className='cn'>shift</button>
        <hr></hr>
        </>

    )
}
