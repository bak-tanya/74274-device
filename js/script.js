var link = document.querySelector(".shop-contacts .button");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".popup_close");
var form = popup.querySelector("form");

var userName = popup.querySelector("[name=write-us_name]");
var userEmail = popup.querySelector("[name=write-us_email]");
var userText = popup.querySelector("[name=write-us_text]");

var isStorageSupport = true;
var storageName = "";
var storageEmail = "";

var ESCAPE_KEYCODE = 27;

try{
    storageName = localStorage.getItem("userName");
    storageEmail = localStorage.getItem("userEmail");
}
catch(err){
    isStorageSupport = false;
}

link.addEventListener("click", function(evt){
    evt.preventDefault();

    popup.classList.add("popup_active");

    if (storageName && storageEmail){
        userName.value = storageName;
        userEmail.value = storageEmail;
        userText.focus();
    }
    else{
        userName.focus();
    }
});

form.addEventListener("submit", function(evt){
    if (!userName.value || !userEmail.value || !userText.value){
        evt.preventDefault();

        popup.classList.remove("popup_error");

        setTimeout(function() {
            popup.classList.add("popup_error")
        }, 0);

    }
    else{
        if (isStorageSupport){
            localStorage.setItem("userName", userName.value);
            localStorage.setItem("userEmail", userEmail.value);
        }
    }
});

close.addEventListener("click", function(evt){
    evt.preventDefault();

    popup.classList.remove("popup_active");
    popup.classList.remove("popup_error");
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === ESCAPE_KEYCODE){

        if (popup.classList.contains("popup_active")){
            evt.preventDefault();

            popup.classList.remove("popup_active");
            popup.classList.remove("popup_error");
        }
    }
});

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
    if (evt.keyCode === ESCAPE_KEYCODE){

        if (mapPopup.classList.contains("popup_active")){
            evt.preventDefault();

            mapPopup.classList.remove("popup_active");
            mapPopup.classList.remove("popup_error");
        }
    }
});

var slider = document.querySelectorAll(".gadget_slide");
var button = document.querySelectorAll(".gadget_toggle");

for (var i = 0; i < button.length; i++){

    button[i].addEventListener('click', function(e) {

        var chosenButton = e.target;
        chosenButton.classList.add("current-toggle");
        var data = chosenButton.getAttribute("data-gadget");

        for (var j = 0; j < slider.length; j++){
            if (slider[j].getAttribute("data-gadget") === data){
                slider[j].classList.remove("visually-hidden");
            }
            else {
                slider[j].classList.add("visually-hidden");
                button[j].classList.remove("current-toggle");
            }
        }
    });
}

var tab = document.querySelectorAll(".info-tab");
var infoButton = document.querySelectorAll(".info_button");

for (var m = 0; m < infoButton.length; m++){

    infoButton[m].addEventListener('click', function(e) {

        var chosenInfoButton = e.target;

        chosenInfoButton.classList.add("info_button-current");
        var data = chosenInfoButton.getAttribute("data-info");

        for (var j = 0; j < slider.length; j++){
            if (tab[j].getAttribute("data-info") === data){
                tab[j].classList.remove("visually-hidden");
            }
            else {
                tab[j].classList.add("visually-hidden");
                infoButton[j].classList.remove("info_button-current");
            }
        }
    });
}