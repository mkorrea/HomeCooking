function clickMenu() {
    var menu = document.getElementById('menu')
    var open = document.getElementById('openburguer')
    var close = document.getElementById('closeburguer')
    
    if (menu.style.left == '-55%') { //off
        menu.style.left = '5%'
        open.style.opacity = '0'
    } else {      
        menu.style.left = '-55%'
        open.style.opacity = '1'
    }
}