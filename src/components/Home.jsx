import React from "react";
import "./home.css"

// Generating current date for header
const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const months = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]
const currentDate = new Date()
const dayIndex = currentDate.getDay()
const day = dayNames[dayIndex]
const monthIndex = currentDate.getMonth()
const month = months[monthIndex]
const date = currentDate.getDate()
console.log(day, month, date)

const Home = () => {
  return (
    <section className="main-section">
      <div className="todo">
        <Nav />
        <div className="control">
          <Card />
          <Card />
          <Card />
        </div>
        <div className="input-form">
          <Form />
        </div>
      </div>
      
    </section>
  )
}

const Nav = () => {
  return(
    <>
      <header>
        <nav>
          <h1><span>{date}</span> <span>{month}</span>, <span>{day}</span></h1>
        </nav>
      </header>
    </>
  )
}

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

export default Home