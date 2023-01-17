// varaibles


var a; //declarar

var b = 'b'; //declar y asignar
b ='bb' //readinacion
var a = 'aa' // declaracion

//Gloca Scope


var fruit = 'Apple';

function bestFruit() {
    console.log (fruit)
}

bestFruit();


function contruies() {
    country = 'Colombia'; //GLOBAL
    console.log(country);
}
contruies();
console.log(country);