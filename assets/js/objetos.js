// Forma 1
let carro = {
    marca: {
        nacional: 'No',
        otro: true
    },
    color: 'red',
    otro: [1,2]
}

let persona = {
    nombre: "fany",
    edad: "20",
    estatura: '1.70',
    hablar: function(name){
        console.log('Hola a todos, nombre es ', name)
        return name
    },
    caminar: function(){
        console.log('Caminando...')
    },
    saltar: function(){
        console.log('saltando...')
    }
}

// getters (obtener)
console.log(carro.marca)
console.log(carro.marca.otro)
console.log(persona.hablar('jorge'))


// forma 2
let coche = new Object() 

// setters (asignar)
coche.color = 'pink'
coche.marca = 'vw'
coche.nacional = false
coche.arrancar = function(){
    console.log('arrancando...')
    return false
}

console.log(coche)
coche.arrancar()
console.log(coche.arrancar())


// tarea: 
// 1: Estudiar objetos
// 2: Métodos de objetos
// 3. ¿Como iterar objetos?
// 4. declarar el objeto koder(2 formas) 
// https://www.digitalocean.com/community/tutorials/how-to-use-object-methods-in-javascript













