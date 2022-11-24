function showMenu() {
    if (item.style.display == 'block') {
        item.style.display = 'none'
    } else {
        item.style.display = 'block'
    }
}

function changedSize() {
    if (window.innerWidth >= 650) {
        item.style.display = 'block'
    } else {
        item.style.display = 'none'
    }
}