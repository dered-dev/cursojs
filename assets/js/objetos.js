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

persona.extra = 'algo extra'

console.log(persona)

// getters (obtener)
console.log(carro.marca)
console.log(carro.marca.otro)
console.log(persona.hablar('jorge'))


// forma 2
// let coche = {}
let coche = new Object() 


// setters (asignar)

coche.color = 'red'
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



// Clase 2
// forEach

// Metodos
// Object.values()
// Object.keys()
// Object.entries()


let koders = [
    {
        nombre: 'fany',
        apellido: 'algo',
        tercera: 'tercera value'
    },
    {
        nombre: 'fany2',
        apellido: 'algo2',
        tercera: 'tercera value'
    },
    {
        nombre: 'fany3',
        apellido: 'algo2',
        tercera: 'tercera value'
    },
    {
        nombre: 'fany4',
        apellido: 'algo2',
        tercera: 'tercera value'
    }
]

// iteracion

for(let i = 0; i < koders.length; i++ ){
    console.log(koders[i])
}

koders.forEach( (element) => {
    console.log(Object.keys(element))
    console.log(Object.values(element))
});


let getNames = (obj) => {
    let names = []
    obj.forEach( (element) => {
        names.push( element.nombre )
    });
    return names
} 


let getProperty = (obj, nameProperty) => {

    if(typeof obj === "object"){
        console.error('Objeto invalido')
        return []
    }else{
        let arrProperty = []
        obj.forEach( (element) => {
            arrProperty.push( element[nameProperty] )
        });
    
        return arrProperty
    }
} 


console.log( getProperty(koders, 'tercera') )

//console.log(resultGetProperty)

const operatingSystem = {
    name: 'Ubuntu',
    version: 18.04,
    license: 'Open Source'
}

// [
//     ["name", "Ubuntu"]
//     ["version", 18.04]
//     ["license", "Open Source"]
// ]























