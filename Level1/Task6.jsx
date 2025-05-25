import React from "react";

const container = {
    backgroundColor:"rgb(154, 244, 148)",
    height: "100vh",
    display: "flex",
    justifyContent:"center",
    alignItems: "center"
}
const Box1 = {
    backgroundColor:"rgb(86, 81, 226)",
    height: "150px",
    width:"300px",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    borderRadius:"5px",
    border:"1px solid black"
}
const Box2 = {
    backgroundColor:"rgb(141, 141, 141)",
    height: "150px",
    width:"300px",
    display: "flex",
    justifyContent:"center",
    alignItems: "center",
    borderRadius:"5px",
    border:"1px solid black"
}



const Task6 = ({show}) => {
    
    if(show ===false){
    
    
  return (
    <div style={container}>
        <div style={Box1}>
            <h1>Hello</h1>
        </div>
    </div>
  )
}
else{
    return(
    <div style={container}>
    <div style={Box2}>
    <h1>Hello</h1>
</div>
</div>
)}}

export default Task6