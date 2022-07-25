const userLogo = document.querySelector('.header__logo');
const menuObj = document.querySelector('.menu');
const header = document.querySelector('.header');
const userName = document.querySelector('.header__user-name');
const burger = document.querySelector('.header__burger');


// document.addEventListener("click", function (e) {
//     const targetElement = e.target;
//     if (userLogo) {
//         menuObj.classList.toggle('_active');
//         header.classList.toggle('_active');
//         userName.classList.toggle('_active');
//         burger.classList.toggle('_active');
//     }

// });


userLogo.addEventListener("click", function (e) {
    menuObj.classList.toggle('_active');
    header.classList.toggle('_active');
    userName.classList.toggle('_active');
    burger.classList.toggle('_active');
});

burger.addEventListener("click", function (e) {
    burger.classList.remove('_active');
    header.classList.remove('_active');
    userName.classList.remove('_active');
    menuObj.classList.remove('_active');
});


const menuItem = document.querySelectorAll('.menu__item');
menuItem.forEach(function (menuItem) {
    menuItem.addEventListener("click", function (e) {
        menuItem.firstElementChild.classList.toggle('_active');
        menuItem.lastElementChild.classList.toggle('_active');
    });
});


