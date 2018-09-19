const botao = document.querySelector(".sidebar-menu__button");
const menu = document.querySelector(".sidebar-menu");

botao.addEventListener("click", function(evento) {
    evento.preventDefault();
    
    if (menu.style.left == "-32%") {
        menu.style.left = "0%"
    }
    else {
        menu.style.left = "-32%";
    }    
})

// Ou ------------------------------------------------------------------------------------------------

// let counter = 1;
// botao.addEventListener("click", function(evento) {
//     evento.preventDefault();
    
//     menu.style.left = "-32%";
//     counter++

//     if (counter % 2 !== 0) {
//         menu.style.left = "0%";
//     }    
// })
