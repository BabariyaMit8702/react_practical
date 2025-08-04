import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Event } from './Mycompanent/event'
import { Fh } from './Mycompanent/fh'
import { Sh } from './Mycompanent/sh'
import { Th } from './Mycompanent/th'
import { Ccs } from './Mycompanent/fhcss'
import { Mf } from './Mycompanent/map&filter' 
import { Home } from './first project/main_comp'
import { Ueff,Clef } from './Mycompanent/ueff'
import { Fetch } from './Mycompanent/fetching'
import { Form } from './Mycompanent/form_headling'
import { Multi_input } from './Mycompanent/multi_input'
import { Home2 } from './second project/home'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Main_home } from './assets/main_home'
import { Courses } from './Mycompanent/courses'
import { Course_details } from './Mycompanent/course_details'
import { Mn } from './assets/main_navbars'
import { Logs } from './Mycompanent/logs'


function App() {
  let name = "Mit Yadav";
  return (
    <>
    <BrowserRouter>
      <Mn/>
      <Routes>
        <Route path='/api' element={<Fetch />}/>
        <Route path='/' element={<Main_home />} />
        <Route path='/movies' element={<Home />}/>
        <Route path='/foods' element={<Home2 />}/>
        <Route path='/courses' element={<Courses />}/>
        <Route path='/courses/:c_id' element={<Course_details />}/>
        <Route path='/logs' element={<Logs/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
