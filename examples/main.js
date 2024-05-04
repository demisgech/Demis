const menuListToggler = document.querySelector('.btn--toggler');

menuListToggler.addEventListener("click", () => {
    const items = document.querySelector(".navbar__list");
    items.classList.toggle("navbar__item-collapse");
});