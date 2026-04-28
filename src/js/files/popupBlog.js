function getCookie(name) {
    const matches = document.cookie.match(
        new RegExp(
            "(?:^|; )" +
            name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") +
            "=([^;]*)"
        )
    );

    return matches ? decodeURIComponent(matches[1]) : null;
}

function setCookie(name, value, maxAgeSeconds) {
    document.cookie =
        encodeURIComponent(name) +
        "=" +
        encodeURIComponent(value) +
        "; path=/" +
        "; max-age=" +
        maxAgeSeconds;
}


function isBlogPage() {
    const path = window.location.pathname.toLowerCase();

    return (
        path.includes("/blog/") ||
        path.endsWith("/blog") ||
        path.endsWith("/blog.html")
    );
}

function initBlogPopupByTimer() {
    if (!isBlogPage()) return;
    if (getCookie("blog")) return;

    setTimeout(function () {
        if (getCookie("blog")) return;
        if (!window.flsModules || !window.flsModules.popup) return;

        window.flsModules.popup.open("#modal-model");
        setCookie("blog", "shown", 365);
    }, 10000);
}
initBlogPopupByTimer();