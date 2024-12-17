function alternarMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
}

function saibaMais(id) {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({ behavior: "smooth" });
    }
}


function clickMenu() {
    if (itens.style.display == 'block') {
        itens.style.display = 'none'
    } else {
        itens.style.display = 'block'
    }
}

