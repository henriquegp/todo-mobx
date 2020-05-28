import React, { useState, FormEvent } from 'react';

import useStore from '../../hooks/useStore';
import './styles.scss';

function Todo() {
  const [todo, setTodo] = useState('');
  const { todoList } = useStore();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    todoList.setTodo(todo);
    setTodo('');
  }

  return (
    <div className="todo-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="To do"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <div className="underline" />
      </form>
    </div>
  );
}

export default Todo;
