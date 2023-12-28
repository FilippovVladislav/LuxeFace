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

document.querySelector('.button-success').addEventListener('click', function (e){
    e.preventDefault();
    document.body.classList.remove('contact-mobile-active');
    document.body.classList.add('modal-success-active');
})

function buttonContact(){
    if(window.innerWidth < 991){
        document.querySelector('.button-header').removeAttribute('data-popup-modal');
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
        if(document.body.classList.contains('modal-success-active')){
            document.querySelector('.modal-success-active').classList.remove('modal-success-active');
        }
    })
})

document.querySelector('.header-modal-success-close').addEventListener('click', function (e){
    e.preventDefault();
    document.querySelector('.modal-success-active').classList.remove('modal-success-active');
})

//перебеираем все path в svg и вешаем на каждый функцию
function schemaSvg(){
    Array.prototype.slice.call(document.querySelectorAll('[data-title]')).map(function (item){
        item.addEventListener('mouseover', () => {
            pathHover(item);
        })
        item.addEventListener('mouseout', () => {
            pathLeave(item);
        })
    })
}
schemaSvg();

//функция ховер и подсветка элементов
function pathHover(item){
    let classNameActive = item.className.baseVal;
    Array.prototype.slice.call(item.closest('.model-schema').querySelectorAll(`.${classNameActive}`)).map((item) => {
        item.classList.add('active')
        let topTooltip = item.getBoundingClientRect().top - item.closest('.modal-pic-schema').getBoundingClientRect().top + (item.getBoundingClientRect().height / 2) - 20;
        item.closest('.model-schema').querySelector('.schema-tooltip__text').innerText = item.attributes['data-title']['value'];
        item.closest('.model-schema').querySelector('.schema-tooltip').classList.add('active');
        item.closest('.model-schema').querySelector('.schema-tooltip').style.top = topTooltip + 'px';
    })
}

//функция потеря фокуса и снятие подсветки
function pathLeave(item){
    let classNameActive = item.className.baseVal;
    Array.prototype.slice.call(item.closest('.model-schema').querySelectorAll(`.active`)).map((item) => {
        item.classList.remove('active')
    })
    if(document.querySelector('.schema-tooltip.active') != null){
        document.querySelector('.schema-tooltip.active').classList.remove('active');
    }
}

document.querySelectorAll('.model-slide-switcher').forEach((item) => {
    item.addEventListener('click', function (){
        if(item.closest('.model-slide').classList.contains('active')){
            item.closest('.model-slide').classList.remove('active')
        }else{
            item.closest('.model-slide').classList.add('active')
        }
    })
})

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            // если целевой элемент находится в зоне видимости
            if (entry.isIntersecting) {
                // записываем его идентификатор в локальное хранилище
               console.log(entry.target.classList.add('active'))
            }
        });
    },
    {
        // процент пересечения целевого элемента с областью просмотра
        // 10%
        threshold: 0.4,
    }
);
observer.observe(document.querySelector('.art-flex'));

document.querySelectorAll('.concept-item').forEach((item) => observer.observe(item))
import {Fancybox} from '@fancyapps/ui'
Fancybox.bind("[data-fancybox]", {
    // Your custom options
});