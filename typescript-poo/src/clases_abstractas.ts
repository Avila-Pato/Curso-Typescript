// En TypeScript, una clase abstracta es una clase que no se puede instanciar directamente. 
// Se utiliza como plantilla para otras clases que extienden la clase abstracta.

abstract class Pet {
    constructor(
      public name: string,
      private age: number,
      readonly color: string,
      protected breed = "Unknown"
    ) {}
  
    public getDescription(): string {
      return `${this.name} - ${this.breed} is ${this.age} years old and has ${this.color} fur.`;
    }
  }

  console.log(Pet);

  // En este ejemplo, la clase Pet es una clase abstracta. No se puede instanciar directamente, 
//   pero se puede utilizar como plantilla para otras clases que extienden la clase Pet.