function nightmode() {
    let element = document.body
    element.classList.toggle("dark-mode")
    document.getElementById("home").style.background = "white";

}

function quiz() {
    let checkbox = document.getElementById("answer");
    let text = document.getElementById("text");
    let wrongtext = document.getElementById("wtext");
    let wronganswer = document.getElementById("incorrect1");
    let wronganswer2 = document.getElementById("incorrect2");
    let img = document.getElementById("correctimage")
    if (checkbox.checked == true) {
        text.style.display = "block"
        img.style.display = "block";
    } else if (wronganswer.checked == true || wronganswer2.checked == true) {
        text.style.display = "none"
        wrongtext.style.display = "block"
        img.style.display = "none"
    } else {
        text.style.display = "none"
        wrongtext.style.display = "none"
        img.style.display = "none"
    }


}
