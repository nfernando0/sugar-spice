// Toggle Class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamb-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}


const hamburger = document.querySelector('#hamb-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }    
})