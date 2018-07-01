var tab = document.querySelectorAll(".info-tab");
var infoButton = document.querySelectorAll(".info_button");

for (var i = 0; i < infoButton.length; i++){

    infoButton[i].addEventListener('click', function(e) {

        e.target.classList.add("info_button-current");
        var data = e.target.getAttribute("data-info");

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