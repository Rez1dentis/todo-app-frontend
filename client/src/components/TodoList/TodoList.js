import React, { useEffect } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';

function TodoList({ todo, setTodo }) {
  useEffect(() => {
    const result = fetch('/get')
      .then((res) => res.json())
      .then((json) => console.log(json));
  });

  return (

    <div>
      <AddTodo todo={todo} setTodo={setTodo} />
      <Todo />
    </div>
  );
}

export default TodoList;
