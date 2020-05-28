import TodoListState from './TodoListState';

export interface ApplicationState {
  todoList: TodoListState;
}

const store: ApplicationState = {
  todoList: new TodoListState(),
};

export default store;
