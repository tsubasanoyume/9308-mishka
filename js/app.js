var menuList = document.querySelector(".menu-list");
var button = document.querySelector(".menu-list__switch");
var catalogLink = document.querySelector(".menu-list__item--catalog");
var formLink = document.querySelector(".menu-list__item--form");
var searchLink = document.querySelector(".menu-list__item--search");
var basketLink = document.querySelector(".menu-list__item--basket");

menuList.classList.remove("menu-list--no-js");

catalogLink.classList.add("hidden");
formLink.classList.add("hidden");
searchLink.classList.add("hidden");
basketLink.classList.add("hidden");

button.addEventListener("click", function() {
  if (menuList.classList.contains("menu-list--close")) {
    menuList.classList.remove("menu-list--close");
    menuList.classList.add("menu-list--open");
    catalogLink.classList.toggle("hidden");
    formLink.classList.toggle("hidden");
    searchLink.classList.toggle("hidden");
    basketLink.classList.toggle("hidden");
  } else {
    menuList.classList.remove("menu-list--open");
    menuList.classList.add("menu-list--close");
    catalogLink.classList.toggle("hidden");
    formLink.classList.toggle("hidden");
    searchLink.classList.toggle("hidden");
    basketLink.classList.toggle("hidden");
  }
});
