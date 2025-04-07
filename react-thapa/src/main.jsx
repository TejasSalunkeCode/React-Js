import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { EventHandling } from './Components/EventHandling.jsx'
// import { Practices } from './Practices.jsx';
// import Profile from './Components/profile'

 
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <EventHandling/> */}
    {/* <Practices /> */}
    {/* <Profile/> */}
  </StrictMode>
)
