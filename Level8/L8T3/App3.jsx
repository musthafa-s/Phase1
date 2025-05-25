import React, { useEffect } from 'react'
import FetchDataPromise from './fetchDataPromise';



const App3 = () => {

    useEffect(() => {
        FetchDataPromise(); // this runs only once
      }, []);
    
      return <div>Check console for data</div>;
    };

export default App3