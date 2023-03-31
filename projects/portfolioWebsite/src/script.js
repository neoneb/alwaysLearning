const projectsBtn = document.querySelector('.projects__btn');
const projectsContainer = document.querySelector('.projects__Container');
const backBtn = document.querySelector('.back__button');

projectsBtn.addEventListener('click', function () {
  projectsContainer.classList.add('show');
});

backBtn.addEventListener('click', function () {
  projectsContainer.classList.remove('show');
});
