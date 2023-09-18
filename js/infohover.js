// // infohover.js

// $(document).ready(function () {
//     $(".eeninfo").hover(
//         function () {
//             $(this).find(".exlcimg1").fadeIn();
//         },
//         function () {
//             $(this).find(".exlcimg1").fadeOut();
//         }
//     );

//     $(".tweeinfo").hover(
//         function () {
//             $(this).find(".exlcimg2").fadeIn();
//         },
//         function () {
//             $(this).find(".exlcimg2").fadeOut();
//         }
//     );

//     $(".drieinfo").hover(
//         function () {
//             $(this).find(".exlcimg3").fadeIn();
//         },
//         function () {
//             $(this).find(".exlcimg3").fadeOut();
//         }
//     );

//     $(".vierinfo").hover(
//         function () {
//             $(this).find(".exlcimg4").fadeIn();
//         },
//         function () {
//             $(this).find(".exlcimg4").fadeOut();
//         }
//     );

//     $(".vijfinfo").hover(
//         function () {
//             $(this).find(".exlcimg5").fadeIn();
//         },
//         function () {
//             $(this).find(".exlcimg5").fadeOut();
//         }
//     );

//     $(".zesinfo").hover(
//         function () {
//             $(this).find(".exlcimg6").fadeIn();
//         },
//         function () {
//             $(this).find(".exlcimg6").fadeOut();
//         }
//     );
// });



// Voeg deze code toe aan je JavaScript-bestand (bijvoorbeeld infohov.js)

// Selecteer alle informatieblokken
const infoBlocks = document.querySelectorAll('.exlcimg1, .exlcimg2, .exlcimg3, .exlcimg4, .exlcimg5, .exlcimg6');

// Voeg een eventlistener toe aan elk informatieblok om te voorkomen dat deze sluit bij het hoveren
infoBlocks.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        block.dataset.hovered = 'true';
    });

    block.addEventListener('mouseleave', () => {
        block.dataset.hovered = 'false';
    });
});

// Voeg een eventlistener toe aan elk informatieknooppunt om het bijbehorende informatieblok te openen of te sluiten
const infoButtons = document.querySelectorAll('.eeninfo img, .tweeinfo img, .drieinfo img, .vierinfo img, .vijfinfo img, .zesinfo img');

infoButtons.forEach((button, index) => {
    button.addEventListener('mouseenter', () => {
        infoBlocks[index].style.transform = 'translateX(-80px)';
        infoBlocks[index].style.opacity = '1';
        infoBlocks[index].style.maxHeight = '1000px';
    });

    button.addEventListener('mouseleave', () => {
        if (infoBlocks[index].dataset.hovered !== 'true') {
            infoBlocks[index].style.transform = 'translateX(0)';
            infoBlocks[index].style.opacity = '0';
            infoBlocks[index].style.maxHeight = '0';
        }
    });
});
