document.addEventListener("DOMContentLoaded", function() {
    const currentLocation = location.href;
    const menuItem = document.querySelectorAll('.navigation__link');
    const menuLenght = menuItem.length
    for (let i = 0; i<menuLenght; i++) {
        if (menuItem[i].href === currentLocation) {
            menuItem[i].className = "active navigation__link";
        }
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const startTime = performance.now();
    window.addEventListener("load", function() {
        const endTime = performance.now();
        const loadTime = (endTime - startTime).toFixed(1);
        const loadTimeElement = document.getElementById("load__time");
        loadTimeElement.textContent = `Время загрузки страницы: ${loadTime} мс.`;
    });
});