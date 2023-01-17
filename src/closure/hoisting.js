function scope() {
    console.log(nombre) // undefined
    console.log(edad) // undefined
    console.log(i) // undefined
    
    var nombre = "Andres"
    var edad = 20
    for (var i = 0; i< 6; i++) {
    //...
    }
  }
  nameOfDog("Elmo"); 
  function nameOfDog(name) { 
    console.log(name); 
}; 


const fruits = () => { 
    if (true) { 
        var fruit1 = 'apple';
        const fruit2 = 'banana';
        let fruit3 = 'kiwi'; 
    } 

}

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);