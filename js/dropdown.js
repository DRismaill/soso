document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdown-button-id");
    const dropdownMenu = document.getElementById("dropdown-menu");
    const dropdownOptions = document.querySelectorAll(".dropdown-option");

    // Functie om de animatie voor de <li> elementen uit te voeren
    function animateDropdownItems() {
        dropdownOptions.forEach(function (option, index) {
            option.style.transitionDelay = `${0.1 * index}s`;
            option.classList.add("active");
        });
    }

    // Functie om de omgekeerde animatie uit te voeren
    function reverseAnimateDropdownItems() {
        dropdownOptions.forEach(function (option, index) {
            option.style.transitionDelay = "0s";
            option.classList.remove("active");
        });
    }

    // Toon/verberg het dropdown-menu bij het klikken op de button
    dropdownButton.addEventListener("click", function () {
        if (dropdownMenu.style.display === "block") {
            // Voer de omgekeerde animatie uit voor elk <li> element
            reverseAnimateDropdownItems();
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
            // Voer de animatie uit voor elk <li> element
            animateDropdownItems();
        }
    });

    // Sluit het dropdown-menu als ergens anders wordt geklikt
    document.addEventListener("click", function (event) {
        if (event.target !== dropdownButton && event.target !== dropdownMenu) {
            // Voer de omgekeerde animatie uit voor elk <li> element
            reverseAnimateDropdownItems();
            dropdownMenu.style.display = "none";
        }
    });

    // Voeg klikgedrag toe aan de dropdown-opties
    dropdownOptions.forEach(function (option) {
        option.addEventListener("click", function () {
            // Verander de tekst van de dropdown-button naar de geselecteerde optie
            dropdownButton.textContent = option.textContent;
            // Sluit het dropdown-menu
            dropdownMenu.style.display = "none";
        });
    });
});




document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdown-button-id");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Toon/verberg het dropdown-menu bij het klikken op de button
    dropdownButton.addEventListener("click", function () {
        if (dropdownMenu.style.maxHeight) {
            dropdownMenu.style.maxHeight = null; // Terug naar oorspronkelijke hoogte
        } else {
            dropdownMenu.style.maxHeight = dropdownMenu.scrollHeight + "px"; // Toon het menu met animatie
        }
    });

    // Sluit het dropdown-menu als ergens anders wordt geklikt
    document.addEventListener("click", function (event) {
        if (event.target !== dropdownButton && event.target !== dropdownMenu) {
            dropdownMenu.style.maxHeight = null; // Sluit het menu en verwijder de animatie
        }
    });

    // Voeg klikgedrag toe aan de dropdown-opties (blijft hetzelfde)
});



