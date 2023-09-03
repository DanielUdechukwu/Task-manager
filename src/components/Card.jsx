import React from "react";
import Bin from "../assets/bin.svg"

const del = () => {
  console.log("Delete Button")
}

const Card = (props) => {
  return(
    <div className="task-card">
      <div className="task">
        <div className="task-header">
          <h1>Title</h1>
          <p>12, Sept</p>
        </div>
        <div className="details">
          <p>Coming Soon. I'll soon be done with exams sir</p>
          <img src={Bin} className="bin" alt="bucket icon" onClick={del} />
        </div>
      </div>
    </div>
  )
}

export default Card