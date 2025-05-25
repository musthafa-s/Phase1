import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './L7T1/App1'



//import './index.css'
//import App from '../../ToDoTask/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
   <App1 />
    
  </StrictMode>,
)
