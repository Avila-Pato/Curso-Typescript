// Un constructor es un método especial que se llama automáticamente cuando se crea un objeto de una clase. 
// En TypeScript, un constructor se define utilizando la palabra clave constructor.

// el simbolo ? indica que el parametro es opcional, por lo que no es encesario inicializarlo en el constructor
class Pet {
    public name: string;
    public age: number;
    protected owner?: string;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public getDescription(): string {
        return `This pet is ${this.name} and is ${this.age} years old.`;
    }
}
const myPet = new Pet("Pirata" , 30);

console.log(myPet.getDescription());


// En términos muy sencillos, this en TypeScript (y en otros lenguajes orientados a objetos) 
// se refiere al objeto actual en el que se está ejecutando el código