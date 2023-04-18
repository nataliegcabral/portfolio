function showMenu() {
    if (items.style.display == 'block') {
        items.style.display = 'none'
    } else {
        items.style.display = 'block'
    }
}

function changedSize() {
    if (window.innerWidth >= 650) {
        items.style.display = 'block'
    } else {
        items.style.display = 'none'
    }
}