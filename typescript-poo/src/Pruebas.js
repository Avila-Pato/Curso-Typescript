// Un constructor es un método especial que se llama automáticamente cuando se crea un objeto de una clase. 
// En TypeScript, un constructor se define utilizando la palabra clave constructor.
// el simbolo ? indica que el parametro es opcional, por lo que no es encesario inicializarlo en el constructor
var Pet = /** @class */ (function () {
    function Pet(name, age) {
        this.name = name;
        this.age = age;
    }
    Pet.prototype.getDescription = function () {
        return "This pet is ".concat(this.name, " and is ").concat(this.age, " years old.");
    };
    return Pet;
}());
var myPet = new Pet("Pirata", 30);
console.log(myPet.getDescription());
