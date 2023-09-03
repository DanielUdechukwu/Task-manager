import React from "react";
import Nav from "../Nav";
import Card from "../Card";
import Form from "../Form";
import "./home.css"

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

export default Home