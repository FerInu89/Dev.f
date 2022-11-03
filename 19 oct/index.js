//const email = 'test@test.com'
//const password = '123'

//const inputNombre = prompt('Ingresa tu nombre')
//const inputEdad = prompt('Ingresa tu edad')
//const inputResultado = prompt('Ingresa tu resultado del examen de admisión')

//console.log(inputNombre, inputEdad, inputResultado)

//if(inputEdad >= 18 && inputResultado >= 70){
//    console.log('Puedes Obtener tu licencia')
//    alert('Puedes Obtener tu licencia')
//}
//else if(inputEdad < 18 && inputResultado < 70){
//    console.log('No puedes obtener tu licencia')
//    alert('No puedes obtener tu licencia')
//}
//else if(inputEdad < 18){
//    console.log('NO tienes la edad suficiente')
//    alert('NO tienes la edad suficiente')
//}
//else if(inputResultado < 70){
//    console.log('No aprobaste el examen')
//    alert('No aprobaste el examen')
//}

//let init = 0

//do{
//    console.log(init++)
//}while(init <=10);

//init = 0

//while(init <= 10){
//    console.log('While', init++)
//}

//for(let index = 0; index <= 10; index++){
//    console.log('for', index)
//}

//for(let index = 1; index <= 100; index++){
    //console.log(index)
    //if(index%3 == 0 && index%5 == 0){
        //console.log(index, "Fizz and Buzz")
    //}else if(index%3 == 0){
        //console.log(index, "Fizz")
    //}else if(index%5 == 0){
        //console.log(index, "Buzz")
    //}else{
        //console.log(index)
    //}
//}

//let n1 = Number( prompt('Ingresa el primer número'));
//let n2 = Number( prompt('Ingresa el segundo número'));

//function suma(valor1,valor2){
//    var total = valor1 + valor2;
//    return 'El Resultado es: ' + total;
//}

//let mensaje = suma(n1,n2);

//console.log(mensaje)

//let miSuma = function(num1,num2){return num1+num2}
//let x = miSuma(n1,n2);
//console.log(x);

//Arrow Function o función flecha

//function nuevaSuma(){

//}

//let nuevaSuma = (num1,num2) => num1+num2;
//let aviso = nuevaSuma(6,9)
//console.log(aviso);


//let user = prompt('dime tu edad');

//let mensajeUsuario = (edad) => {
    //if(edad >= 18){
        //console.log('Eres Mayor de edad, si puedes entrar')
    //}else{
        //console.log('Eres menor de edad, no puedes entrar')
    //}
//}

//mensajeUsuario(user)

//let index = 0;
//let num1 = Number(prompt('Ingresa el numero'))
//let tabla = (numero) => {
//    do{
//        tablas = numero*index;
//        console.log(numero + ' x ' + index + ' = ' + tablas);
//        index++;
//    }while(index<=10)
//}

//tabla(num1)

//var ataque = 60;
//var pokemon = 'Pikachu'

//function Combate(){
//    if(ataque > 15){
//        //console.log(pokemon + ' Ganaste la batalla pokemon')
//        return pokemon + ' Ganaste la batalla pokemon';
//    }else if(ataque < 15){
//        //console.log(pokemon + ' Perdiste la batalla pokemon')
//        return pokemon + ' Perdiste la batalla pokemon';
//    }
//}

//Combate()

//let mensaje = Combate()
//console.log(mensaje)


var a = 5;
var b = 5;

function sum(){
    var total = a + b;
    return 'El resultado es:  ' + total;
}

sum()
let mensaje = sum()
console.log(mensaje)