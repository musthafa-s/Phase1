import  { useState } from 'react'

const useCounter = (initialValue = 0) => {
    const [count,setCount] = useState(initialValue)
     const increment = (e) => {
        setCount(prevCount => prevCount + 1)
     }
     const decrement = (e) => {
        setCount(prevCount => prevCount  - 1)
     }
     const reset = (e) => {
        setCount(initialValue)
     }

  return [count,increment,decrement,reset]
 
}

export default useCounter