// 1.
// Defina um objeto de
// Javascript que descreva
// um dos pokemons da lista
// de pokemons do Wikipedia.
// ref: https://pt.wikipedia.org/wiki/Lista_de_Pok%C3%A9mon

const myPokemon = {
    numeroNacional: 004,
    nome: "Charmander",
    nomeJapones: "Hitokage",
    numeroJohto: "234",
    numeroHoenn: null,
    numeroSinnoh: null,
    numeroUnova: null,
    evoluiDe: "Ovo"
}

function GeradorPokemon (numeroNacional, nome, nomeJapones, numeroJohto, numeroHoenn, numeroSinnoh, numeroUnova, evoluiDe, canFly) {
    this.numeroNacional = numeroNacional
    this.nome = nome
    this.nomeJapones = nomeJapones
    this.numeroJohto = numeroJohto
    this.numeroHoenn = numeroHoenn
    this.numeroSinnoh = numeroSinnoh    
    this.numeroUnova = numeroUnova
    this.evoluiDe = evoluiDe
    this.canFly = canFly
    this.diga_ola = function () {
        // console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nomeJapones}.`)
        return `Hello, my name is ${this.nome}. And my name in Japanese is ${this.nomeJapones}.`
	}
	this.fly = function () {
		if (this.fly) {
			return "Flyyyyiinnngggg!"
		} else {
			return "I believe I can fly, but I can't..."
		}
	}
	this.do_something = function () {
		let acoes = [
			"FIGHT", 
			"BAG", 
			"RUN"
		]
		return acoes[Math.floor(Math.random() * acoes.length)]
	}
	this.ask = function () {
		// console.log(`What will ${this.nome} do?`)
		return `What will ${this.nome} do? this.do_something()`
	}
    
}

const Pokemon1 = new GeradorPokemon (054, "Psyduck", "Koduck",	140, 158, 043, null, "Ovo", true)
const Pokemon2 = new GeradorPokemon (065,	"Alakazam",	"Foodin",	091, 041, 022, null, "Kadabra", false)
const Pokemon3 = new GeradorPokemon (133,	"Eevee",	"Eievui",	184	, null,	163, null,	"Ovo", true)

console.log(`${Pokemon1.diga_ola()} ${Pokemon1.fly()} ${Pokemon1.do_something()} ${Pokemon1.ask()}`)

// 2.
// Printe no console a seguinte
// frase: "Hello, my name is < >.
// And my name in Japanese is < >."

// const frase = {
//     nome: "Jessiane",
//     nomeJapones: "Jessiane"
// } 

console.log(`Hello, my name is ${myPokemon.nome}. And my name in Japanese is ${myPokemon.nomeJapones}`)



// 3.
// Adicione uma nova propriedade ao
// seu pokemon chamada `can_fly` 
// (ou algo do tipo) e defina
// ela como `true` ou `false`.


myPokemon ["can_fly"] = true

// 4.
// Adicione um método ao seu pokemon
// chamado `fly` que retorna "Sorry,
// I can't fly" ou "Flyyyyiinnngggg!".

myPokemon ["fly"] = function () {
    if (this.can_fly) {
        return "Flyyyyiinnngggg!"
    }
    else {
        return "Sorry, I can't fly"
    }
}

// 5.
// Adicione um método chamado
// `do_something` ao seu pokemon
// que retorna randomicamente uma 
// das Strings "FIGHT", "BAG" ou "RUN".

myPokemon ["do_something"] = function () {
    const numero = (Math.floor(Math.random()*3))

    if (numero === 0) {
        return "FIGHT"
    }
    else if (numero === 1) {
        return "BAG"
    }
    else {
        return "RUN"
    }
}


// 6.
// Adicione um método chamado
// `ask` ao seu pokemon que printa
// no console "What will < > do?" e
// retorna o resultado do metodo
// `do_something`.

myPokemon ["ask"] = function () {
   console.log(`What will ${this.nome} do?`)
   return this.do_something()
}


// 7. 
// Printe todas as propriedades 
// do seu pokemon no console.

for (const prop in myPokemon) {
    console.log(prop)
}


// 8. 
// Printe todas as propriedades
// e seus respectivos valores no
// console no seguinte formato:
// <propriedade>: <valor>

for (const valores in pokemon) {
    console.log(valores, pokemon[valores])
}

// 9.
// Crie uma funcao construtora
// de um pokemon generico.
// function (nome, nome_japones) {}

function Pokemon(nome, nome_japones, pode_voar) {
	this.nome = nome
	this.nome_japones = nome_japones
	this.pode_voar = pode_voar
	this.diga_ola = function () {
		console.log(`Hello, my name is ${this.nome}. And my name in Japanese is ${this.nome_japones}.`)
	}
	this.voe = function () {
		if (this.pode_voar) {
			return "É nóis que voa bruxão!"
		} else {
			return "I believe I can fly, but I can't..."
		}
	}
	this.manda_ver = function () {
		let acoes = [
			"Desce a porrada", 
			"Deu ruim", 
			"Ash, vambora daqui"
		]
		return acoes[Math.floor(Math.random() * acoes.length)]
	}
	this.pergunte = function () {
		console.log(`O que ${this.nome} vai fazer?`)
		return this.manda_ver()
	}
}

const pokemon1 = new Pokemon ("Psyduck", "Koduck",	true)
const pokemon2 = new Pokemon ("Alakazam",	"Foodin", false)
const pokemon3 = new Pokemon ("Eevee",	"Eievui", true)


// console.log(`${pokemon1.diga_ola()} ${pokemon1.voe()} ${pokemon1.manda_ver()} ${pokemon1.pergunte()}`)