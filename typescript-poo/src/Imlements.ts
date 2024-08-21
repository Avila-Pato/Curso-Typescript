//En TypeScript, las interfaces se utilizan para definir la forma de un objeto,
// especificando qué propiedades y métodos debe tener.

// Solo está obligada a cumplir con el contrato mínimo definido por la interfaz. 
//Esto significa que la clase debe tener al menos las propiedades y métodos 
//especificados en la interfaz, pero puede tener propiedades y métodos adicionales.

// Esto es útil para garantizar que las clases sigan una estructura específica y
// para habilitar el polimorfismo.

interface Animal {
    name: string;
    age: number;
    getDescription(): string;
  }
  
  class Dog implements Animal {
    constructor(public name: string, public age: number, public breed: string) {}
  
    public getDescription(): string {
      return `${this.name} is a Dog and is ${this.age} years old.`;
    }
  
    public bark(): void {
      console.log("Woof! Woof!");
    }
  }
  
  const dog = new Dog("Buddy", 5, "Golden Retriever");

  
  console.log(dog);
