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
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Main_home } from './assets/main_home'
import { Courses } from './Mycompanent/courses'
import { Course_details } from './Mycompanent/course_details'

function App() {
  let name = "Mit Yadav";
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main_home/>} />
        <Route path='movies/' element={<Home/>}/>
        <Route path='foods' element={<Home2/>}/>
        <Route path='courses/' element={<Courses/>}/>
        <Route path='courses/:id' element={<Course_details/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
