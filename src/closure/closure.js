// function alcancia(monedas){
//     let contenido = 0
//     contenido = contenido + monedas
//     return contenido
// }

// const miAlcancia = alcancia
// miAlcancia(5) // 5
// miAlcancia(4) // 4


function alcancia(cantidadInicial){
    let contenido = cantidadInicial
    return function guardar(monedas){
      contenido = contenido + monedas
      return contenido
    }
  }
  
  const miAlcancia = alcancia(2)
  miAlcancia(5) // 7
  miAlcancia(4) // 11
  
  const otraAlcancia = alcancia(5)
  otraAlcancia(30) // 35
  otraAlcancia(20) // 55


function createPetList() {
    // Tu código aquí 👈
    petList = [];
    return function agregar(items) {
        if(items){
            petList.push(items);
        }else{
            return petList;
        }
    }
  }
  
  const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();

