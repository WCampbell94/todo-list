import Manager from './Manager';

const content = document.querySelector('.left-pane');

const Display = (() => {
	// Takes in Project object
	const createComponent = (project) => {
		let projectComponent = document.createElement('div');
		projectComponent.classList.add('project-component');
		projectComponent.setAttribute('id', project.id);

		let projectTitle = document.createElement('p');
		projectTitle.classList.add('project-title');
		projectTitle.innerText = `${project.title}`;
		projectComponent.appendChild(projectTitle);

		let dueDate = document.createElement('p');
		projectTitle.classList.add('due-date');
		dueDate.innerText = ` Due: ${project.dueDate}`;
		projectComponent.appendChild(dueDate);

		let remove = document.createElement('button');
		remove.innerText = 'Delete';
		remove.classList.add('project-delete');
		projectComponent.appendChild(remove);
		//Going to bed TODO
		//Event listener to delete Project, and todos by clicking this
		//Style this

		content.appendChild(projectComponent);
	};

	return { createComponent };
})();

export default Display;
