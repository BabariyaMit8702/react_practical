import React from 'react'
import { useState } from 'react'
import '../App.css'

export const Ccs = () => {
    const [isred, setisred] = useState(true)
    let prlcss = {
        width:'100px',
        height:'100px',
    }
    document.body.style.backgroundColor = isred? 'blue' : 'red';
    let tf = () => {
        setisred(!isred);
    }
  return (<><button onClick={tf} className='cn'>
    <div className={isred? 'red' : 'blue'}
        style={prlcss}
    >PRL</div></button>
    </>
  )
}
