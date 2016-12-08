const utils = require('../utils');
const dirTree = require('directory-tree');
const projectTree = require('../project-tree');

const getProjectName = utils.getProjectName;
const toggleClass = utils.toggleClass;

function addNewProject(event, projectContainer) {
  const project = document.createElement('li');
  project.className = 'projects-list__item';
  project.innerHTML = getProjectName(event);
  project.addEventListener('click', e => {
    toggleClass(e);
    projectTree({
       root: dirTree(event.path[0].files[0].path),
       container: document.querySelector('.project-tree')
     });
  });
  projectContainer.appendChild(project);
}

module.exports = function(addProjectBtnSelector, projectInputSelector, projectContainer) {
  const addProjectBtn = document.getElementById(addProjectBtnSelector);
  const projectInput = document.getElementById(projectInputSelector);
  const projectsList = document.querySelector(projectContainer);

  addProjectBtn.addEventListener('click', () => projectInput.click());
  projectInput.addEventListener('change', e => addNewProject(e, projectsList));
};
