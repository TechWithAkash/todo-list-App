import React from 'react'
import './App.css';
import './Component/About.css';
import  './Component/AddTodo.css';
import Header from './Component/Header';
import { Todos } from './Component/Todos';
import { Footer } from './Component/Footer';
import { AddTodo } from './Component/AddTodo';
import  About  from './Component/About';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';


function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  }
  else {
    initTodo = JSON.parse(localStorage.getItem("todos"))
  }
  const onDelete = (todo) => {
    console.log("Delete Successfully", todo)

    setTodos(todos.filter((e) => {
      return e !== todo;
    }));

    localStorage.getItem("todos", JSON.stringify(todos))
  }

  const addTodo = (title, desc) => {
    console.log("I am Adding Todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      let sno = todos[todos.length - 1].sno + 1;

    }
    const myTodo = {
      title: title,
      desc: desc,
    }
    setTodos([...todos, myTodo]);
    console.log(myTodo);


  }


  const [todos, setTodos] = useState(initTodo);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))

  }, [todos])
  return (
    <>
      <Router>
        <Header title="My Todos List" searchBar={false} />
        <Routes>
          
          <Route exact path="/" element={
  <React.Fragment>
    <AddTodo addTodo={addTodo} />
    <Todos todos={todos} onDelete={onDelete} />
  </React.Fragment>
} />

          <Route exact path="/about" element={<About />}/>
            {/* <About /> */}
          {/* </Route> */}
        </Routes>
        </Router >

        <Footer />

    </>
  );
}

export default App;
