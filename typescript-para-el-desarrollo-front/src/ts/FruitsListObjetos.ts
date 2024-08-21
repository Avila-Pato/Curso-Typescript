// Array de Objetos
// en la mayoria de los casos se usan arrays de objetos se consume de una api externa
// por lo que es idea hacerlo en una interface que una foprma de tipar objetos


//enum color evitandose que se escriban mal los colores

 export enum Color {
    Rojo = 'Rojo',
    Verde = 'Verde',
    Azul = 'Azul',
    Amarillo = 'Amarillo',
    Naranja = 'Naranja',
    Morado = 'Morado',
    Rosa = 'Rosa',
    Blanco = 'Blanco',
    Negro = 'Negro',
    Gris = 'Gris',
    Marron = 'Marron',
    Dorado = 'Dorado',
    Plateado = 'Plateado',
    Oro = 'Oro',
    Plata = 'Plata',
    Cobre = 'Cobre',
    Bronce = 'Bronce',
    Aluminio = 'Aluminio',
    Hierro = 'Hierro',
    Acero = 'Acero',
    Vidrio = 'Vidrio',
    Madera = 'Madera',
    Plastico = 'Plastico',
    Caucho = 'Caucho',
    Tela = 'Tela',
    Naranjopalido = 'Naranjo palido',
}




// interface Fruit  defibne el tipo de dato 
interface Fruit {
    name: string;
    color: Color;
    price?: number;
}

// const fruits: Fruit[] define el tipo de dato que va a recibir el array

const fruits: Fruit[] = [
    {
        name: 'Manzana',
        color: Color.Rojo,
        price: 100
    },
    {
        name: 'Platano' ,
        color: Color.Amarillo,
        price: 121
    },
    {
        name: 'Durasno',
        color: Color.Naranjopalido,
        price: 1450,
    }
]

const $frutis = document.getElementById('fruitList') as HTMLUListElement;

fruits.forEach((fruit) => {
    const $li = document.createElement('li');
    $li.textContent = `${fruit.name} ${fruit.color} - ${fruit.price}`;
    $frutis.appendChild($li);
});