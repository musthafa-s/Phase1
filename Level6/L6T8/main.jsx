import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux';
import { store } from './L6T8/Store'; // Corrected the import path
import CounterApp from './L6T8/CounterApp'; // Corrected the import path


//import './index.css'
//import App from '../../ToDoTask/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    <Provider store={store}>
      <CounterApp />
    </Provider>
    
  </StrictMode>,
)
