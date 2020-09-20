console.log('Condicionales')
//if, else, else if, switch
// while, do while, for, 
// asignacion = +=

// doble igual == compara valor unicamente
// triple igual === compara valor y tipo de dato

if (nombre === 5) { // true o false
    // sentenciass
    console.log('hola jorge')
}
else if(algo){
 // asi
}
else {
    console.log('Hola desconocido')
}



// obtener el valor del usuario
// 

const nombre = prompt("¿Cúal es tu nombre?")
// switch
switch (nombre) {
    case 'jorge':
        console.log('tu nombre es jorge')
        break;
    case 'luis':
        console.log('hola luis')
        break;
    default:
        console.log('Nombre invalido')
}
// if / else if / else


const nombre = prompt("¿Cúal es tu nombre?")

if (nombre === 'jorge'){
    console.log('tu nombre es joorge')
}else if(nombre === 'luis'){
    console.log('hola luis')
}else {
    console.log('nombre invalido')
}


// if, else, else if
// switch
// prompt()

// ejercicio 1  (for, prompt)
// pedir al usuario la tabla que quieres imprimir
// imprimirla

// ejercicio 2 (prompt())
// pedir al usuario su edad
// pedir nombre
// pedir peso
// imprimir en consola 
// tu nombre es 'nombre', tienes 'N' años y pesas 'N' kg

// ejercicio 3 (prompt, if/else )
// pedir la edad
// si es mayor o igual a 18 años 
// eres mayor de edad
// sino
// eres menor de edad


// template literals
console.log(`
    <div>
        <p>Hola ${name} ipsum dolor sit amet consectetur ${2 * 3} elit. Odit </p>
    </div>
`)

