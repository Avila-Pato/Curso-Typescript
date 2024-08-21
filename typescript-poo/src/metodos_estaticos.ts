// En TypeScript, un método estático es un método que se puede llamar en la clase misma, 
// en lugar de en una instancia de la clase. Se definen utilizando la palabra clave static.

class Pet {
    constructor(
      public name: string,
      private age: number,
      readonly color: string,
      protected breed = "Unknown"
    ) {}
  
    public getDescription(): string {
      return `${this.name} - ${this.breed} is ${this.age} years old and has ${this.color} fur.`;
    }
  
    static descriptionClass(): string {
      return "This class is used to create pets.";
    }
  }
  
  console.log(Pet.descriptionClass());
  