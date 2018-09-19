const links = document.querySelector(".gallery__nav");

// links.children seleciona todas as tags filhas

for (let i = 0; i < links.children.length; i++) {
    links.children[i].addEventListener("click", function(evento) {
        evento.preventDefault();

        const img = this.dataset.image;
        document.querySelector(".gallery__image").src = img;

    })
}