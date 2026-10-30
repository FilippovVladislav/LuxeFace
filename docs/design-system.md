# Подтверждённая дизайн-система

Источник токенов — `src/scss/variables.scss`; базовые utilities — `src/scss/base/null.scss`. В CSS custom properties записаны SCSS-переменные буквально (`--color-black: $black`), поэтому в новом CSS используйте SCSS-токены, а не эти custom properties.

## Цвет и шрифты

| Роль | Значение |
| --- | --- |
| основной текст | `$black` / `#333333` |
| тёмные варианты | `#2F3133`, `#383838`, `#383B3D` |
| фон | `#F2EFED`, `#FAF7F5`; `.section_gray` использует `#F7F7F7` |
| акцент | `$red` `#E5252D`; hover `$red-2` `#CC2128` |
| светлый | `#FFFFFF` |

По умолчанию — `RFDewiExtended`, 18px. Большинство секций (`.section`) переводит текст на Montserrat. Локально подключены RFDewiExtended 300/400/600/700, RFDewiExpanded 900 и Montserrat 400/500/600/700 (`src/scss/fonts/fonts.scss`).

Размерные utilities: `.size-160`, `100`, `74`, `54`, `50`, `40`, `34`, `30`, `24`, `20`, `16`, `14`, `13`, `12`; веса: `.fw-900`, `.fw-700`, `.fw-600` (из `common.scss`), `.fw-500`, `.fw-300`. Для заголовков также есть `title-54`, `title-40`, `.title-line` и `.page-line`.

## Сетка, ритм и adaptive

- `.container`: максимум `1840px` (`1920 - 80px`), горизонтальный padding `80px`; при ширине <=1150px — `20px`.
- Минимальная ширина документа: 360px. Базовые breakpoints: 1700px (`$pc`), 991.98px (`$tablet`), 767.98px (`$mobile`), 479.98px (`$mobileSmall`). Фактически многие блоки используют 991px и 1400px.
- Существующая шкала секций: `pt-120`, `pt-160`, `pt-240`, `pb-160`, `pb-280`, и отступы `mb-10/20/30/40/60/80/88/100`, `mt-160`. На <=991px крупные секционные отступы обычно становятся 40px (для `pb-280` — 80px).
- Типовой responsive-переход: flex/grid в одну колонку, скрытие desktop media и отдельная mobile-разметка; не полагайтесь на автоматическое перестроение блока без проверки его media rules.

## Повторные UI-паттерны

- **Кнопка**: `.button` — красная, uppercase, 60px и `border-radius: 30px`; <=767.98px — ширина 100%, высота 44px. Вариант `.button-white`; `.button-model` добавляет верхний отступ. `disabled` рисует индикатор.
- **Поля**: `fieldset.form-item > input/textarea.form-input`. В базовом виде поле рассчитано на тёмный фон (белый текст и граница); внутри `.popup` переопределяется на чёрный. Ошибка: `.form-item.error`; чекбокс: `.check-element > input.input-absolute + label > .check-main.icon`.
- **Секции**: `.section` + utilities отступов, `.section_gray`, `.section_gray-mobile`, `.container`; центрированный заголовок часто сочетает `size-54 line-h-1-2 text-uppercase text-center title-line`.
- **Карточки/слайдеры**: используйте уже стилизованные `.news-item`, `.reviews-slider`, `.advantages-item`, `.result-item` только с их настоящей BEM-разметкой из каталога. Стрелки — `.swiper-arrow.arrow-left|arrow-right` с icon CSS variable.
- **Иконки**: `.icon` использует CSS mask из inline `style="--icon: url('../img/icon/…svg')"`; псевдоэлемент создаёт картинку. Для обычных изображений применяются `<img src="img/...">`. Assets хранятся в `src/img`; не дублируйте SVG/PNG без необходимости.

В проекте нет единого формального token-map для радиусов, теней или сетки: значения фиксированы в правилах блоков. Берите их из ближайшего реального аналога, а не изобретайте глобальные токены.
