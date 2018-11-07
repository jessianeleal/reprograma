class Ponto {
    constructor(nome, posX, posY) {
        this.nome = nome
        this.x = posX
        this.y = posY
    }

    mover_horizontalmente(distancia) {
        this.x += distancia
        return this.x
    }

    mover_verticalmente(distancia) {
        this.y += distancia
        return this.y
    }

    mover(distanciaX, distanciaY) {
        this.x += distanciaX
        this.y += distanciaY
        return [ this.x, this.y ]
    }

    distancia_entre_dois_pontos(outro_ponto) {
        const x1 = this.x
        const y1 = this.y
        const x2 = outro_ponto.x
        const y2 = outro_ponto.y
        return Math.sqrt( ( Math.abs( x1 - x2 ) ) ** 2 + ( Math.abs( y1 - y2 ) ) ** 2 )
    }
}

class Div extends Ponto {
    constructor(nome, cor, posX, posY, altura, largura) {
        super(nome, posX, posY)

        this.cor = cor
        this.altura = altura
        this.largura = largura
    }

    desenhar() {
        const body = document.querySelector("body")
        this.node = document.createElement("div")
        this.node.style.width = this.largura + "px"
        this.node.style.height = this.altura + "px"
        this.node.style.backgroundColor = this.cor
        this.node.style.left = this.x + "px"
        this.node.style.top = this.y + "px"
        body.appendChild(this.node)

        const that = this;

        document.addEventListener("keydown", function(evento) {
            evento.preventDefault();
            const seta = evento.keyCode;
            if(seta == 37) {
                that.mover_horizontalmente(-10)
                that.node.style.left = that.x + "px";
            } else if(seta == 38) {
                that.mover_verticalmente(-10)
                that.node.style.top = that.y + "px";
            } else if(seta == 39) {
                that.mover_horizontalmente(10)
                that.node.style.left = that.x + "px";
            } else if(seta == 40) {
                that.mover_verticalmente(10)
                that.node.style.top = that.y + "px";
            }
        })
    }
}
const bola = new Div ("Bolinha", "pink", 650, 300, 80, 80)


bola.desenhar() 

