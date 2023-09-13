document.addEventListener("DOMContentLoaded", function () {
    const dropdownButton = document.getElementById("dropdown-button-id");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Toon/verberg het dropdown-menu bij het klikken op de button
    dropdownButton.addEventListener("click", function () {
        if (dropdownMenu.style.display === "block") {
            dropdownMenu.style.display = "none";
        } else {
            dropdownMenu.style.display = "block";
        }
    });

    // Sluit het dropdown-menu als ergens anders wordt geklikt
    document.addEventListener("click", function (event) {
        if (event.target !== dropdownButton && event.target !== dropdownMenu) {
            dropdownMenu.style.display = "none";
        }
    });

    // Voeg klikgedrag toe aan de dropdown-opties
    const dropdownOptions = document.querySelectorAll(".dropdown-option");
    dropdownOptions.forEach(function (option) {
        option.addEventListener("click", function () {
            // Verander de tekst van de dropdown-button naar de geselecteerde optie
            dropdownButton.textContent = option.textContent;
            // Sluit het dropdown-menu
            dropdownMenu.style.display = "none";
        });
    });
});
