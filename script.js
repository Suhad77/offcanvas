
const navigation = document.querySelector('.navigation');
const menu = document.querySelector('.menu');
const body = document.querySelector('body');
const hero = document.querySelector('.hero');
const close = document.querySelector('.close')

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

const navItems = [...document.querySelectorAll('.nav-items li a')]

navItems.map(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        const id = e.target.getAttribute('href');
        console.log(id);
        const section =document.querySelector(id).offsetTop;
        console.log(section);


        // window.scroll({
        //     top:0,
        //     left:0,
        //     behavior: 'smooth',
        // })
    });
});
