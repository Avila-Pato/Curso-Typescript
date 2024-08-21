import { Color } from './FruitsListObjetos';


interface Fruit {
    name: string;
    color: Color;
    price?: number;
}



// const fruits: Fruit[] define el tipo de dato que va a recibir el array

const fruits: Fruit[] = [
    {
        name: '🍎',
        color: Color.Rojo,
        price: 100
    },
    {
        name: '🍌',
        color: Color.Amarillo,
        price: 121
    },
    {
        name: '🍊',
        color: Color.Naranjopalido,
        price: 1450,
    }
]

const $frutis = document.getElementById('fruitList') as HTMLUListElement;


const $formFruit = document.getElementById('formFruits') as HTMLFormElement;




const $nameFruts = document.getElementById('nameFruit') as HTMLInputElement;
const $SelectColor = document.getElementById('SelectColor') as HTMLSelectElement;
const $Preciofruta = document.getElementById('PriceFrut') as HTMLInputElement;

// iterar en el array de frutas y mostrarlo en el dom
// Poblar el <select> con los colores del enum Color
Object.values(Color).forEach(color => {
    const option = document.createElement('option');
    option.value = color;
    option.textContent = color;
    $SelectColor.appendChild(option);
});


$formFruit.addEventListener("submit", (e) => {
    e.preventDefault();
    const newFrut: Fruit = {
        color: $SelectColor.value as Color,
        name: $nameFruts.value,
        price: $Preciofruta.valueAsNumber
    }
    fruits.push(newFrut);
    renderFrust();
})

// renderiraz frutas para que se meustren el el dom


const renderFrust = () => {
    $frutis.textContent = '';
    fruits.forEach((fruit) => {
        const $li = document.createElement('li');
        $li.textContent = `${fruit.name} ${fruit.color} - ${fruit.price}`;
        $frutis.appendChild($li);
    });
}









interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
}

interface Geo {
  lat: string;
  lng: string;
}



const $useList = document.getElementById('useList') as HTMLUListElement;
fetch('https://jsonplaceholder.typicode.com/users')
    .then((res) => res.json())
    // recibe como respuesta User[ ]
    .then((users: User[]) => {
        // console.log(users); me muestra el array d objetos dentro del usuario
    //    console.log(users[0].address);
    users.forEach((user) => {
            const $li = document.createElement('li');
            $li.textContent = `${user.name} ${user.email} ${user.phone}`;
            $useList.appendChild($li);
        });
    });
