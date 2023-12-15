/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, {Navigation, A11y, Pagination} from "swiper";
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

let swiperArrayPrev = [];

let swiperKinds = new Swiper('.kinds-slider', {
    modules: [Navigation, A11y],
    navigation: {
        nextEl: ".kinds-block .arrow-right",
        prevEl: ".kinds-block .arrow-left",
    },
    loop: false,
    on: {
        slideChangeTransitionStart: function (swiper) {
            let swiperItemPrev = swiper.slides.filter((itemSwiper, index) => index < swiper.realIndex)
            swiperItemPrev.map(item => item.classList.add('prev'));
            let swiperItemNext = swiper.slides.filter((itemSwiper, index) => index >= swiper.realIndex)
            swiperItemNext.map(item => item.classList.add('next'));
            document.querySelectorAll('.swiper-slide.next').forEach((item) => {
                item.style.transform = `translateX(${swiper.translate}px)`
            })
            if (swiper.slides[swiper.realIndex].classList.contains('prev')) {
                swiper.slides[swiper.realIndex].classList.remove('next')
                swiper.slides[swiper.realIndex].classList.remove('prev')
            }
        }
    },
    speed: 1000,
    allowTouchMove: false,
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
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
        1440: {
            slidesPerView: 'auto',
            spaceBetween: 0,
        },
    },
})

let swiperAdvantages = new Swiper('.advantages-items', {
    modules: [Pagination],
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop: false,
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        991: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1441: {
            slidesPerView: 3,
            spaceBetween: 60,
        },
    },
})