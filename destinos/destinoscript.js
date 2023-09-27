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
        menu.style.backgroundColor = 'var(--darkback)'
        menu.style.backgroundColor = 'var(--darkback)'
        document.body.style.background = 'var(--darkback)'
        main.style.background = '#0f0f0fd8'
        main.style.color = 'white'
    } else if (!modoEscuro) {
        lua.style.transform = 'rotate(0deg)';
        lua.style.opacity = '1'
        sol.style.transform = 'rotate(0deg)';
        sol.style.opacity = '0'
        lua.style.color = 'black'
        menu.style.backgroundColor = 'rgb(230, 230, 230)'
        document.body.style.background = 'rgb(230, 230, 230)'
        main.style.background = '#ffffffd8'
        main.style.color = 'black'
    }
}

// voltar ao menu
var tit = document.getElementById('titulo')
var vol = document.getElementById('voltar')
tit.addEventListener('mouseenter', function entrou() {
    vol.style.top = '-2px'
})
tit.addEventListener('mouseleave', function saiu() {
    vol.style.top = '-30px'
})


// abertura e fechamento de categorias
document.addEventListener("DOMContentLoaded", function () {
    const subtitulos = document.querySelectorAll(".subtitulo");
    
    subtitulos.forEach(subtitulo => {
        subtitulo.addEventListener("click", function () {
            const container = this.nextElementSibling;
            const mai = this.querySelector('#mais')
            const men = this.querySelector('#menos')
            if (container.style.opacity === "0" || container.style.opacity === "") {
                container.style.maxHeight = '100%'
                container.style.opacity = "1";
                men.style.transform = 'rotate(180deg)';
            } else {
                container.style.maxHeight = '0'
                container.style.opacity = "0";
                men.style.transform = 'rotate(0deg)';
            }
        });
    });
});

// rolagem lateral de categorias
document.addEventListener("DOMContentLoaded", function () {
    const containers = document.querySelectorAll(".container");

    containers.forEach(container => {
        let isDragging = false;
        let startX, scrollLeft;

        container.addEventListener("mousedown", startDrag);
        container.addEventListener("touchstart", startDrag);

        container.addEventListener("mouseup", endDrag);
        container.addEventListener("touchend", endDrag);

        container.addEventListener("mouseleave", endDrag);

        container.addEventListener("mousemove", moveDrag);
        container.addEventListener("touchmove", moveDrag);

        function startDrag(e) {
            isDragging = true;
            startX = e.pageX || e.touches[0].pageX;
            scrollLeft = container.scrollLeft;
        }

        function endDrag() {
            isDragging = false;
        }

        function moveDrag(e) {
            if (!isDragging) return;
            e.preventDefault();
            const x = e.pageX || e.touches[0].pageX;
            const walk = (x - startX) * 2; // Ajuste a sensibilidade aqui
            container.scrollLeft = scrollLeft - walk;
        }
    });
});






