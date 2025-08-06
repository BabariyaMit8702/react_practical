import React from 'react'
import { useState } from 'react'
import '../App.css'
import { useContext } from 'react'
import staty from './created_context'

export const Piixanavbar = () => {
    document.title = 'PIXABAY'
    let pd = useContext(staty);
    const cc = (ccc) => {
        pd.setpxc(ccc)
    }
    const changepxc = (e) => {
        let text = e.target.value
        pd.setpxc(text)
    }
    return (
        <>

            <div className="dropdown-modern">
                <input type="checkbox" id="modern-toggle" />
                <label htmlFor="modern-toggle" className="dropdown-modern-label">
                    <span>Choose Action</span>
                    <span className="arrow">▼</span>
                </label>

                <ul className="dropdown-modern-menu">
                    <li onClick={() => cc('fashion')}>
                        <span className="dropdown-icon" /> Fashion
                    </li>
                    <li onClick={() => cc('india')}>
                        <span className="dropdown-icon" />India
                    </li>
                    <li onClick={() => cc('news')}>
                        <span className="dropdown-icon"/> News
                    </li>
                    <li onClick={() => cc('nature')}>
                        <span className="dropdown-icon" /> Nature
                    </li>
                    <li onClick={() => cc('government')}>
                        <span className="dropdown-icon" /> Government
                    </li>
                    <li onClick={() => cc('economy')}>
                        <span className="dropdown-icon" /> Economy
                    </li><li onClick={() => cc('farming')}>
                        <span className="dropdown-icon" /> Farming
                    </li><li onClick={() => cc('bussiness')}>
                        <span className="dropdown-icon" /> Bussiness
                    </li>
                    <li onClick={() => cc('jobs')}>
                        <span className="dropdown-icon" /> jobs
                    </li>
                </ul>

            </div>
            <span style={{ paddingLeft: '800px' }}>
                <input type='text' name='input_search' placeholder='&#128269; Search' onChange={changepxc} />
            </span>
        </>
    )
}
