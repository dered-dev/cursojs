// funciones



function addTwoNumbers (numeroUno, numeroDos) {
    // sentencias
    // console.log('suma', numeroUno + numeroDos )
    // let suma = 0
    // suma = numeroUno + numeroDos
    // return suma
    return numeroUno + numeroDos
}

let resultado = addTwoNumbers(3,5)
console.log(resultado)
// 10,9,8
let sumaUno = addTwoNumbers(10,9)
let sumaDos = addTwoNumbers(sumaUno, 8)
console.log(sumaDos)


// declaracion
const nameFunctionArrow = (numeroUno, numeroDos) => {
    // sentencias
    return addTwoNumbers(numeroUno, numeroDos)
}
// call

let resultadoArrow = nameFunctionArrow(3,5)
console.log(resultadoArrow)



const sumAges = (arr) => {
    const totalAgesReduce = arr.reduce(function(acumulador, current){
        return acumulador + current
    }, 0)
    return totalAgesReduce
}

let koderAges = [19, 20, 30, 50, 100, 19, 30]
let totalAgeKoders = sumAges(koderAges)

// 1. funcion que concatene 2 arrays 
// 2. funcion que devuelva solo los elementos unicos de un array
// 3. funcion que devuelva solo los elementos repetidos de un array
// 4. funcion que dado un array de strings,
// devuelva el mismo array pero con cada elementos capitalizado












