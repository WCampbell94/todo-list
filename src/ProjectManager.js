import PubSub from 'pubsub-js';

// Factory function for new Project objects
const Project = (
	id,
	title,
	description,
	dueDate,
	priority,
	notes = '',
	todos = [],
	completed = false
) => {
	return { id, title, description, dueDate, priority, notes, todos, completed };
};

const ProjectManager = (() => {
	const addProject = (id, title, description, dueDate, priority) => {
		return Project(id, title, description, dueDate, priority);
	};

	// Takes in project and the index of the todo in the projects todos array
	const removeProject = (id) => {
		alert(`Removing poject: ${id.title}`);
	};

	const changePriority = (id, newPriority) => {
		alert(`changing project: ${id} priority to ${newPriority}`);
	};

	const markComplete = (id) => {
		alert(`marking project ${id} complete`);
	};

	return {
		addProject,
		removeProject,
		changePriority,
		markComplete,
		removeProject,
	};
})();

export default ProjectManager;
