import React from "react"

const Task5 = () => {
 
   const num1=12
   const num2=45
  const result = ()=>{num1+num2}

  const container = {
    padding: "20px",
    backgroundColor:"rgb(209, 119, 132)",
    
    borderRadius: "8px", 
    width:"40%",
    margin: "0 auto", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center"}
  return (
    <div style={container}>
      <h1>Add Two Numbers</h1>
      <hr />
     
      <p>Num1:{num1} + Num2:{num2}= Result:{num1 + num2}</p>

    </div>
  )
}

export default Task5