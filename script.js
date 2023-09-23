var lua = document.getElementById('lua');
var sol = document.getElementById('sol');
var menu = document.getElementById('menu')
var open = document.getElementById('openburguer')
var close = document.getElementById('closeburguer')
var main = document.getElementById('main')


function clickMenu() {
    if (menu.style.left == '0%') { 
        menu.style.left = '-55%'
    } else {      
        menu.style.left = '0%'
    } 
}
main.addEventListener("click", function fechar () {
    if (menu.style.left == '0%') { 
        menu.style.left = '-55%' 
    }
})
function mudou() {
    if (window.innerWidth > 1200) {
        menu.style.left = '0.1%'
    } else {
        menu.style.left = '-55%'
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
        menu.style.backgroundColor = 'rgb(230, 230, 230)'
        document.body.style.backgroundColor = 'var(--background)'
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






