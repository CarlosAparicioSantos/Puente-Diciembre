//ejercicio 1
let angulo1 = 72;
let angulo2 = 36;
let angulo3 = 72;
console.log(angulo1 + angulo2 + angulo3);

if (angulo1**2 + angulo2**2 === angulo3**2){
    console.log("Es un triangulo rectangunlo");
}
else if ((angulo1**2 + angulo2**2)**2){
    console.log("Es un triangulo obtusangulo");
}
else (angulo1**2 + angulo2**2 > angulo3**2);{
    console.log("Es un triangulo acutangulo");
}

//Ejercicio2

let nota = prompt ("Introduce tú nota");

switch (nota) {
    case "Suspenso":
        console.log(0 <= 59);
        break;
    case "Aprobado":
        console.log(60 <= 79);
        break;
    case "Notable":
        console.log(80 <= 89);
        break;
    case "Sobresaliente":
        console.log(90 <= 100);
        break;
    default:
        console.log("Formato de nota incorrecto");
} 

//Ejercicio3
