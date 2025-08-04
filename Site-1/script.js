let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

var typed = new Typed(".auto-type", {
    strings: ['Desenvolvedor', 'Desenvolvedor'],
    typeSpeed: 50,
    backSpeed: 100,
    loop: true

})
