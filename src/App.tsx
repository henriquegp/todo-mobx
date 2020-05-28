import React, { createContext } from 'react';

import store, { ApplicationState } from './store';

import Todo from './components/Todo';
import TodoList from './components/TodoList';
import Filter from './components/Filter';

import './styles/global.scss';

export const StoreContext = createContext<ApplicationState>({} as ApplicationState);

function App() {
  return (
    <StoreContext.Provider value={store}>
      <div className="container">
        <div className="content">
          <Todo />
          <TodoList />
          <Filter />
        </div>
      </div>
    </StoreContext.Provider>
  );
}

export default App;
