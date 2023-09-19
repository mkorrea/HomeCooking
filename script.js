function clickMenu() {
    var menu = document.getElementById('menu')
    var open = document.getElementById('openburguer')
    var close = document.getElementById('closeburguer')
    
    if (menu.style.left == '4%') { //off
        open.style.opacity = '1'
        menu.style.left = '-55%'
    } else {      
        open.style.opacity = '0'
        menu.style.left = '4%'
    }
}

function changeMode() {
    var dark = document.getElementById('dark')
    var bri = document.getElementById('bright')
    var menu = document.getElementById('menu')
    var open = document.getElementById('openburguer')
    var close = document.getElementById('closeburguer')
    if (dark.style.opacity == '1') {
        dark.style.opacity = '0'
        bri.style.opacity = '1'
        document.body.style.backgroundColor = 'var(--darkback)'
        menu.style.backgroundColor = 'var(--darkback)'
        open.style.color = 'white'
        close.style.color = 'white'
    } else {
        dark.style.opacity = '1'
        bri.style.opacity = '0'
        document.body.style.backgroundColor = 'var(--background)'
        menu.style.backgroundColor = 'rgb(230, 230, 230)'
        open.style.color = 'black'
        close.style.color = 'black'
    }
}