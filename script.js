
const menuHamburguer = document.querySelector(".navbar--hamburguer");
const menuList = document.querySelector(".navbar--list");

menuHamburguer.addEventListener('click', (e) => {
    menuList.classList.toggle('navbar--list-visible');
    console.log(document.querySelectorAll('.navbar--link'));
});

document.querySelectorAll('.navbar--link').forEach(e => {
    e.addEventListener('click', (ev)=> {
        console.log(ev.target)
        menuList.classList.remove('navbar--list-visible');
    });
})

