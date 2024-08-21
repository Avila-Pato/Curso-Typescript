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
  }
  
  class Dog extends Pet {
    constructor(name: string, age: number, color: string, breed: string) {
      // super se usa para llamar al constructor de la clase padre
      // se debe respetar la firma del constructor de la clase padre que es Pet
      super(name, age, color, breed);
    }
  
    // define otro metodo adicional bark 
    public bark(): void {
      console.log("Woof! Woof!");
    }
  }
  
  // creando otra herencia de un gato
  class Cat extends Pet {
    constructor(name: string, age: number, color: string) {
      super(name, age, color);
    }

   // define otro metodo adicional meow
    public meow(): void {
      console.log("Meow! Meow!");
    }
  }

  // generando datos y llamada a consola
  
  const dog = new Dog("Buddy", 5, "Golden", "Golden Retriever");
  console.log(dog);
  dog.bark();
  
  const cat = new Cat("Whiskers", 3, "White");
  console.log(cat);
  cat.meow();
  