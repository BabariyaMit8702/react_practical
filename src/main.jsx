import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Stat } from './Mycompanent/state.jsx'
import { Pxstat } from './pixabay/px_stat.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Stat>
      <Pxstat>
        <App />
      </Pxstat>
    </Stat>
  </StrictMode>
)
