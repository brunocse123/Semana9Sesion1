/*
let fruta = prompt("Por favor ingrese la fruta que desea");

switch (fruta) {
  case "uva":
    console.log("Elegiste el sabor uva");
    break;
  case "pera":
    console.log("Elegiste el sabor uva");
    break;
  case "manzana":
    console.log("Elegiste el sabor uva");
    break;
  case "mandarina":
    console.log("Elegiste el sabor uva");
    break;
  default:
    console.log("La fruta que elegiste no esta en la carta");
    break;
}

console.log("Se Termino!!");
*/

/*
If en una sola linea

let sexo = prompt('Cual es tu sexo');

(sexo=='m' ) ? console.log('Es Hombre!!') : console.log('Es Mujer')
*/

/*
function sumar(a, b) {
  if (arguments.length > 2)
    throw console.log("Esta funcion solo soporta 2 argumentos");
  return a + b;
}
debugger;
sumar(1, 2, 3, 4, 5);

*/


/*
//try catch
function nameLength(name){
    let message = "";

    try {
        
        if(name.nameLength<6) throw 'SHORT';
        if(name.nameLength>10) throw 'LONG';
        message = `EL NOMBRE INGRESADO ${name} ES CORRECTO`
    } catch (error) {
        if(err=='SHORT') message = `EL NOMBRE INGRESADO ${name} ES MUY CORTO`
        if(err=='LONG') message = `EL NOMBRE INGRESADO ${name} ES MUY LARGO`
    }
    finally{
        console.log('Nombre evaluado', message)
    }
}

nameLength('ana')
nameLength('jose')
nameLength('jose maria')
nameLength('victor manuel')
nameLength('bruno')

*/

/*
let alumno = {
    nombre: 'Bruno',
    apellido: 'Sánchez',
    edad: 33,   
    sayName: function(){
        console.log(this)
    },
    sayAge: function(){
        console.log(this)
    } 
}
console.log(alumno)
console.log(alumno.apellido)
*/


let alumnos = [
    {
        nombre : 'Bruno',
        apellido: 'Sánchez',
        edad: 23,
        salon: 'Rojo',
        colegio: 'San Basilio',
 
    },
    {
        nombre : 'Jose',
        apellido: 'Valderrama',
        edad: 25,
        salon: 'Azul',
        colegio: 'La Merced',
   
    },

]

alumnos.forEach(element => console.log(element));

let persona =  {
    nombre: 'Bruno',
    apellido: 'Sánchez',
    edad: 26,
    nombreCompleto: function(){
        return `${this.nombre} ${this.apellido}`;
    } ,
    mEdad: function(){
        return this.edad;
    } 
}

console.log(persona)
console.log(`Nombre Completo: ${persona.nombreCompleto()}`)
console.log(`Edad: ${persona.mEdad()}`)