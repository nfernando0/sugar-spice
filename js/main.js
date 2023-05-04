// Toggle Class active
const navbarNav = document.querySelector(".navbar-nav");
const searchBtn = document.querySelector("#search__btn");
const shoppingCartBtn = document.querySelector("#shopping-cart-btn");

document.querySelector("#hamb-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

document.querySelector("#shopping-cart-btn").onclick = (e) => {
  e.preventDefault();
  shoppingCart.classList.toggle("active");
};

// Search form

const searchForm = document.querySelector(".search__form");
const searchBox = document.querySelector("#search__box");

document.querySelector("#search__btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

const hamburger = document.querySelector("#hamb-menu");
const shoppingCart = document.querySelector(".shopping-cart");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!searchBtn.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
  if (!shoppingCartBtn.contains(e.target) && !shoppingCart.contains(e.target)) {
    shoppingCart.classList.remove("active");
  }
  if (!itemDetail.contains(e.target) && !itemModal.contains(e.target)) {
    itemModal.style.display = "none";
  }
});

// Modal Box

const itemModal = document.querySelector("#item-detail-modal");
const itemDetail = document.querySelector(".item-detail-btn");

itemDetail.onclick = (e) => {
  itemModal.style.display = "flex";
  e.preventDefault();
};

document.querySelector(".close-icon").onclick = (e) => {
  itemModal.style.display = "none";
  e.preventDefault();
};
