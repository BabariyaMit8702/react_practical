import React, { useState } from 'react'
import staty from './created_context'
import { useEffect } from 'react';

export const Pxstat = (props) => {
    let name = 'MIT';
    let caste = 'YADAV';
    const [pxc, setpxc] = useState('london');
    const [arr, setarr] = useState([])
    
    useEffect(() => {
        async function call(q) {
            try{
            let url = `https://pixabay.com/api/?key=51641570-66eef2b40b276fb37a30a87a7&q=${q}&image_type=photo`
            let response = await fetch(url);
            let data = await response.json();
            setarr(data.hits)
        }catch (e) {
            console.error(e);
        }
        }      
        call(pxc)
    }, [pxc])
    

  return (
    <>
        <staty.Provider value={{name,caste,pxc,setpxc,arr,setarr}}>
            {props.children}
        </staty.Provider>
    </>
  )
}
