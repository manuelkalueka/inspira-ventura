function hideLoader() {
    document.addEventListener("DOMContentLoaded", () => {
        const loaderContainer = document.querySelector(".loader-container");
        document.body.style.overflow = "hidden";
        // Remova o loader após o conteúdo ser totalmente carregado
        setTimeout(() => {
            loaderContainer.style.display = "none";
            document.body.style.overflow = "visible";
        }, 2000);
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
            console.error('Drop menu desabilitado')
    }
}

const dropMenu = document.querySelector('.drop-menu');
const dropMenuTarget = document.querySelector('.drop-container');

showDropMenu(dropMenu, dropMenuTarget, 'mouseover');
showDropMenu(dropMenu, dropMenuTarget, 'mouseout');


const check = document.querySelector('#check-menu');

check.addEventListener('change', () => {
    if (check.checked) {
        document.querySelector('.menu-nav').style.display = 'block';
    } else {
        document.querySelector('.menu-nav').style.display = 'none';
    }
})


function showScrollButton(mybutton) {
    const valorScroll = 50;

    if (document.body.scrollTop > valorScroll || document.documentElement.scrollTop > valorScroll) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// Quando o usuário clica no botão, rola para o topo da página
function backToTopScroll() {
    document.body.scrollTop = 0; // Para Safari
    document.documentElement.scrollTop = 0; // Para Chrome, Firefox, IE e Opera
}

const btnTop = document.querySelector('#btn-top')

window.onscroll = () => {
    showScrollButton(btnTop);
};

btnTop.addEventListener('click', backToTopScroll)


document.querySelector('form.news-form').addEventListener('submit', (evento) => {
    assinarNewLetter()
    evento.preventDefault();
});


function assinarNewLetter() {
    validarEmail();
}

function validarEmail() {

    const erros = [];
    const emailElement = document.querySelector('#news-input')
    const emailValue = emailElement.value;

    if (emailValue == '') {
        erros.push('Preecha o campo email');
        emailElement.classList.add('erro')
        alert(erros[0])
        emailElement.focus()
        return;
    }

    alert('Assinou nossa newsLetter com Sucesso :)')
}