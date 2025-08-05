import React from 'react'
import { Piixanavbar } from './piixanav'
import { useContext } from 'react'
import staty from './created_context'

export const Pixahome = () => {
    let pd = useContext(staty);
    return (
        <>
            <hr></hr>
            <Piixanavbar />
            <br /><br /><br />
            <center>
                <div id='pxcont'>
                {pd.arr.length == 0 ? 
                <p>WE FAILED TO FIND {pd.pxc}'s IMAGES FROM OUR DATA</p>
                :
                (pd.arr.map((i) => <span key={i.id} >
                        <a href={i.webformatURL}>
                            <img id='imgp' src={i.webformatURL} alt="NOT FOUND" width={'200px'}/>
                            </a>
                </span>))
                }
                </div>
            </center>
        </>
    )
}
