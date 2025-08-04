import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Stat } from './Mycompanent/state.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stat>
    <App />
    </Stat>
  </StrictMode>
)
