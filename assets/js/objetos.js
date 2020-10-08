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




// Tarea

/*
    1. Escribir una funcion que reciba dos parametros
        p1. objeto con las ordenes de compra
        p2. numero con el monto minimo

    y returne un objeto con las ordenes que son igual o más caras
    que el monto minimo
    p.ej. 

    expensiveOrders(
        { 
        "a": 3000, 
        "b": 200, 
        "c": 1050 
        }, 
        1000
    )
    ➞ { 
        "a": 3000, 
        "c": 1050
    }

    otro ejemplo
    expensiveOrders({ "Hamburguesa": 35, "Helado": 4, "Papas": 5 }, 40)
    ➞ {}


    2. Escribir una funcion que dado un array de estudiantes
    y devuelva un array con la calificación más alta de cada uno

    p.ej.

    getStudentTopNotes([
    {
        id: 1,
        name: "Jacek",
        notes: [5, 3, 4, 2, 5, 5]
    },
    {
        id: 2,
        name: "Ewa",
        notes: [2, 3, 3, 3, 2, 5]
    },
    {
        id: 3,
        name: "Zygmunt",
        notes: [2, 2, 4, 4, 3, 3]
    }
    ])
    

    ➞ [5, 5, 4]

    Recomendaciones. 
    Usar .map() 0 .reduce(), Math.max

*/

























