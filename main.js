import Project from "./project.js";

const myProjects = [
	new Project('Create a Todo list'),
	new Project('Create A Todo list in a Project'),
];



//Button 'New Project'
const newProjectBtn = document.createElement('button');
newProjectBtn.textContent = 'New Project';
newProjectBtn.setAttribute('style', 'width:80px; height:40px; margin-bottom: 20px;');
document.body.appendChild(newProjectBtn);


//Refer to Project dialog
const newProjectDialog = document.getElementById('newProjectDialog');


//Show 'Add Project' modal
newProjectBtn.onclick = () => {
	newProjectDialog.showModal();
}



//---------------------------------------------------------------------------------Modal 'Project' window------------------------------------------------------------------------------//

// Prevent confirmBtn - the form from being sent
document.getElementById('add-project-btn').addEventListener('click', (event) => {
	event.preventDefault();

	//Take a value from the 'Add Project' modal
	const modalProjectName = document.getElementById('project-name').value;


	const newProject = {
		name: modalProjectName,
	}

	addProjectToGroup(newProject);
	displayProjects(myProjects);
	newProjectDialog.close();
});




//Add project to Projects
function addProjectToGroup(project) {
	const createdProject = new Project(project.name);
	myProjects.push(createdProject);
}





//Display Projects
function displayProjects(projects) {
	const projectList = document.createElement('div');                               //<div id='project-list'></div>
	projectList.setAttribute('id', 'project-list');
	projectList.setAttribute('style', 'display: flex; flex-direction: row; gap:20px;')


//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
while (projectList.firstChild) {
	projectList.removeChild(projectList.firstChild);
}



for(let index = 0; index < myProjects.length; index++) {
	const project = myProjects[index];
	const projectItem = document.createElement('div');                                    //<div class='book-item'></div>
	projectItem.classList.add('project-item');
	projectItem.setAttribute('style', ' border-radius: 25px; padding: 10px; box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px; margin-bottom: 10px;');

	//
	const titleElm = document.createElement('h2');                                  //<h2>project.name</h2>
	titleElm.textContent = project.name;


	//Add 'Remove Project' Button
	const removeProjectBtn = document.createElement('button');
	removeProjectBtn.textContent = 'Remove Project';

	removeProjectBtn.onclick =() => {
		myProjects.splice(index, 1);
		displayProjects(myProjects);
	}
	projectItem.appendChild(titleElm);
	projectList.appendChild(projectItem);
}
}
