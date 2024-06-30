let popup = document.querySelector(".modal");
let popupButton = document.querySelector(".btn");
let iconButton = document.querySelector(".btn--down");
let textButton = document.querySelector(".btn--text");

popupButton.addEventListener("click", function () {
    if (iconButton.classList.contains("btn--down")) {
       
        popup.classList.add('modal--show');
        iconButton.classList.add("btn--up");
        iconButton.classList.remove("btn--down");
        textButton.textContent = "Скрыть";
    } else if (iconButton.classList.contains("btn--up")) {
        
        popup.classList.remove('modal--show');
        iconButton.classList.add("btn--down");
        iconButton.classList.remove("btn--up");
        textButton.textContent = "Показать все";
    }
});

