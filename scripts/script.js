let selectLanguage = document.querySelector("#button-language");
let navDropDown = document.querySelector(".dialog");

let burgerIcon = document.querySelector(".burger-icon");
let burgerMenu = document.querySelector(".burger-menu");
let burgerClose = document.querySelector(".close-burger")

let body = document.querySelector("body");


selectLanguage.addEventListener("click", function() {
    navDropDown.classList.toggle("active");
});



    burgerIcon.addEventListener("click", function() {
    burgerMenu.classList.toggle("active-menu");
/*     if (burgerMenu.classList.contains("active-menu")) {
        burgerClose.style.display = "block";
        burgerIcon.style.display = "none";
    } else {
        burgerClose.style.display = "none";
        burgerIcon.style.display = "block";
    }  */
}) 

window.addEventListener('click', function(e){
    if (!burgerMenu.contains(e.target) && (!burgerIcon.contains(e.target))) {
        burgerMenu.classList.remove("active-menu");
        /* burgerIcon.style.color = "white"; */
    } 
})




document.addEventListener("DOMContentLoaded", function() {
    let aktuell = document.querySelector("#aktuell");
    let trainings = document.querySelector("#trainings");
    let interclub = document.querySelector("#interclub");

 
    window.addEventListener("scroll", function() {
        let postionFromTopAktuell = aktuell.getBoundingClientRect().top;
        let postionFromTopTrainings = trainings.getBoundingClientRect().top;
        let postionFromTopInterclub = interclub.getBoundingClientRect().top;


        if (postionFromTopAktuell - window.innerHeight < 0) {
            aktuell.style.opacity = 1;
            aktuell.style.transform = "translateY(0)";
        } 

        if (postionFromTopTrainings - window.innerHeight < 0) {
            trainings.style.opacity = 1;
            trainings.style.transform = "translateY(0)";
        }

        if (postionFromTopInterclub - window.innerHeight < 0) {
            interclub.style.opacity = 1;
            interclub.style.transform = "translateY(0)";
        }
    


    })
})








