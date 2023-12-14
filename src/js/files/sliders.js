/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, A11y } from "swiper";
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
// import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
// import 'swiper/css';

// Добавление классов слайдерам
// swiper главному блоку, swiper-wrapper оболочке, swiper-slide для слайдов


let swiperReviews = new Swiper('.swiper-reviews', {
    modules: [Navigation, A11y],
    navigation: {
        nextEl: ".swiper-reviews .arrow-right",
        prevEl: ".swiper-reviews .arrow-left",
    },
    loop: true,
    slidesPerView: 1,
    breakpoints: {
        320: {
            spaceBetween: 20,
        },
        991: {
            spaceBetween: 48,
        },
        1441: {
            spaceBetween: 100,
        },
    },
})

let swiperResult = new Swiper('.swiper-result', {
    modules: [Navigation, A11y],
    navigation: {
        nextEl: ".swiper-result .arrow-right",
        prevEl: ".swiper-result .arrow-left",
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1441: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
})

let swiperNews = new Swiper('.swiper-news', {
    modules: [Navigation, A11y],
    navigation: {
        nextEl: ".news-head .arrow-right",
        prevEl: ".news-head .arrow-left",
    },
    loop: true,

    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        600: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1441: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
})