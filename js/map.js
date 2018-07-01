var mapLink = document.querySelector(".map_img");
var mapPopup = document.querySelector(".map");
var mapClose = mapPopup.querySelector(".popup_close");

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();

    mapPopup.classList.add("popup_active");
});

mapClose.addEventListener("click", function(evt){
    evt.preventDefault();

    mapPopup.classList.remove("popup_active");
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27){

        if (mapPopup.classList.contains("popup_active")){
            evt.preventDefault();

            mapPopup.classList.remove("popup_active");
            mapPopup.classList.remove("popup_error");
        }
    }
});


