import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App7 from './L8T7/App7'
import { LoadingProvider } from './L8T7/LoadingContent'


//import './index.css'
//import App from '../../ToDoTask/App.jsx'

createRoot(document.getElementById('root')).render(
<LoadingProvider>

  <App7 />
</LoadingProvider> 
    
  
)
