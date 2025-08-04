import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'


export const Mn = () => {
    const [login, setlogin] = useState(false)
    let navigate = useNavigate()
    const Fm = (at) => {
        if(login==true){
            navigate(`/${at}`);
        }else{
            navigate('/logs');
        }
        }
    const ap = (at) => {
            navigate(`/${at}`)
    }
    const li = () => {
            setlogin(!login)
            navigate('/')
    }
    return (
        <>
        <center>
            <div id='nv'>
                <button type="button" onClick={() => Fm('foods')} className="btn btn-outline-primary">Food</button>
                <button type="button" onClick={() => Fm('movies')} className="btn btn-outline-secondary">Movies</button>
                <button type="button" onClick={() => ap('api')} className="btn btn-outline-success">Api</button>
                {login?
                <button type="button" onClick={li} className="btn btn-outline-danger">LOG-OUT</button>
                :
                <button type="button" onClick={li} className="btn btn-outline-warning">LOG-IN</button>
                }
                <button type="button" className="btn btn-outline-info"><Link style={{textDecoration:'none',color:'white'}} to={'/'} >Home</Link></button>
            </div>
            </center>
        </>
    )
}
mm 