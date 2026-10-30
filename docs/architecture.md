# Архитектура

## Стек и сборка

- Статический HTML-сайт на Gulp 4 + Webpack 5, ES modules и SCSS (`package.json`, `gulpfile.js`). Framework-компонентов, TypeScript и CSS Modules нет.
- HTML-страницы лежат прямо в `src/*.html`; `file-include-webpack-plugin-replace` разворачивает `@@include` из `src/html` (`config/webpack.dev.js`).
- Точка входа JS — `src/js/app.js`, стилей — импорт `src/scss/style.scss` в ней. Gulp обрабатывает CSS/assets и финальные HTML (`config/gulp-tasks`).

## Директории

| Путь | Назначение |
| --- | --- |
| `src/*.html` | Страницы: home, зоны/процедуры, products, content, faq, author и index. |
| `src/html` | Реальные shared partials: `_head.htm`, `_header.htm`, `_footer.htm`, `_popup.htm`, `_js.htm`; `_main.htm` — крупный общий блок; `_zone.htm` — inline SVG-карта. |
| `src/scss` | `style.scss` — единая точка импорта; `common.scss` — большинство блоков; `header.scss`, `footer.scss`, `home.scss`; `base` — reset, utilities, forms и popup. |
| `src/js` | `app.js` подключает поведение; `files` — проектные модули, `libs` — локальные vendor-модули. |
| `src/img`, `src/fonts`, `src/files` | Исходные изображения/SVG, шрифты и копируемые статические файлы. |
| `config` | Gulp/Webpack-конфигурация. `dist` — результат сборки, не источник. |

## Соглашения

- Блоки именуются BEM-подобно: `.news-item`, `.news-item__title`; модификаторы — суффиксы/дополнительные классы, например `.news-item-red`, `.section_gray`, `.button-white`.
- Общая оболочка страницы: `.wrapper > header + main.page + footer`. Подключайте `_head`, `_header`, `_footer`, `_popup`, `_js` в таком же порядке, как в существующих страницах.
- Путь в исходной HTML-разметке — от будущего `dist`: `img/...`; в SCSS — относительный к файлу, например `url("../img/...")`.
- JS ищет элементы по классам и атрибутам. Не переименовывайте без обновления потребителя: `.icon-menu`, `data-popup-modal`, `[data-gallery]`, `.phone-input`, классы Swiper.
- Состояние — DOM/classes/cookies, а не глобальный store. `window.flsModules` хранит экземпляры popup и других подключённых модулей (`src/js/files/modules.js`).

## Импорты и поведение

- Добавляя стили, импортируйте новый SCSS partial из `src/scss/style.scss` только когда он нужен сайту целиком; page-specific правила существующего проекта сейчас находятся в `common.scss`/`home.scss`.
- Подключённые в `app.js` возможности: меню, popup, Swiper, lazyload, Fancybox, телефонные поля, content tables, проектный script и blog popup. Галерея/табы/спойлеры/валидация присутствуют как код, но их вызовы закомментированы.
- Слайдеры и их обязательная HTML-структура определены в `src/js/files/sliders.js`; не добавляйте классы `.swiper-*` без проверки инициализации.

## Команды

| Команда | Назначение |
| --- | --- |
| `npm run dev` | Gulp + webpack-dev-server (8080). |
| `npm run build` | Production-сборка. |
| `npm run lint` | ESLint по `src/**/*.js`. |
| `npm run devbuild` | Сборка без генерации WebP. |
| `npm run sprite` | Генерация SVG-sprite; исходная папка нужна только при наличии `src/svgicons`. |

`npm test` намеренно завершается ошибкой: тестов в скриптах нет.
