import React from 'react';
import { useObserver } from 'mobx-react-lite';

import useStore from '../../hooks/useStore';
import './styles.scss';

function Filter() {
  const { todoList } = useStore();

  const isFilterSelected = (type: string) => (todoList.filter === type ? 'filter-selected' : '');

  return useObserver(() => (
    <div className="filter-container">
      <ul>
        <li>
          <button
            type="button"
            className={isFilterSelected('ALL')}
            onClick={() => todoList.setFilter('ALL')}
          >
            All
          </button>
        </li>
        <li>
          <button
            type="button"
            className={isFilterSelected('ACTIVE')}
            onClick={() => todoList.setFilter('ACTIVE')}
          >
            Active
          </button>
        </li>
        <li>
          <button
            type="button"
            className={isFilterSelected('COMPLETED')}
            onClick={() => todoList.setFilter('COMPLETED')}
          >
            Completed
          </button>
        </li>
      </ul>

      {todoList.lengthActiveTodos > 0 && (
        <div>{todoList.lengthActiveTodos} item{todoList.lengthActiveTodos > 1 && 's'} left</div>
      )}
    </div>
  ));
}

export default Filter;
