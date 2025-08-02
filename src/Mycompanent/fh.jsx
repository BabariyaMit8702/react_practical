import React from 'react'
import { useState } from 'react'
import '../App.css'

export const Fh = () => {
    const [counter, setcounter] = useState(0)

    const incr = () => {
        let new_counter = counter+1;
        setcounter(new_counter)
    }

    const decr = () => {
        let new_counter = counter-1;
        setcounter(new_counter)
    }
    return (
        <>
            <div>
                <h4>counter is = {counter} </h4>
                <div>
                    <button className='inc' onClick={incr}>increment</button>
                    <button className='dic' onClick={decr}>decrement</button> 
                </div>
            </div>
        </>
    )
}
