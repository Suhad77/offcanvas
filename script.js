
const navigation = document.querySelector('.navigation');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const hero = document.querySelector('.hero');
const close = document.querySelector('.close')


// => Fat arrow
// -> skiinny arrow

const listenToMenuButton = () => {
    hero.style.left = "220px";
    body.classList.add('show');
}
const RemoveMenu = () => {
    hero.style.left = "0";
    body.classList.remove('show');
}

menu.addEventListener('click',listenToMenuButton);
close.addEventListener('click',RemoveMenu);