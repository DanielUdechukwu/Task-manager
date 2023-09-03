import React from "react";

const Card = (props) => {
  return(
    <div className="task-card">
      <div className="task">
        <h1>Title</h1>
        <p>Coming Soon. I'll soon be done with exams sir</p>
      </div>
      <div className="due-date">
        <p>12, Sept</p>
      </div>
    </div>
  )
}

export default Card