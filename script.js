function clickMenu() {
    var menu = document.getElementById('menu')
    var icon = document.getElementById('burguer')
    
    if (menu.style.left == '-60%') { //off
        menu.style.left = '3%'       //on
        icon.style.left = '27%'
         
    } else {                        
        menu.style.left = '-60%'
        icon.style.left = '5%'
    }
}