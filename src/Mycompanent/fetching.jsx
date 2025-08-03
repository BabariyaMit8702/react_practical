import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const Fetch = () => {
    const [dta, setdta] = useState(0);

    useEffect(() => {
      async function called () {
        try{
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/9');
        if(!response.ok){
            throw new Error('network issues');
        }
        let data = await response.json();
        setdta(data)
    } catch (err){
        setdta(err.message);
    }
      }
      called();
    }, [])
    
    
  return (
    <>
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
