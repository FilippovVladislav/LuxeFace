// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";
document.querySelector('.header-burger').addEventListener('click', function (){
    document.body.classList.add('menu-mobile-active');

})

document.querySelector('.header-contact-mobile').addEventListener('click', function (){
    document.body.classList.add('contact-mobile-active');
})

function buttonContact(){
    if(window.innerWidth < 991){
        document.querySelector('.button-header').removeAttribute('data-popup');
        document.querySelector('.button-header').addEventListener('click', function (){
            document.body.classList.add('contact-mobile-active');
        })
    }
}
buttonContact();
document.querySelectorAll('.header-block__close').forEach((item) => {
    item.addEventListener('click', function (){
        if(document.body.classList.contains('contact-mobile-active')){
            document.querySelector('.contact-mobile-active').classList.remove('contact-mobile-active');
        }
        if(document.body.classList.contains('menu-mobile-active')){
            document.querySelector('.menu-mobile-active').classList.remove('menu-mobile-active');
        }
    })
})