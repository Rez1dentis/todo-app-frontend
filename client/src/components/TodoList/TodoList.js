import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

export default function TodoList({ todos }) {
  return <ul>{todos && todos.map((item) => <TodoItem key={item.id} {...item} />)}</ul>;
}
