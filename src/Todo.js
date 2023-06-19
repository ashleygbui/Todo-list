import React from 'react'

function Todo({ todo, index, markTodo, removeTodo }) {
  return (
  
    <div className="todo">
      <span style={{ textDecoration: todo.isDone ? "line-through" : "" }}>{todo.text}</span>
      <div>
        <button type="button" class="btn btn-outline-success" onClick={() => markTodo(index)}>✓</button>{' '}
        <button type="button" class="btn btn-outline-danger"onClick={() => removeTodo(index)}>✕</button>
      </div>
    </div>
  );
}

export default Todo