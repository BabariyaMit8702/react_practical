import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export const Test = () => {
    const [ind, setind] = useState(50)
    let k = useRef(0)
    const clk = () => {
        setind(ind+1);
        k.current = k.current + 1;
        inp.current.style.backgroundColor = 'red'
    }
    const inp = useRef(null)
  return (
    <>
        <center>
            <br></br><br></br>
            THE TEST PAGE {ind}<br></br>{k.current}<br></br>
            <button onClick={clk}>
                click
            </button>
            <hr></hr>
            <button ref={inp}>
                color
            </button>
        </center>
    </>
  )
}
