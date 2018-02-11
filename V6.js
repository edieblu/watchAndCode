var todoList = {
	todos: [
			{todoText: "testing",
			completed: true},

			{todoText: "testing2",
			completed: false},	

			{todoText: "testing3",
			completed: true}

			],

	displayTodos : function() {
		console.log("My todos:");
		if (this.todos.length === 0) {
			console.log("Your todo is empty!")
		}
		for (var i = 0; i < this.todos.length; i++) {
			if (this.todos[i].completed === true) {
				console.log("(X) " + this.todos[i].todoText)
			} else {
				console.log("( ) " + this.todos[i].todoText)
			}
			
		}
	},
	addTodo: function(todoText) {
		this.todos.push({
			todoText: todoText,
			completed: false
		});
		this.displayTodos();
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
	},

	toggleAll: function() {
		var totalTodos = this.todos.length;
		var completedTodos = 0;

		for (var i = 0; i < totalTodos; i++) {
			if (this.todos[i].completed === true) {
				completedTodos++;
			}
		}
		if (completedTodos === totalTodos) {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = false;
			}
		} else {
			for (var i = 0; i < totalTodos; i++) {
				this.todos[i].completed = true;
			}
		}
		this.displayTodos();
	}

};

console.log(todoList.displayTodos());
console.log(todoList.toggleAll());
console.log(todoList.toggleAll());
