import Todo from "./todo.js";

export default class Project {
	constructor(name) {
		this.id = Date.now() + Math.random();
		this.name = name;
		this.todos = [];
	}

	addTodo(todo) {
		this.todos.push(todo);
	}

	removeTodo(todoId) {
		this.todos = this.todos.filter((todo) => todo.id !== todoId);
	}
}

