var link = document.querySelector(".shop-contacts .button");
var popup = document.querySelector(".write-us");
var close = document.querySelector(".popup_close");
var form = popup.querySelector("form");

var user_name = popup.querySelector("[name=write-us_name]");
var user_email = popup.querySelector("[name=write-us_email]");
var user_text = popup.querySelector("[name=write-us_text]");

var isStorageSupport = true;
var storage_name = "";
var storage_email = "";

try{
    storage_name = localStorage.getItem("user_name");
    storage_email = localStorage.getItem("user_email");
}
catch (err){
    isStorageSupport = false;
}

link.addEventListener("click", function(evt){
    evt.preventDefault();

    popup.classList.add("popup_active");

    if (storage_name && storage_email){
        user_name.value = storage_name;
        user_email.value = storage_email;
        user_text.focus();
    }
    else{
        user_name.focus();
    }
});

form.addEventListener("submit", function(evt){
    if (!user_name.value || !user_email.value || !user_text.value){
        evt.preventDefault();

        popup.classList.remove("popup_error");
        popup.offsetWidth = popup.offsetWidth;
        popup.classList.add("popup_error");
    }
    else{
        if (isStorageSupport){
            localStorage.setItem("user_name", user_name.value);
            localStorage.setItem("user_email", user_email.value);
        }
    }
});

close.addEventListener("click", function(evt){
    evt.preventDefault();

    popup.classList.remove("popup_active");
    popup.classList.remove("popup_error");
});

window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27){

        if (popup.classList.contains("popup_active")){
            evt.preventDefault();

            popup.classList.remove("popup_active");
            popup.classList.remove("popup_error");
        }
    }
});
