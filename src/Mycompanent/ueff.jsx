import React, { useLayoutEffect } from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Ueff = () => {
    const [count, setcount] = useState(0);
    useEffect(() => {
        document.title = count
    }, [count])
    const inc = () => {
        setcount(count+1);
    }
    const dec = () => {
        setcount(count-1);
    }
  return (
    <>
        <h2>{count}</h2><br></br>
        <button onClick={inc}>increment</button>&nbsp;&nbsp;
        <button onClick={dec}>decrement</button>
    </>
  )
}

export const Clef = () => {
    useEffect(() => {
      alert('welcome to 1 page');    
      return () => {
        alert('welcome to end point');
      }
    }, [])
    
  return (
    <>
        <h4>PRL</h4>
    </>
  )
}
