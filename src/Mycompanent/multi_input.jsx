import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const Multi_input = () => {
    const [formdata, setformdata] = useState({
        name:'',
        email:'',
        password:'',
        age:'',
        phone_no:'',
    })
    const onchange = (e) => {
        // const {name,value}= e.target
        const name = e.target.name
        const value = e.target.value
        setformdata({...formdata,[name]:value})
    }
    const op = (e) => {
        e.preventDefault();
        alert('your form applied succussfully  '+formdata.name);
        console.log(formdata);
        setformdata({
        name:'',
        email:'',
        password:'',
        age:'',
        phone_no:'',
    })
    }
  return (
    <>
        <div>
            <form onSubmit={op}>
                <div>
                    name:- <input value={formdata.name} name='name' onChange={onchange} type="text"/>
                </div>
                <div>
                    email :- <input value={formdata.email} name='email' onChange={onchange} type='email'/>
                </div>
                <div>
                    password :- <input value={formdata.password} onChange={onchange} name='password' type='password'/>
                </div>
                <div>
                    age :- <input value={formdata.age} name='age' onChange={onchange} type='number'/>
                </div>
                <div>
                    Contect_No :- <input value={formdata.phone_no} onChange={onchange} name='phone_no' type='number'/>
                </div>
                <button type='submit' className='btn btn-danger'>SUBMIT</button>
            </form>
        </div>
    </>
  )
}
