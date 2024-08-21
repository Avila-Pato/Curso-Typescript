// Definición del enum
enum Persona2 {
    CHI = "dni",
    b = "bob",
}

// Definición del objeto persona
const persona = {
    CHI: "dni",
    b: "bob",
};

// Obtener el valor de la propiedad CHI del objeto persona
const name = persona.CHI;

// Obtener el valor del enum Persona2.CHI
const tipo = Persona2.CHI;

// Función que acepta valores del enum Persona2
const usandoEnum = (persona: Persona2): void => {
    console.log(persona);
}

// Llamada a la función usando un valor del enum Persona2
usandoEnum(Persona2.CHI); // Pasa Persona2.CHI, que es "dni"

console.log(name); // Imprime "dni"
console.log(tipo); // Imprime "dni"
