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

function App() {
  let name = "Mit Yadav";
  return (
    <>
      <Fetch/>
    </>
  )
}

export default App
