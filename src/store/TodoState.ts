import { observable } from 'mobx';

class TodoState {
  id!: number;

  @observable
  todo = '';

  @observable
  done = false;

  constructor(id: number, todo: string) {
    this.id = id;
    this.todo = todo;
  }
}

export default TodoState;
