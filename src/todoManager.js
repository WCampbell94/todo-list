import PubSub from 'pubsub-js';

// Factory function for new Todo objects
const Todo = (
	id,
	title,
	description,
	dueDate,
	priority,
	notes = '',
	completed = false
) => {
	return { id, title, description, dueDate, priority, notes, completed };
};

//Module that manages todo object
const todoManager = (() => {
	// Takes in a project to add the todo to
	// Should be selected by the Current project in UI
	const addTodo = (project, id, title, description, dueDate, priority) => {
		project.todos.push(id, title, description, dueDate, priority);
	};
	// Takes in project and the index of the todo in the projects todos array
	//
	const removeTodo = (id) => {
		project.todos.splice(todo, 1);
	};

	const changeTodoPriority = (id, newPriority) => {
		// move todos position in the array
	};

	const changeNotes = (id) => {
		// Change the notes string of a todo item
	};

	const markComplete = (id) => {
		// mark the todo as completed
	};
	return { addTodo, removeTodo, changeTodoPriority, changeNotes, markComplete };
})();

export default todoManager;
