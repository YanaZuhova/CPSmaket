let popup = document.querySelector(".modal2");
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




let pop = document.querySelector(".modal3");
let popupBut = document.querySelector(".btn3");
let iconBut = document.querySelector(".btn--down3");
let textBut = document.querySelector(".btn--text3");

popupBut.addEventListener("click", function () {
    if (iconBut.classList.contains("btn--down3")) {
       
        pop.classList.add('modal--show3');
        iconBut.classList.add("btn--up3");
        iconBut.classList.remove("btn--down3");
        textBut.textContent = "Скрыть";
    } else if (iconBut.classList.contains("btn--up3")) {
        
        pop.classList.remove('modal--show3');
        iconBut.classList.add("btn--down3");
        iconBut.classList.remove("btn--up3");
        textBut.textContent = "Показать все";
    }
});
