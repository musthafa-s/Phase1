import React from "react"
import image1 from "../public/Tasksource.img.jpeg"
const conntainer = {
    padding: "20px",
    backgroundColor:"rgb(53, 0, 8)",
    borderRadius: "8px", 
    width:"40%",
    margin: "0 auto", 
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
    
}

  const paragraph = {
    color: "white",
    lineGHeight: "1.9"
  }

const Task4 = () => {
  return (
    <div  style={conntainer}>
        <img src={image1} alt={"VeeramMovie"}></img>
        <hr />
        <p style={paragraph}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi quae atque ab blanditiis error ipsam. Facilis fugit, hic illum laudantium, quidem nemo sed beatae voluptas voluptatibus facere modi eum libero eveniet fugiat, officiis soluta tempore delectus? Et, nihil eum. Reiciendis accusamus exercitationem eaque perspiciatis dolorem harum eum aliquid totam voluptatibus.</p>
    </div>
  )
}

export default Task4