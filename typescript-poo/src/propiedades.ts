    // Propiedades de una clase#
    // Las propiedades de una clase son variables que se declaran dentro de una clase. 
    // Las propiedades de una clase pueden ser públicas (public), privadas (private), protegidas (protected) o de solo lectura (readonly).

    export class Pet {
        // Propiedad pública
        name!: string;
      
        // Propiedad privada
        private age!: number ;
      
        // Propiedad protegida
        protected breed!: string;
      
        // Propiedad de solo lectura
        readonly color: string = "Brown";
      }
      console.log(Pet);
      // Pet.name = 'Firulais';
      // Pet.age = 10;
      // Pet.breed = 'Perro';
      // Pet.color = 'Brown';
      

//       Private vs Protected
// Private: Las propiedades privadas solo se pueden acceder dentro de la clase en la que se declaran.
// Protected: Las propiedades protegidas se pueden acceder dentro de la clase en la que se declaran y en las clases derivadas.
// Esto lo veremos más adelante en la sección de herencia.