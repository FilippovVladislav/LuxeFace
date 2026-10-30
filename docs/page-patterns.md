# Паттерны страниц

## Общая страница

Все полноценные страницы используют include-каркас из `src/home.html`: `_head` → `.wrapper` → `_header` → `<main class="page">` → `_footer` → `_popup` → `_js`. Берите его как стартовую структуру.

## Страницы зон/коррекций

Самый повторяемый шаблон — `src/upper-third-face.html`, `middle-third-face.html`, `around-eyes.html`, `around-lips.html`, `upper-eyelid.html`, `eyebrow-area.html`, `neck-area.html`, `correction-eye.html`, `correction-forehead.html`, `correction-temporal-zone.html`.

Подтверждённая последовательность: `.section-start` hero → intro `.section_gray-mobile` → методика/схемы (`.swiper-schema-position`) → content/results → крупный light section → advantages/how-to → `@@include('html/_main.htm',{})` → footer/popups. Содержимое и изображения различаются, а структура и классы повторяются. Новый материал о зоне следует строить от ближайшего из этих файлов, а не от home.

## Главная

`src/home.html` — единственная насыщенная landing-page: hero/интерактивные схемы LuxeFace/LuxeBody, result/reviews/news/blog. Использует `.model*`, `.kinds*`, `.result*`, `.reviews*`, `.news*` и несколько Swiper-конфигураций. Служит источником разметки для соответствующего блока, но не как шаблон обычной внутренней страницы.

## Product/model

- `src/model.html`: model-specific hero, зона через `@@include('html/_zone.htm',{})`, advantages и callback form (`.callback-form-model*`).
- `src/products.html`: каталог и related product patterns (`.similar-products*`, `.kinds*`).

## Контентные страницы

- `src/content.html`: article/content shell `.content-page`.
- `src/faq.html`: FAQ/content layout `.content-section`.
- `src/author.html`: авторский профиль.
- `src/blog.html`: на момент аудита содержит только shared header/footer/popups без `<main>`; не используйте как образец разметки страницы.
- `src/index.html`: служебная разводящая страница.

## Выявленные дублирования и путь консолидации

1. **Высокий приоритет:** десять zone/correction HTML повторяют большой каркас и многие одинаковые блоки вручную. Сейчас параметризован только общий хвост `_main.htm`. При плановом развитии выделить отдельные partials для hero, schema slider, results/advantages и передавать данные через include-параметры; делать это отдельным контролируемым рефакторингом, не смешивая с добавлением контента.
2. **Средний приоритет:** формы callback повторены в `_popup.htm`, footer и header overlay. Внешний вид контекстно различается (в popup он переопределяется), поэтому не заменять вслепую; сначала выделить согласованный form partial или зафиксировать вариации.
3. **Средний приоритет:** `.title-54`/`.title-40` и utilities `.size-*` создают два способа оформлять заголовок. Не менять текущий код в рамках задач страниц; при консолидации выбрать один документированный heading pattern после visual regression.

Вывод о дублировании основан на реальных последовательностях `<section>` и повторном подключении одинаковых partials. Сходство контента само по себе не повод для автоматического рефакторинга.
