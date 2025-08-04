import React from 'react'
import { useContext } from 'react'
import The_context from './creating'

export const Demo = () => {
        let obj = useContext(The_context)
           let pl = () => {
            obj.setmoney(obj.money+10)
           }
  return (
    <>
        <h1>
            {obj.money}<br></br>
            <button onClick={pl} >+</button>
        </h1>
    </>
  )
}
