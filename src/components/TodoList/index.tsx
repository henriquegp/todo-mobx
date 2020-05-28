import React from 'react';
import { useObserver } from 'mobx-react-lite';

import useStore from '../../hooks/useStore';
import './styles.scss';

function TodoList() {
  const { todoList } = useStore();

  return useObserver(() => (
    <ul className="todo-list">
      {todoList.filteredTodos.map((todo) => (
        <li key={todo.id}>
          <input
            type="checkbox"
            className="checkbox"
            checked={todo.done}
            onChange={() => todoList.toggleTodo(todo.id)}
          />

          <div className={`text ${todo.done && 'completed'}`}>
            {todo.todo}
          </div>

          <button
            type="button"
            className="remove"
            tabIndex={0}
            onClick={() => todoList.removeTodo(todo.id)}
          >
            re
          </button>
        </li>
      ))}
    </ul>
  ));
}

export default TodoList;
