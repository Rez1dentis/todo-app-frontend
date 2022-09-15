import React, { useState } from 'react';
import TodoList from '../TodoList/TodoList';
import './Main.css';

function Main({ tasks }) {
  const [todo, setTodo] = useState(tasks || []);
  // console.log(todo);
  return (
    <div>
      <TodoList todo={todo} setTodo={setTodo} />
    </div>
  );
}

export default Main;
