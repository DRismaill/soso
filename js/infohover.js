
const infoBlocks = document.querySelectorAll('.exlcimg1, .exlcimg2, .exlcimg3, .exlcimg4, .exlcimg5, .exlcimg6');

infoBlocks.forEach((block) => {
    block.addEventListener('mouseenter', () => {
        block.dataset.hovered = 'true';
    });

    block.addEventListener('mouseleave', () => {
        block.dataset.hovered = 'false';
    });
});

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
