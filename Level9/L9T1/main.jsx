import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App1 from './L9T1/App1'
import {BrowserRouter} from 'react-router-dom'

//import './index.css'
//import App from '../../ToDoTask/App.jsx'

createRoot(document.getElementById('root')).render(
    <React.StrictMode>

 <BrowserRouter>
 <App1 />
 </BrowserRouter>
    </React.StrictMode>

   
)
