const burguer = document.querySelector('#burguer')
const menu = document.querySelector('.menu')

function changedSize() {
    if (window.innerWidth >= 768) {
        menu.style.display = 'flex'
        burguer.style.display = 'none'
    } else {
        menu.style.display = 'none'
        burguer.style.display = 'flex'
    }
}

function carregaMenu() {
    burguer.style.display = 'block'
    menu.style.display = 'none'
}

burguer.addEventListener('click', () => {
    
    if (menu.style.display == 'flex') {
        menu.style.display = 'none'
    } else {
        menu.style.display = 'flex'
    }
})