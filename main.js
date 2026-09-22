const menuIcon = document.getElementById('menuIcon');
const closeIcon = document.getElementById('closeIcon');
const navigationMenu = document.getElementById('navigationMenu');
const mainContainer = document.getElementById('mainContainer');
const footerElement = document.getElementById('footerContainer');



menuIcon.addEventListener('click', (event) => {
    menuIcon.classList.add('hidden');
    closeIcon.classList.remove('hidden');

    navigationMenu.classList.add('visible');
    mainContainer.classList.add('darken');
    footerElement.classList.add('darken');

})

closeIcon.addEventListener('click', (event) => {
    menuIcon.classList.remove('hidden');
    closeIcon.classList.add('hidden');

    navigationMenu.classList.remove('visible');
    mainContainer.classList.remove('darken');
    footerElement.classList.remove('darken');
})