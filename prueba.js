// declarar variables

var nombre;
var apellido;
var usuarioPlatzi;
var edad;
var email;
var mayorEdad;
var dineroAhorrado;
var deudas;

//⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
//Nombre completo (nombre y apellido)
var nombreCompleto = nombre + "" + apellido;
Console.log(nombreCompleto);
//Dinero real (dinero ahorrado menos deudas)
var dineroReal = dineroAhorrado– deudas;
Console.log(dineroReal);


/*2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:*/
const nombre = "Juan David";
const lastname = "Castro Gallego";
const completeName = nombre + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");

//Solucion

/*2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:*/

function funcionPrueba(name, lastname, nickname) {
    completeName = name + " " + lastname;
    return console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
}

funcionPrueba("Angelica", "Tobon", "angie");


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
    case "Free":
        console.log("Solo puedes tomar los cursos gratis");
        break;
    case "Basic":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
        break;
    case "Expert":
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
        break;
    case "ExpertPlus":
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
        break;
}


//solucion 

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
} else if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
} else if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
} else if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else {
    console.log("Elige un tipo de suscripcion")
}

/*Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).*/

if (tipoDeSuscripcion == "Free") {
    console.log("Solo puedes tomar los cursos gratis");
}
if (tipoDeSuscripcion == "Basic") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}
if (tipoDeSuscripcion == "Expert") {
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}
if (tipoDeSuscripcion == "ExpertPlus") {
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}

//Bonus

var arregloTipoDeSuscripcion = [{
        tipo: "Free",
        mensaje: "Solo puedes tomar los cursos gratis"
    }, {
        tipo: "Basic",
        mensaje: "Puedes tomar casi todos los cursos de Platzi durante un mes"
    },
    {
        tipo: "Expert",
        mensaje: "Puedes tomar casi todos los cursos de Platzi durante un año"
    }, {
        tipo: "ExpertPlus",
        mensaje: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }
];

var suscripcion = arregloTipoDeSuscripcion.find(function(suscripcion) {
    return suscripcion == tipoDeSuscripcion;
})

//Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:

for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

//solucion:
var i = 0;

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}


var y = 10;

while (y >= 2) {
    console.log("El valor de i es: " + y);
    y--;
}

// 3. suma 2+2


var entrar = false;

while (entrar == false) {
    var resultado = prompt("ingresa el resultado de la suma 2 + 2");

    if (resultado == 4) {
        alert("Felicitaciones es correcto");
        entrar = true;
    } else {
        alert("Intenta de nuevo");
        entrar = false;
    }

}

// Crear funcion que reciba un array e imprimir su primer elemento.

var arreglo = ["primero", "Segundo", "Tercero"];

function mostrarElemento(arreglo) {
    console.log(arreglo[0]);
}

mostrarElemento(arreglo);

//Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno

function mostrarElementos(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log("Elemento " + arreglo[i]);
    }
}

mostrarElementos(arreglo);


//Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno 

var objeto = {
    nombre: "objeto 1",
    valor: 2000,
    año: "1990"
}

function mostrarObjeto(objeto) {
    Object.values(objeto).forEach((elemento) => {
        console.log(elemento);
    });
}

mostrarObjeto(objeto);