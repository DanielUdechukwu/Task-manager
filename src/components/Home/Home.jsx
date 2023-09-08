import React from "react";
import { useState } from "react";
import Nav from "../Nav";
import Bin from "../../assets/bin.svg"
// import Card from "../Card";
// import Form from "../Form";
import "./home.css"

const Home = () => {

  const [task, setTask] = useState([])
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    dueDate: ''
  })

  const handleNewTask = () => {
    if(newTask.title && newTask.description && newTask.dueDate){
      setTask([...task, newTask])
      setNewTask({title: '', description: '', dueDate: ''})
      // console.log(task)
      console.log(newTask.dueDate)
    }
  } 

  const del = (index) => {
    const removeTask = [...task]
    removeTask.splice(index, 1)
    setTask(removeTask)
    console.log("Task Deleted")
  }

  return (
    <section className="main-section">
      <div className="todo">
        <Nav />

        <div className="control">
          {task.length === 0? (
            <div className="no-task">
              <p>No Task Available</p>
            </div>
          ) : (
            <div>
              {task.map((task, index) => (
                <div className="task-card" key={index}>
                  <div className="task">
                    <div className="task-header">
                      <h1>{task.title}</h1>
                      <p>{task.dueDate}</p>
                    </div>
                    <div className="details">
                      <p>{task.description}</p>
                      <img src={Bin} className="bin" alt="bucket icon" onClick={() => del(index)} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="input-form">
          <div className="form-main">
            <input 
              type="text"
              placeholder="Title"
              value={newTask.title}
              onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
            />

            <input
              type="text"
              name="description"
              placeholder="Description"
              value={newTask.description}
              onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
            />
            
            <div className="due-date">
              <input type="date" id="due-date" name="due date" 
                value={newTask.dueDate}
                onChange={(e) => setNewTask({ ...newTask, dueDate: e.target.value })}
              />
            </div>
          </div>
          <div className="btn-container">
            <button className="btn" type="submit" onClick={handleNewTask}>Create</button>
          </div>
        </div>
      </div>
      
    </section>
  )
}

export default Home

{/* <div className="task-card">
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
</div> */}