//Union y intersection types

interface Alumno {
    nombre: string;
    apellido: string;
    edad: number;
    altura: number;
}

interface Profesor {
    nombre: string;
    apellido: string;
    edad: number;
    asignatura: string;
    altura: number;
}

// Tipo de unión
type AlumnoOProfesor = Alumno | Profesor;

// Define una persona que puede ser Alumno o Profesor
const nuevaPersona: AlumnoOProfesor = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 35,
    altura: 1.75,
    asignatura: "Matematicas" // Esta propiedad es válida solo si se trata de un Profesor
}

// Función que acepta un Alumno o Profesor
const metodo = (persona: AlumnoOProfesor): void => {
    persona.nombre

}

metodo(nuevaPersona);



type a = string | number;
// son los elementos que se comparten entre string y number

type b = string & number;
// son los elementos que se suman entre string y number