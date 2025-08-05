import React from 'react'
import { useState } from 'react'
import '../App.css'

export const Piixanavbar = () => {
        document.title = 'PIXABAY'
    return (
        <>
        
            <div className="dropdown-modern">
                <input type="checkbox" id="modern-toggle" />
                <label htmlFor="modern-toggle" className="dropdown-modern-label">
                    <span>Choose Action</span>
                    <span className="arrow">▼</span>
                </label>

                <ul className="dropdown-modern-menu">
                    <li>
                        <span className="dropdown-icon" /> Profile
                    </li>
                    <li>
                        <span className="dropdown-icon" /> Settings
                    </li>
                    <li>
                        <span className="dropdown-icon" /> Logout
                    </li>
                </ul>

            </div>
            <span style={{paddingLeft:'800px'}}> 
                <input type='text' placeholder='&#128269; Search' />
            </span>
        </>
    )
}
