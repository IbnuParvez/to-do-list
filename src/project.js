class Projects {
  constructor(name) {
    this.name = name;
    this.todos = [];
  }
  addToDo(todos) {
    this.todos.push(todos);
  }
  removeToDo(index) {
    this.todos.splice(index, 1);
  }
  getToDo() {
    return this.todos;
  }
}

export default Projects;
