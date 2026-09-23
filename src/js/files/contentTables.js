const wrapContentTables = () => {
    document.querySelectorAll('.content table').forEach((table) => {
        if (table.parentElement.classList.contains('content-table-wrap')) return;

        const wrapper = document.createElement('div');
        wrapper.className = 'content-table-wrap';
        wrapper.setAttribute('tabindex', '0');
        wrapper.setAttribute('aria-label', 'Таблица с горизонтальной прокруткой');

        table.parentNode.insertBefore(wrapper, table);
        wrapper.appendChild(table);
    });
};

wrapContentTables();
