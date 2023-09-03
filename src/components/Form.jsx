import React from "react";

const Form = () => {
  return (
    <>
      <div className="form-main">
        <input type="text" name="title" placeholder="Title" />
        <input type="text" name="description" placeholder="Description" />
        <div className="due-date">
          {/* <label for="birthday">Due Date</label> */}
          <input type="date" id="due-date" name="due date" />
        </div>
      </div>
      <div className="btn-container">
        <button className="btn">Create</button>
      </div>
    </>
  )
}

export default Form