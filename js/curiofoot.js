
document.addEventListener("DOMContentLoaded", function() {
    var header = document.querySelector("header");
    var headerP = header.querySelector("p");
    var span = headerP.querySelector("span");

    window.addEventListener("scroll", function() {
        if (window.scrollY > 0) {
            header.classList.add("header-animated");
            headerP.style.color = "white";
            span.style.background = "linear-gradient(to bottom, #FFFFFF 50%, #FFCC01 50%)";
            span.style.transition = "background 0.3s";
            headerP.querySelector("a").style.color = "#FFCC01";
        } else {
            header.classList.remove("header-animated");
            headerP.style.color = "#FFCC01";
            span.style.background = "linear-gradient(to bottom, #FFCC01 50%, #03357C 50%)";
            span.style.transition = "background 0.3s";
            headerP.querySelector("a").style.color = "#03357C";
        }
    });

    var navLinks = document.querySelectorAll('.nav-1 svg, .nav-2 svg, .nav-3 svg');

    window.addEventListener('scroll', function () {
        // Controleer of de pagina is gescrolld
        if (window.scrollY > 0) {
            // Verander de kleur van de SVG-pictogrammen naar geel (#FFCC01)
            navLinks.forEach(function (icon) {
                icon.style.fill = '#FFCC01';
            });
        } else {
            // Als de pagina niet is gescrolld, behoud de oorspronkelijke kleur (#292D32)
            navLinks.forEach(function (icon) {
                icon.style.fill = '#292D32';
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    // ... (bestaande code hierboven)

    var navLinks = document.querySelectorAll('.nav-1 svg, .nav-2 svg, .nav-3 svg');
    var nav1Link = document.querySelector('.nav-1 a'); // Voeg deze regel toe
    var nav3Link = document.querySelector('.nav-3 a'); // Voeg deze regel toe

    window.addEventListener('scroll', function () {
        // Controleer of de pagina is gescrolld
        if (window.scrollY > 0) {
            // Verander de kleur van de SVG-pictogrammen naar geel (#FFCC01)
            navLinks.forEach(function (icon) {
                icon.querySelector("path").setAttribute("fill", "#FFCC01");
            });

            // Verander de tekstkleur van "Opleiding" naar wit
            opleidingLink.style.color = 'white';

            // Verander de tekstkleur van "Afdeling sfeer" naar wit
            nav1Link.style.color = 'white';

            // Verander de tekstkleur van "Rooster" naar wit
            nav3Link.style.color = 'white';
        } else {
            // Als de pagina niet is gescrold, behoud de oorspronkelijke kleur (#292D32)
            navLinks.forEach(function (icon) {
                icon.querySelector("path").setAttribute("fill", "#292D32");
            });

            // Verander de tekstkleur van "Opleiding" naar de oorspronkelijke kleur
            opleidingLink.style.color = '#292D32';

            // Verander de tekstkleur van "Afdeling sfeer" naar de oorspronkelijke kleur
            nav1Link.style.color = '#292D32';

            // Verander de tekstkleur van "Rooster" naar de oorspronkelijke kleur
            nav3Link.style.color = '#292D32';
        }
    });
});








