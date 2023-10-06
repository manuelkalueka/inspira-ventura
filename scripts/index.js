function hideLoader() {
    document.addEventListener("DOMContentLoaded", () => {
        const loaderContainer = document.querySelector(".loader-container");
        // Remova o loader após o conteúdo ser totalmente carregado
        setTimeout(() => {
            loaderContainer.style.display = "none";
        }, 1000);
    });
}

hideLoader();

function showDropMenu(container, menu, evento) {

    switch (evento) {
        case 'mouseover':
            container.addEventListener(evento, () => {
                menu.classList.remove('hide')
            })
            break;

        case 'mouseout':
            container.addEventListener(evento, () => {
                menu.classList.add('hide')
            })
            break;

        default:
            throw new Error('Funcionalidade apenas com mouseover e mouseout');
    }
}

const dropMenu = document.querySelector('.drop-menu');
const dropMenuTarget = document.querySelector('.drop-container');

showDropMenu(dropMenu, dropMenuTarget, 'mouseover');
showDropMenu(dropMenu, dropMenuTarget, 'mouseout');
