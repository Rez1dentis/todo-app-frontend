/* eslint-disable react/jsx-no-constructed-context-values */
import React, { useEffect, useReducer, useState } from 'react';
import TodoList from './components/TodoList/TodoList';
import { Context } from './context/context';
import reducer from './reducers/reducer';

export default function App() {
  const initialState = JSON.parse(localStorage.getItem('todos')) || [];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoTitle, setTodoTitle] = useState('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(state));
  }, [state]);

  const addTodo = (event) => {
    if (event.key === 'Enter') {
      dispatch({
        type: 'add',
        payload: todoTitle,
      });

      setTodoTitle('');
    }
  };

  return (
    <Context.Provider value={{ dispatch }}>
      <div className="container">
        <h1>Todo app</h1>

        <div className="input-field">
          <input
            type="text"
            value={todoTitle}
            onChange={(event) => setTodoTitle(event.target.value)}
            onKeyPress={addTodo}
          />
          <label>Введите текст</label>
        </div>
        <TodoList todos={state} />
      </div>
    </Context.Provider>
  );
}
