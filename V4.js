var todoList = {
	todos: [],
	displayTodos : function() {
		console.log("My todos", this.todos)
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		console.log(this.displayTodos());
	},
	changeTodo: function(position, todoText){
		this.todos[position].todoText = todoText;
		this.displayTodos();
	},
	deleteTodo: function(position){
		this.todos.splice(position,1);
		this.displayTodos();
	},

	toggleCompleted: function(position) {
		var todo = this.todos[position];
		todo.completed = !todo.completed;
		this.displayTodos();
	}

};

console.log(todoList.addTodo("testing new feature"));
console.log(todoList.addTodo("testing new feature"));
console.log(todoList.changeTodo(1, "baraba"));
console.log(todoList.toggleCompleted(1));