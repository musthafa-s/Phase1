import React from "react"

const Task3 = () => {
      const conntainer = {
            padding: "20px",
            backgroundColor:"rgb(100, 191, 230)",
            borderRadius: "8px", 
            width:"40%"

            
            
          }

          const header = {
           color: "black",
           textAlign:"center"
          }

          const paragraph = {
            color: "white",
            lineGHeight: "1.9"
          }
        
      
  return (
    <div>
      <div style={conntainer}>
        <h3 style={header} >Musthafa Samsudeen S</h3>
        <hr />
        <p style = {paragraph}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora fugit consequuntur libero minus! Ratione doloremque enim aspernatur culpa delectus nemo et veniam, quo, nam exercitationem inventore corrupti asperiores eligendi eveniet perferendis adipisci quidem dolorum placeat? Atque, cum ea nesciunt commodi explicabo perferendis porro recusandae voluptatum unde necessitatibus mollitia beatae dolorum.
        </p>
      </div>
    </div>
  )
}

export default Task3