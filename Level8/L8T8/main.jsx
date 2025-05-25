import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App8 from './L8T8/App8'
import { LoadingProvider } from './L8T8/LoadingContent'


//import './index.css'
//import App from '../../ToDoTask/App.jsx'

createRoot(document.getElementById('root')).render(
  <LoadingProvider>
<App8 />
  </LoadingProvider>
   
)
