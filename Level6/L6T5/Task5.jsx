import React from 'react'
import { useEffect } from 'react'

const Task5 = () => {
    useEffect((e)=> {
        fetch('https://jsonplaceholder.typicode.com/todos/1')  //'.then' is used as PROMISE  for it definetly brings API data from link
        .then(response => {
            console.log(response);//get response in console
            return response.json() // anonymous function must return so use 'return' for get nd convert response in json method
        })
    },[]) // here the '[]' used conditionn for useEffect conditioning or dependencies
  return (
    <div>
    </div>
  )
}

export default Task5