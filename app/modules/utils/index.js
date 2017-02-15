function removeClass (obj, cls) {
  let classes = obj.className.split(' ');

  for (let i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1);
      i--;
    }
  }
  obj.className = classes.join(' ');
}

function addClass (obj, cls) {
  obj.className = obj.className + ' ' + cls;
}

exports.toggleClass = e => {
  const listsContainer = e.target.parentElement.children;
  for (let i = 0; i < listsContainer.length; i++) {
    removeClass(listsContainer[i], 'is-active');
  }
  addClass(e.target, 'is-active');
};

exports.getProjectName = e => {
  return e.path[0].files[0].name;
};