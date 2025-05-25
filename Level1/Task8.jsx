import React from "react"

const conntainer = {
    padding: "20px",
    backgroundColor:"rgb(34, 192, 236)",
    borderRadius: "8px", 
    width:"20%",
    margin: "0 auto", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent:"center",
    
    marginTop:"200px"
    
}
const input = {
width:"70%",
padding:"10px",
margin: "10px 0", 
borderRadius: "4px",
border: "1px solid #ccc"
}

const Task8 = () => {
  return (
    
    <div style={conntainer}>
        <h2>User Details</h2>
        Name:
        <input placeholder="Enter your name" type="text" style={input}></input>
        Age:
        <input placeholder="Enter your Age" type="Number" style={input}></input>
        City:
        <input placeholder="Enter your City" type="text" style={input}></input>
    </div>
  )
}

export default Task8