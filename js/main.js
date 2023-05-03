// Toggle Class active
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamb-menu').onclick = (e) => {
    navbarNav.classList.toggle('active');
    e.preventDefault();
}

// Search form

const searchForm = document.querySelector('.search__form');
const searchBox = document.querySelector('#search__box');

document.querySelector('#search__btn').onclick = (e) => {
    searchForm.classList.toggle('active');
    searchBox.focus();
    e.preventDefault();
}


const hamburger = document.querySelector('#hamb-menu');
const searchBtn = document.querySelector('#search__btn');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }    
    if(!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
        searchForm.classList.remove('active');
    }    
})
