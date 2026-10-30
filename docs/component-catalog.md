# Каталог компонентов

Это каталог HTML/CSS-компонентов, а не React API. «Варианты» — дополнительные классы и data-атрибуты, подтверждённые в исходниках.

| Компонент | Файлы | Реальная разметка/API и когда применять | Похожие |
| --- | --- | --- | --- |
| Каркас страницы | `src/html/_head.htm`, `_header.htm`, `_footer.htm`, `_popup.htm`, `_js.htm` | Подключайте через `@@include('html/_header.htm',{})`; header/footer/popups уже повторно используются страницами. Использовать для любой обычной страницы. | — |
| Контейнер и секция | `src/scss/style.scss`, `src/scss/base/null.scss` | `<section class="section pt-120 pb-0"><div class="container">…`; варианты `.section_gray`, `.section_gray-mobile`, utilities padding. | Все page sections |
| Кнопка | `src/scss/base/forms/button.scss` | `<a class="button" …>…</a>` или `<button class="button">…</button>`; вариант `button-white`, дополнение `button-model`, состояние `disabled`. | Header CTA `.button-header` |
| Поле и согласие | `src/scss/base/forms/{forms,input,_check}.scss` | `<fieldset class="form-item"><input class="form-input" type="text"></fieldset>`; чекбокс: `<div class="check-element"><input class="input-absolute" id="x" type="checkbox"><label for="x"><span class="check-main icon" style="--icon: url('../img/icon/check.svg')"></span>…</label></div>`. | `.form-radio` в `base/popup.scss` |
| Popup | `src/html/_popup.htm`, `src/scss/base/popup.scss`, `src/js/libs/popup.js` | Popup имеет `id`, `.popup > .popup__wrapper > .popup__content`; открыть элементом `data-popup-modal="#modal-callback"`, закрыть `[data-close]`. В partial есть callback, success, seminar, doctor и другие конкретные popup. | Header contact overlay |
| Header / mobile menu | `src/html/_header.htm`, `src/scss/header.scss`, `src/js/files/functions.js`, `script.js` | Существующий singleton partial. `.header-burger.icon` и `.header-block` участвуют в поведении menu; не копируйте фрагменты отдельно. | Footer |
| Footer + form поиска | `src/html/_footer.htm`, `src/scss/footer.scss` | Существующий singleton partial с `.footer-search` и стандартными form primitives. | Popup forms |
| News/blog card | `src/scss/common.scss`, реальное использование `src/home.html` | `.news-item` содержит `.news-item__pic`, `.news-item__date`, `.news-item__content`, `__label`, `__title`, `__time`, `.button`; вариант `.news-item-red`. Применять для новостей/статей в слайдере. | `.swiper-news`, `.swiper-blog` |
| Review card | `src/scss/common.scss`, `src/home.html` | `.reviews-slider` с `__pic`, `__name`, `__position`, `__text`, внутри Swiper `.swiper-reviews`. Использовать для отзывов. | Result card |
| Advantage card/list | `src/scss/common.scss`, `src/model.html`, procedure pages | `.advantages-items`/`.advantages-slider` + `.advantages-item`; элементы `__pic`, `__title`, `-line`; вариант `.advantages-item_slide`. На mobile поддерживается Swiper. | `.advantages-block` |
| Result card | `src/scss/common.scss`, `src/home.html` | `.result` / `.swiper-result` с `.result-item__pic`, `__title`, `__name`, `__description`; применяется для изображений результатов. | News/reviews |
| Slider navigation | `src/scss/common.scss`, `src/js/files/sliders.js` | Слайдер должен иметь реально поддерживаемый root-класс: `.swiper-reviews`, `.swiper-result`, `.swiper-news`, `.swiper-blog`, `.similar-products-slider`, `.kinds-slider`, `.swiper-schema-position`, `.advantages-items`. Стрелки — `.arrow-left/.arrow-right`; не создавайте произвольный root без JS init. | Pagination `.swiper-pagination` |
| Zone hero + schema slider | `src/scss/common.scss`, `src/js/files/sliders.js`, страницы зон, например `src/correction-forehead.html` | `.section-start` использует `start-*`; методика — `.swiper-schema-position` с `swiper-schema__*`. Применять для новой страницы зоны только после сверки с близкой зоной. | `_zone.htm` — другая интерактивная SVG-карта |
| Common bottom sections | `src/html/_main.htm`, `src/scss/common.scss` | Большой reusable partial, добавляемый на страницах зон через `@@include('html/_main.htm',{})`; содержит карту зон, результаты, SMI, отзывы и другие нижние блоки. | `_zone.htm` |

Не называйте CSS-классы «props»: шаблоны не параметризованы. Параметры существующих partials не обнаружены — все вызовы используют `{}`.
