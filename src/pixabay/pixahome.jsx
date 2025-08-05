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
                <p>name = {pd.name} </p>
                <p>caste = {pd.caste} </p>
                <hr></hr>
                {pd.arr.map((i) => <div key={i.id}>
                    <div>
                        <img src={i.webformatURL} alt="NOT FOUND" />
                    </div>
                </div>)}
            </center>
        </>
    )
}
