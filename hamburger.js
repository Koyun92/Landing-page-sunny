const hamburgerIcon = document.querySelector('#hamburgerIcon');
const hamburgerMenu = document.querySelector('#hamburgerMenu');


hamburgerIcon.addEventListener('click', ()=>{
    hamburgerMenu.classList.toggle('active');
});