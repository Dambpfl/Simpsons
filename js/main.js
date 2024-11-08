/* MENU */
const menuBurger = document.getElementById("menu_burger"),
      menuToggle = document.getElementById("menu_toggle"),
      menuClose = document.getElementById("menu_close");

/* MENU APPARANT */
if(menuToggle) {
    menuToggle.addEventListener('click', () => {
        menuBurger.classList.add('show-menu'); 
    });
}

/* MENU CACHER */
if(menuClose) {
    menuClose.addEventListener('click', () => {
        menuBurger.classList.remove('show-menu');  
    });
}

/* FERMETURE MENU LORS D'UN CLIC SUR UN DES LIENS DU MENU */
const menuLink = document.querySelectorAll('.menu_link');

const linkAction = () => {
    menuBurger.classList.remove('show-menu');
};

menuLink.forEach(link => link.addEventListener('click', linkAction));