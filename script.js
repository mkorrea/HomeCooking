var lua = document.getElementById('lua');
var sol = document.getElementById('sol');
var menu = document.getElementById('menu')
var open = document.getElementById('openburguer')
var close = document.getElementById('closeburguer')
var bg = document.getElementById('html')
var main = document.getElementById('main')

// menu lateral escondido
function clickMenu() {
    if (menu.style.left == '0%') { 
        menu.style.left = '-55%'
    } else {      
        menu.style.left = '0%'
    } 
}
main.addEventListener("click", function fechar () {
    if (menu.style.left != '-55%' && window.innerWidth <= 1200) { 
        menu.style.left = '-55%' 
    }
})
if (window.innerWidth >= 1200) {
    menu.style.left = '0.1%' 
}
    
function mudou() {
    if (window.innerWidth >= 1200) {
        menu.style.left = '0.1%'
    } else {
        menu.style.left = '-55%'
    }
}

// dark mode
let modoEscuro = false;
function modo() {
    modoEscuro = !modoEscuro;
    if (modoEscuro) {
        lua.style.transform = 'rotate(180deg)';
        lua.style.opacity = '0'
        sol.style.transform = 'rotate(180deg)';
        sol.style.opacity = '1'
        open.style.color = 'white'
        close.style.color = 'white'
        menu.style.backgroundColor = 'var(--darkback)'
        bg.style.background = 'var(--background) url(images/bg-dark-home-mb.jpg) no-repeat center center fixed'
        bg.style.backgroundSize = 'cover'
        document.body.style.background = 'rgba(0, 0, 0, 0.400)'
        main.style.background = '#0f0f0fd8'
        main.style.color = 'white'
    } else if (!modoEscuro) {
        lua.style.transform = 'rotate(0deg)';
        lua.style.opacity = '1'
        sol.style.transform = 'rotate(0deg)';
        sol.style.opacity = '0'
        lua.style.color = 'black'
        open.style.color = 'black'
        close.style.color = 'black'
        menu.style.backgroundColor = 'rgb(230, 230, 230)'
        bg.style.background = 'var(--background) url(images/bg-home-mb.jpg) no-repeat center center fixed'
        bg.style.backgroundSize = 'cover'
        document.body.style.background = 'rgba(0, 0, 0, 0.400)'
        main.style.background = '#ffffffd8'
        main.style.color = 'black'
    }
}

var bg = document.getElementById('html')
var hom = document.getElementById('hom')
var sal = document.getElementById('sal')
var doc = document.getElementById('doc')
hom.addEventListener('mouseenter', function entrou() {
    bg.style.background = 'var(--background) url(images/bg-home.jpg) no-repeat center center fixed'
    bg.style.backgroundSize = 'cover'
    open.style.color = 'black'
})
sal.addEventListener('mouseenter', function entrou() {
    bg.style.background = 'var(--background) url(images/bg-sal.jpg) no-repeat center center fixed'
    bg.style.backgroundSize = 'cover'
    open.style.color = 'white'
})
doc.addEventListener('mouseenter', function entrou() {
    bg.style.background = 'var(--background) url(images/bg-doce.jpg) no-repeat center center fixed'
    bg.style.backgroundSize = 'cover'
    open.style.color = 'white'
})
