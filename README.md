## Class vs Interface

### Interfaces

- **Definición de Contrato**:  
  Una interfaz define un contrato que las clases pueden implementar. Especifica qué propiedades y métodos deben estar presentes, pero no proporciona implementaciones.

- **Sin Implementación**:  
  Las interfaces no pueden contener implementaciones de métodos ni inicializaciones de propiedades. Solo definen la estructura.

### Clases

- **Definición y Implementación**:  
  Una clase define tanto la estructura (propiedades y métodos) como las implementaciones de esos métodos.

- **Inicialización de Propiedades**:  
  Las clases pueden inicializar valores por defecto para sus propiedades.

- **Herencia**:  
  Las clases pueden extender (heredar de) una sola clase base, pero pueden implementar múltiples interfaces.

- **Instanciación**:  
  Las clases pueden ser instanciadas para crear objetos.

### Resumen

En TypeScript, una **clase** es una plantilla para crear un objeto. Una clase encapsula datos para el objeto y métodos para manipular los datos. A continuación se describen los aspectos clave:

- **Sintaxis de una Clase**:  
  Una clase se declara con la palabra clave `class`. El cuerpo de la clase está entre llaves `{}`. Las propiedades y métodos de la clase se definen dentro del cuerpo de la clase.

- **Propiedades de una Clase**:  
  Las propiedades de una clase son variables que se declaran dentro de una clase. Pueden ser:
  - **Públicas (public)**: Accesibles desde cualquier lugar.
  - **Privadas (private)**: Accesibles solo dentro de la clase en la que se declaran.
  - **Protegidas (protected)**: Accesibles dentro de la clase y sus subclases.
  - **De solo lectura (readonly)**: Solo se pueden leer, no modificar.

- **Constructores**:  
  Un constructor es un método especial que se llama automáticamente cuando se crea un objeto de una clase. Se define utilizando la palabra clave `constructor`.

- **Herencia**:  
  La herencia permite que una clase (subclase) herede propiedades y métodos de otra clase (superclase). Se logra utilizando la palabra clave `extends`.

- **Polimorfismo**:  
  El polimorfismo es la capacidad de una clase para proporcionar una implementación específica de un método que ya está definido en una de sus superclases. Esto se logra sobrescribiendo métodos de la clase padre en la clase hija.

- **Getter y Setter**:  
  Métodos especiales para acceder y modificar propiedades de una clase.

- **Clases Abstractas**:  
  Una clase abstracta no se puede instanciar directamente y sirve como plantilla para otras clases que la extienden.

- **Métodos Estáticos**:  
  Métodos que se pueden llamar en la clase misma, en lugar de en una instancia de la clase. Se definen utilizando la palabra clave `static`.

- **Implements**:  
  Las interfaces definen la forma de un objeto, especificando qué propiedades y métodos debe tener. Una clase puede implementar una o más interfaces utilizando la palabra clave `implements`.
