var slider = document.querySelectorAll(".gadget_slide");
var button = document.querySelectorAll(".gadget_toggle");

for (var i = 0; i < button.length; i ++){

    button[i].addEventListener('click', function(e) {

        e.target.classList.add("current-toggle");
        var data = e.target.getAttribute("data-gadget");

        for (var j = 0; j < slider.length; j ++){
            if (slider[j].getAttribute("data-gadget") == data){
                slider[j].classList.remove("visually-hidden");
            }
            else {
                slider[j].classList.add("visually-hidden");
                button[j].classList.remove("current-toggle");
            }
        }
    });
}