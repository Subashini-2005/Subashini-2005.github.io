
const text = "Embedded Systems | IoT | PCB Design | Robotics";

let index = 0;

function typingEffect(){

    if(index < text.length){

        document.getElementById("typing").innerHTML += text.charAt(index);

        index++;

        setTimeout(typingEffect,100);

    }

}

typingEffect();


// Scroll animation

const cards = document.querySelectorAll(".card");

window.addEventListener("scroll",()=>{

    cards.forEach(card=>{

        let position = card.getBoundingClientRect().top;

        let screen = window.innerHeight;

        if(position < screen - 100){

            card.style.opacity = "1";
            card.style.transform = "translateY(0)";

        }

    });

});
