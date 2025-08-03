import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Fetch = () => {
    const [dta, setdta] = useState(0);
    const [sr_no, setsr_no] = useState(1)
    useEffect(() => {
      async function called (k) {
        try{
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts/${k}`);
        if(!response.ok){
            throw new Error('network issues');
        }
        let data = await response.json();
        setdta(data)
    } catch (err){
        setdta(err.message);
    }
      }
      document.title = 'API OF id No. ' + sr_no
      called(sr_no);
    }, [sr_no])
    
    function inc () {
      setsr_no(sr_no+1);
    }
    function dec () {
      setsr_no(sr_no-1);
    }
  return (
    <>
    <div>
      <h3>{sr_no}</h3>
      <button className='btn btn-primary' onMouseOver={inc}>+</button>&nbsp;&nbsp;
      <button className='btn btn-danger' onMouseOver={sr_no>1 && dec}>-</button>
      <hr></hr>
    </div>
        <div>
            {dta===0? <h4>Loading</h4> :
                <>
             <div> <h3>Title:</h3>{dta.title} </div>
            <div> <h3>Slogun:</h3>{dta.body} </div>
            </>
            }
        </div>
    </>
  )
}
