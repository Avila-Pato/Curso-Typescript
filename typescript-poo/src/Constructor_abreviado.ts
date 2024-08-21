// En TypeScript, puedes abreviar la declaración de propiedades y el 
// constructor utilizando el modificador de acceso en el constructor.

class Pet {
    constructor(
      public name: string,
      private age: number,
      protected owner: string,
    ) {}
  
    public getDescription(): string {
      return `${this.name} - ${this.owner} is ${this.age} years old.`;
    }
  }
  
  const myPet = new Pet("Buddy", 3, "Un wey random");
  
  console.log(myPet.getDescription()); // Output: Buddy - Golden Retriever is 3 years old.
  