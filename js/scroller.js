document.addEventListener("DOMContentLoaded", function () {
    const scrollLinks = document.querySelectorAll(".scroll-link");

    scrollLinks.forEach(function (link) {
        link.addEventListener("click", function (e) {
            e.preventDefault(); // Voorkom het standaardgedrag van de link

            const targetId = this.getAttribute("href"); // Krijg het doel-ID met het "#" teken
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Scroll naar het doelelement met een vloeiende animatie
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });
});
