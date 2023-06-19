import React from "react";
import "./App.css";
import { Button, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormTodo from "./FormTodo";
import Todo from "./Todo";

function App() {
  const [todos,setTodos] = React.useState([ //hook
    {
      text: "This is a Sample Todo",
      isDone: false
    }
  ])

  const addTodo = text =>{
    const newTodos = [...todos, {text}];
    setTodos(newTodos);
  }

  const markTodo = index=>{
    const newTodos = [...todos]; // ... is a spread operator that allows us to copy all parts of the existing array in another array/object
    newTodos[index].isDone = true;
    setTodos(newTodos);
  }

  const removeTodo= index =>{
    const newTodos = [...todos];
    newTodos.splice(index,1);
    setTodos(newTodos);
  }

  return(
    <>
      <div className = "App">
        <div className="container">
          <h1 className="text-center"> My Todo List</h1>
          <FormTodo addTodo = {addTodo}/>
          <div>
            {todos.map((todo,index) => (
              <Card>
                <Card.Body>
                  <Todo
                  key={index}
                  index={index}
                  todo={todo}
                  markTodo={markTodo}
                  removeTodo={removeTodo}
                  />
                </Card.Body>
              </Card>
            ))}
          </div>
        </div>
      </div>
      
    </>
  );
}


export default App;
