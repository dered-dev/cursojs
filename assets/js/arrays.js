let kodersNames = [] // array vacio
kodersNames = ['Fany', 'jorge', 'ivan','mario']
let koderAges = [19, 20, 30, 50]


// acceder a un item del array
console.log( kodersNames[1] )

// Como obtener el numero de items en un array
console.log( kodersNames.length, koderAges.length )

// imprimir todos los elementos de un array
for(let index = 0; index < kodersNames.length ; index++){
    // imprimir el item
    console.log( 
        kodersNames[index], 
        koderAges[index]
    )
}

// eliminar el ultimo item del array
console.log(kodersNames.pop())
// kodersNames.length === 3
console.log(kodersNames)

// eliminar el primer item del array
console.log(kodersNames.shift())
console.log(kodersNames)

// add item "Maria" y "luis"
kodersNames.push('Maria', 'luis')
console.log(kodersNames)

// agregar item al inicio del array  'roberto'
kodersNames.unshift('roberto')
console.log(kodersNames)


let kodersNamesOctava = ['melisa', 'dani', 'jorge','ivan']
let kodersNamesNovena = ['Fany', 'jorge', 'ivan','mario']

// obtener la lista de koders sin repetidos

// output -> ['melisa', 'dani', 'jorge','ivan', 'Fany', 'mario']

// juntar 2 arrays
let allKoders = kodersNamesOctava.concat(kodersNamesNovena)
console.log(allKoders)
// declarar array vacio
let allKodersFiltered = []
for(let i= 0; i < allKoders.length ;i++ ){
    // agregar a un nuevo array si y solo si , no existe
    // ! operador de negación
    if(! allKodersFiltered.includes(allKoders[i]) ){
        allKodersFiltered.push(allKoders[i])
    }
}
// imprimir el nuevo array
console.log(allKodersFiltered)

// Ejercicios
/**
 * 1. Del array allKoders filtrar solo los elementos que se repiten
 * -> ['jorge', 'ivan']
 * 2. Del array koderAges, obtener la suma de todas las edades
 * -> 119
 * 3. Del array koderAges, obtener el promedio de todas las edades
 * -> 29.75
 */

// Funciones
// arrow functions















