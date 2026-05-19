const typingText = document.querySelector(".typing");

const words = [

    "Information Technology Student",

    "Aspiring Web Developer",

    "Programming Learner",

    "Tech Enthusiast"

];

let wordIndex = 0;
let charIndex = 0;

function typeEffect() {

    let currentWord = words[wordIndex];

    typingText.textContent =
        currentWord.substring(0, charIndex);

    charIndex++;

    if (charIndex > currentWord.length) {

        wordIndex++;

        charIndex = 0;

        if (wordIndex >= words.length) {

            wordIndex = 0;

        }

    }

    setTimeout(typeEffect, 180);

}

typeEffect();