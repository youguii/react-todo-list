import React from 'react';

function Todo({ todo }) {
  return (
    <div>
      <input type="checkbox" checked={todo.complete} />
      <label>{todo.name}</label>
    </div>
  );
}

export default Todo;
