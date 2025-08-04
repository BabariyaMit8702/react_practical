import React from 'react'
import { useState } from 'react'
import The_context from './creating'

export const Stat = (props) => {
        const [money, setmoney] = useState(0)
  return (
    <>
       <The_context.Provider value={{money,setmoney}}>
        {props.children}
       </The_context.Provider>
    </>
  )
}
