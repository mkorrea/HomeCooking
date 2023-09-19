var lua = document.getElementById('lua');
var sol = document.getElementById('sol');
var menu = document.getElementById('menu')
var open = document.getElementById('openburguer')
var close = document.getElementById('closeburguer')

function clickMenu() {
    if (menu.style.left == '0%') { //off
        open.style.opacity = '1'
        menu.style.left = '-55%'
    } else {      
        open.style.opacity = '0'
        menu.style.left = '0%'
    } 
}

let modoEscuro = false;
function modo() {
    modoEscuro = !modoEscuro;

    if (modoEscuro) {
        lua.style.transform = 'rotate(180deg)';
        lua.style.opacity = '0'
        sol.style.transform = 'rotate(180deg)';
        sol.style.opacity = '1'

        open.style.opacity = '1' 
        close.style.color = 'white'
        menu.style.backgroundColor = 'var(--darkback)'
        document.body.style.backgroundColor = 'var(--darkback)'
    } else if (!modoEscuro) {
        lua.style.transform = 'rotate(0deg)';
        lua.style.opacity = '1'
        sol.style.transform = 'rotate(0deg)';
        sol.style.opacity = '0'

        open.style.opacity = '0'
        lua.style.color = 'black'
        close.style.color = 'black'
        document.body.style.backgroundColor = 'var(--background)'
        menu.style.backgroundColor = 'rgb(230, 230, 230)'
    }
}


