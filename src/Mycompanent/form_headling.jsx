import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Form = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [passowrd, setpassowrd] = useState('')

    const handle_sub = (f) => {
        f.preventDefault()
        alert('your form informations applied succussfully  '+name);
        setname('');
        setemail('');
        setpassowrd('');
    }

  return (
    <>
        <div >
            <form style={{padding:'55px', display:'flex',gap:'10px'}} onSubmit={handle_sub}>
                <div>
                    name :- <input type='text' value={name} onChange={(e) => setname(e.target.value)}/>
                </div>
                <div>
                    email :- <input type='email' value={email} onChange={(e) => setemail(e.target.value)}/>
                </div>
                <div>
                    password :- <input type='password' value={passowrd} onChange={(e) => setpassowrd(e.target.value)}/>
                </div>
                <br></br><hr></hr><hr/>
                <button className='btn btn-primary' type='submit'>SUBMIT</button>
            </form>
        </div>
    </>
  )
}
