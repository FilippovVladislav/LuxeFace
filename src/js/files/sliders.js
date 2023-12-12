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
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
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