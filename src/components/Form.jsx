import React from "react";

const Form = () => {
  return (
    <>
      <div className="form-main">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
      </div>
      <div className="btn-container">
        <button className="btn">Create</button>
      </div>
    </>
  )
}

export default Form