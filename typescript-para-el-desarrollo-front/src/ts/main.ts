
import './style.css';


export // el 90% se comparta entre los archivos

interface Persona {
  name: string;
  age: number;
  isStudent: boolean;
  address: {
    street: string;
    city: string;
    state: string;
  };
  lastName: string;
}
 const personaUno: Persona = {
  name: 'John',
    age: 20,
    isStudent: true,
    address: {
        street: 'Main St',
        city: 'New York',
        state: 'NY'
    },
      lastName: 'Doe'
}





const age: number = 20;
const name: string = 'John';

console.log(personaUno);
console.log(age);
console.log(name);