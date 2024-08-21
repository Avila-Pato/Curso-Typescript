// const a = 1;
// console.log(a);

// const persona = {
//     nombre: 'Fernando',
//     edad: 35,
//     direccion: {
//         ciudad: 'Ottawa',
//         pais: 'Canada'
//     }
// }
// console.log(persona);



// ejemplo problematico
// /el problema principal es que está intentando acceder a índices que no existen en el array arreglDeValores, 
const arreglDeValores = [
    {
        numero: 1,
        label: "valor 1",
    },
    {
        numero: 2,
    }
];

const metodo = (param: typeof arreglDeValores): void => {
    // Asegúrate de que indexArray esté definido dentro del alcance de la función
    const indexArray = [1, 2];

    indexArray.forEach((index: number): void => {
        const value = param[index];
        if (value.label) { // Verifica si el objeto tiene la propiedad 'label'
            console.log(value.label);
        }
    });
}

metodo(arreglDeValores); // Llama a la función con el array de valores











