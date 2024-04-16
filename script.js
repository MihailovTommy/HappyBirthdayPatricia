document.getElementById("text-container").addEventListener("click", function() {
    var link = document.getElementById("invisible-link");
    if (link) {
        link.removeAttribute("hidden"); // Делаем скрытую ссылку видимой
        link.click(); // Эмулируем клик по ссылке
        link.setAttribute("hidden", ""); // Скрываем ссылку снова после клика
    }
});
