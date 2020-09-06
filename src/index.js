import './style.css';
import Manager from './Manager';
import Display from './Display';

function component() {
	let test = Manager.projects;

	test.forEach((tests) => {
		Display.createComponent(tests);
	});
}

component();
// window.addEventListener('click', (e) => {
// 	document.body.appendChild(component());
// });
