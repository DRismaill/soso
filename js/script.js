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










// Voeg een click-eventlistener toe aan de dropdown-knop
document.getElementById("dropdown-button-id").addEventListener("click", function () {
    // Haal een referentie naar het dropdown-menu-element op
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Toggle de "active" klasse om het menu te tonen/verbergen
    dropdownMenu.classList.toggle("active");

    // Als het menu actief is, start de animatie voor elk <li> element
    if (dropdownMenu.classList.contains("active")) {
        animateDropdownItems();
    } else {
        // Als het menu niet actief is, voer de omgekeerde animatie uit
        reverseAnimateDropdownItems();
    }
});

// Functie om de animatie voor de <li> elementen uit te voeren
function animateDropdownItems() {
    // Haal een referentie naar het dropdown-menu-element op
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Haal een lijst van alle <li> elementen in het dropdown-menu
    const dropdownItems = dropdownMenu.querySelectorAll("li");

    // Begin met het verbergen van alle <li> elementen
    dropdownItems.forEach((item, index) => {
        item.style.transition = "none";
        item.style.transform = "translateY(-100%)";
        item.style.opacity = 0;
    });

    // Voer de animatie uit voor elk <li> element
    dropdownItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            item.style.transform = "translateY(0)";
            item.style.opacity = 1;
        }, index * 100); // Vertraging op basis van de volgorde van de elementen
    });
}

// Functie om de omgekeerde animatie uit te voeren
function reverseAnimateDropdownItems() {
    // Haal een lijst van alle <li> elementen in het dropdown-menu
    const dropdownItems = document.querySelectorAll("#dropdown-menu li");

    // Voer de omgekeerde animatie uit voor elk <li> element
    dropdownItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transition = "transform 0.5s ease-in-out, opacity 0.5s ease-in-out";
            item.style.transform = "translateY(-100%)";
            item.style.opacity = 0;
        }, index * 100); // Vertraging op basis van de volgorde van de elementen
    });
}



