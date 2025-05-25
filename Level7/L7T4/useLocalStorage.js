import { useState } from "react"
import { useEffect } from "react"


const useLocalStorage = (key,inititalValue) => {

  const [value,setValue] = useState ((e) => {
    const localStorageValue = localStorage.getItem(key);
    localStorageValue 
    return localStorageValue ? JSON.parse(localStorageValue) : inititalValue
  })

  useEffect((e) => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])
  
  return [value, setValue]
}
export default useLocalStorage