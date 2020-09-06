import ProjectManager from './ProjectManager';
import todoManager from './todoManager';
import PubSub from 'pubsub-js';

const Manager = (() => {
	const projects = [];

	const findProject = (id, title) => {
		const filtered = projects.filter((project) => {
			if (project.id == id && project.title == title) return true;
		});

		return filtered[0];
	};

	projects.push(
		ProjectManager.addProject(
			0,
			'Hello',
			'THis is a default project',
			'ASAP',
			'High'
		)
	);
	projects.push(
		ProjectManager.addProject(
			1,
			'World!',
			'This is a scond Default Project',
			'10/1/2020',
			'low'
		)
	);
	// todoManager.addTodo();
	// todoManager.addTodo(projects[0]);
	// console.log(findProject(0, 'Hello!'));
	// todoManager.addTodo(findProject(0, 'Hello!'));

	console.log(projects);
	return { projects };
})();

export default Manager;
