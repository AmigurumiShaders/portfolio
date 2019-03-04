"use strict";

let seeMoreArray = document.querySelectorAll(".seeMore");

for (const button of seeMoreArray) {
    button.onclick = function(e){
        button.parentElement.parentElement.style.maxHeight = "60em;";
        button.parentElement.parentElement.style.overflow = "scroll";
    }
}
