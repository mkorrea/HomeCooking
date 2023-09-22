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


document.addEventListener("DOMContentLoaded", function () {
    const subtitulos = document.querySelectorAll(".subtitulo");
    
    subtitulos.forEach(subtitulo => {
        subtitulo.addEventListener("click", function () {
            const container = this.nextElementSibling;
            const mai = this.querySelector('#mais')
            const men = this.querySelector('#menos')
            if (container.style.opacity === "0" || container.style.opacity === "") {
                container.style.display = 'flex'
                container.style.opacity = "1";
                men.style.transform = 'rotate(180deg)';
            } else {
                container.style.display = 'none'
                container.style.opacity = "0";
                men.style.transform = 'rotate(0deg)';
            }
        });
    });
});


const categoria = document.querySelectorAll(".container")
let isDragging = false;
let startPositionX = 0;
let scrollLeft = 0;

categoria.addEventListener('mousedown', (e) => {
    isDragging = true;
    startPositionX = e.clientX - categoria.offsetLeft;
    scrollLeft = categoria.scrollLeft;
});

categoria.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    const x = e.clientX - categoria.offsetLeft;
    const walk = (x - startPositionX) * 2; // Você pode ajustar a velocidade de rolagem aqui
    categoria.scrollLeft = scrollLeft - walk;
});

categoria.addEventListener('mouseup', () => {
    isDragging = false;
});

categoria.addEventListener('mouseleave', () => {
    isDragging = false;
});
