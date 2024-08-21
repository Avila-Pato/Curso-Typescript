// console.log("Hola Typescript");

interface PersonaInterface {
    name: string;
    getName(): string;
    setName(name: string): void;
}


// clases y las interfases son tipos de datos

class Persona implements PersonaInterface {
     name: string;

    constructor(name: string) {
        this.name = name;
    }

    getName(): string {
        return this.name;
    }

    setName(name: string): void {
        this.name = name;
    }
   
}

// Crear una instancia de la clase Persona
const persona = new Persona("Juan"); // Instancia de la clase Persona
console.log(persona.getName()); // Output: Juan
persona.setName("Carlos");
console.log(persona.getName()); // Output: Carlos

// Asignar la instancia de Persona a una variable de tipo PersonaInterface
let personaPosible: PersonaInterface = persona;


personaPosible.setName("Carlos");
console.log(personaPosible.getName()); // Output: Carlos









// tipado fuerte de typescript
// let a: any = 10;
// a = "12";


//socio cultural de typescript

// 1-segurudad
// 2-mantenibilidad
// 3-escalabilidad
// 4-recfatorizacion
// const metodo = (a: number, b: number): number => {
//     return a + b;
// }
// metodo(10, 20);


// Que es Typescript = javascript con esteroides 
// typescript es un superset de javascript


// Renombra la clase como una interfaz.
// Extiende la clase implementando la interfaz.
// Combina la clase y la interfaz, asegurando que la clase implemente los métodos y propiedades requeridos por la interfaz.
// prender() podría representar una acción como "iniciar" o "encender" el stream.
// class StreamClass {
//     private tema: string;

//     constructor(tema: string) {
//         this.tema = tema;
//     }
// }

// interface StreamInterface {
//     tema: string;
//     prender(): void;
// }

