const words1 = ["software ", "full-stack "];
const words2 = ["Breda ", "Roosendaal "];

let currentWordIndex1 = 0;
let currentWordIndex2 = 0;
let currentCharIndex1 = 0;
let currentCharIndex2 = 0;
let isDeleting = false;

function type() {
    const word1Element = document.getElementById("word1");
    const word2Element = document.getElementById("word2");
    const word3Element = document.getElementById("word3");
    const word4Element = document.getElementById("word4");
    const word5Element = document.getElementById("word5");

    const currentWord1 = words1[currentWordIndex1];
    const currentWord2 = words2[currentWordIndex2];

    if (!isDeleting) {
        if (currentCharIndex1 < currentWord1.length) {
            word1Element.textContent += currentWord1.charAt(currentCharIndex1);
            currentCharIndex1++;
        }
        if (currentCharIndex2 < currentWord2.length) {
            word4Element.textContent += currentWord2.charAt(currentCharIndex2);
            currentCharIndex2++;
        }
    } else {
        if (currentCharIndex1 > 0) {
            word1Element.textContent = currentWord1.substring(0, currentCharIndex1 - 1);
            currentCharIndex1--;
        }
        if (currentCharIndex2 > 0) {
            word4Element.textContent = currentWord2.substring(0, currentCharIndex2 - 1);
            currentCharIndex2--;
        }
    }

    if (currentCharIndex1 === currentWord1.length && currentCharIndex2 === currentWord2.length) {
        isDeleting = true;
        setTimeout(() => {
            isDeleting = false;
            currentWordIndex1 = (currentWordIndex1 + 1) % words1.length;
            currentWordIndex2 = (currentWordIndex2 + 1) % words2.length;
        }, 1000);
    }

    const typingSpeed = isDeleting ? 50 : 150;
    setTimeout(type, typingSpeed);
}

document.addEventListener("DOMContentLoaded", function () {
    type();
});
















