import React from 'react';

function TodoList({ todos }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => (
          <li>{todo.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
