// callback

/* 
let multiplicar = (num1, num2) => num1*num2;

 const pasarACentigrados = gradosFarenheit => (5/9)*(graod)

const imprimeGrados = (callbackFn,gradosFarenheit)=> {
  let temperatura = caallbackFn(gradosFarenheit);
  console.log(temperatura)
}

imprimeGrados(pasarAcentigrados, 90);
 */


//objetos

const persona = {
  nombre: "Leonel",
  apellido: "Moreno",
  edad: 66,
  caracteristicas: {
    cabello: "mono",
    ojos: "verdes",
    descripcion: "El mejor papá del mundo"
  }
};

// Segunda forma para crear un objeto

const person = {};
person.nombre = "Nohemy";
person.apellido = "Yali";
person.caracteristicas = {
  cabello: "castaño",
  ojos: "miel",
  descripcion: "la mejor mamá del mundo"};

// tercera forma para crear objetos

let name = "Marina";
let apellido = "Molina";
let caracteristics = {
  cabello: "Negro",
  ojos: "Cafes",
  description: "La negra"
};

const person2 = {name,apellido,caracteristics};

console.log(persona);
console.log(person);
console.log(person2);


// cuarta forma para crear objetos 

const personObjet = new Object();
personObjet.nombre = "GiiO";

//Array de objetos 

const arregloDeObjetos = [persona, person, person2];
arregloDeObjetos.forEach(element) => {
 objeto.nombre = "Gimyo"; 
};
console.log(arregloDeObjetos);

