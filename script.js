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


document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container");

    containers.forEach(container => {
        let isDragging = false;
        let startX, scrollLeft;

        container.addEventListener("mousedown", (e) => {
            isDragging = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
        });

        container.addEventListener("mouseup", () => {
            isDragging = false;
        });

        container.addEventListener("mouseleave", () => {
            isDragging = false;
        });

        container.addEventListener("mousemove", (e) => {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.7; // Ajuste a sensibilidade aqui
            container.scrollLeft = scrollLeft - walk;
        });
    });
});





