import { observable, computed, action } from 'mobx';

import TodoState from './TodoState';

type Filter = 'ALL' | 'ACTIVE' | 'COMPLETED';

class TodoListState {
  @observable
  todos: TodoState[] = [];

  @observable
  filter: Filter = 'ALL';

  @computed
  get filteredTodos() {
    if (this.filter === 'ALL') {
      return this.todos;
    }

    const completed = this.filter === 'COMPLETED';
    return this.todos.filter(
      (todo) => (todo.done === completed),
    );
  }

  @computed
  get lengthActiveTodos() {
    return this.todos.filter((todo) => !todo.done).length;
  }

  @action.bound
  setTodo(todo: string) {
    this.todos.push(new TodoState(
      this.todos.length + 1,
      todo,
    ));
  }

  @action.bound
  setFilter(filter: Filter) {
    this.filter = filter;
  }

  @action.bound
  toggleTodo(id: number) {
    this.todos = this.todos.map((todo) => (
      todo.id === id
        ? { ...todo, done: !todo.done }
        : todo
    ));
  }

  @action.bound
  removeTodo(id: number) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
  }
}

export default TodoListState;
