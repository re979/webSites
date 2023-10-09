const hotelsBtn = document.querySelector(".btn-transparent");
const popup = document.querySelector(".modal");
const close = popup.querySelector(".modal__close");

hotelsBtn.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
});

close.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
});

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (popup.classList.contains("modal__show")) {
            evt.preventDefault();
            popup.classList.remove("modal__show");
        }
    }
});
