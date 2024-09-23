import '/src/styles/style.css';
import javascriptLogo from '/javascript.svg';

document.querySelector('#todo-list').innerHTML = `
	<h1>JS Todo List</h1>

	<ul class="card">
		<li class="read-the-docs">You didn't added any todo yet</li>
	</ul>

	<button id="add-todo" type="button">Add Todo</button>

	<footer><img src="${javascriptLogo}" class="logo" alt="JavaScript logo" /></footer>
`;