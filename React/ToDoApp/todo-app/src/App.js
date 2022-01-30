import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputValue, setInput] = useState(''); //state at the beginning of app
  const [todos, setTodos] = useState([]);

  return (
    <div className='App'>
      <Header />
      {/* Form INSTRUCTIONS */}
      {/* create a form */}
      {/* pass setInput as props */}
      <Form
        inputValue={inputValue}
        setInput={setInput}
        todos={todos}
        setTodos={setTodos}
      />
      {/* pass state to the form  */}
      {/* get item in input field */}
      {/* use state to keep track of items being added, modified, etc */}
      {/* After user types and submits add to list (how do that work in react?) */}
      {/* clear input field */}
      {/* TO DO LIST */}
      <TodoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;
