import React from "react"

const container = {
    padding: "20px",
    backgroundColor: "rgb(103, 132, 238)",
    borderRadius: "8px",
    height: "100vh",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}
const head = {
    backgroundColor: "rgb(2, 7, 22)",
    color: "white",
    display: "block",
    padding: "10px",
    borderRadius: "4px"
}

const Task7 = () => {
    return (
        <div style={container}>
            <h2 style={head}>INDIAN CRICKET PLAYERS LIST</h2>
            <ul>
                <li>Rohit</li>
                <li>Virat</li>
                <li>Dhoni</li>
                <li>Sachin</li>
                <li>Bumrah</li>
            </ul>
        </div>
    )
}

export default Task7