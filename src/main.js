/* eslint-disable no-console */
import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// Traer contenedor de tarjetas Pokémo

let container = document.getElementById("cardsContainer")

// Obtener parte de la data

let loadData = data.pokemon.map(function (datum) {
    return {
        img: datum.img,
        name: datum.name,
        num: datum.num,
        type: datum.type,
        generation: datum.generation
    }
})

// Mostrar todos los Pokémons en tarjetas sólo con los datos que trabajamos

showData(loadData);

// Función que muestra sólo data con la que trabajamos

function showData(loadData) {
    loadData.map(function (data) {

        // Crear tarjeta contenedora de datos para cada Pokémon
        let card = document.createElement("div");

        // Adjuntar/Incluir "card" dentro de "conteiner"
        container.append(card);

        // Añadir/incluir todos los item de la card Pokemon
        card.innerHTML = `
<div id="container-pokeImage" class="pokeData">
    <img src="${data.img}"/>
</div>
<div id="container-pokeNum_Name" class="pokeData">
    <h3 id="pokeName">${data.name}</h3>
    <h3 id="pokeNum">${data.num}</h3>
</div>
<div id="container-pokeType" class="pokeData">
    <h5 id="pokeType">${data.type}</h5>
</div>
<div id="container-pokeGeneration" class="pokeData">
    <h5 id="pokeGenerationName">${data.generation.name}</h5>
    <h5 id="pokeGenerationNum">${data.generation.num}</h5>
</div>
`
    })
}

// console.log(loadData)

// ORDENAR POKEMONS POR TIPO Y NUMERO DE CREACION
// Traer botones desde HTML y agregar escuchador de eventos
let btnType = document.getElementById("btnType");
btnType.addEventListener("click", () => { sortData(loadData) });
let btnNum = document.getElementById("btnNum");
btnNum.addEventListener("click", () => { sortData(loadData) });

function sortData(loadData) {
    // console.log(loadData);
    // console.log(e);

    loadData.sort((a, b) => {
        if (a.type[0] < b.type[0])
        return 1
});

}
console.log(loadData[0])
// Para Aprender----------------------------------------------------------------------------------------------------------------------------------------

// const typeColor = {
//     grass: "#4A9681",
// };

// // function showData () {

//     data.pokemon.forEach(element => {
//         // Traer contenedor de tarjetas Pokemon desde HTML
//     let cardsContainer = document.getElementById("cardsContainer");

// // //     // Crear contenedor de datos de un pokemon
//     let card = document.createElement("div");

//     cardsContainer.append(card);

//     card.innerHTML = `
//         <img src="${element.img}"/>
//         <h3 id="pokeName" class="pokeData">${element.num}//${element.name}</h3>
//         <h5 id="pokeType" class="pokeData">${element.type}</h5>
//         <h5 id="pokeGeneration" class="pokeData">${element.generation.num}//${element.generation.name}</h5>
//     `
//         console.log(element)
//     });

// //     for(let i=0; i<251; i++){
// //     // Traer contenedor de tarjetas Pokemon desde HTML
// //     let container = document.getElementById("cardsContainer");

// //     // Crear contenedor de datos de un pokemon
// //     let card = document.createElement("div");

// //     container.append(card);

// //     card.innerHTML = `
// //         <img src="${data.pokemon[i].img}"/>
// //         <h3 id="pokeName" class="pokeData">${data.pokemon[i].num}//${data.pokemon[i].name}</h3>
// //         <h5 id="pokeType" class="pokeData">${data.pokemon[i].type[0]}</h5>
// //         <h5 id="pokeGeneration" class="pokeData">${data.pokemon[i].generation.name}//${data.pokemon[i].generation.num}</h5>
// //     `
// // }
// // }
// //Función de Ordenar por Número de Creación

// //Lamados
// const buttonNumberOrganize = document.getElementById("numberOrganize")

// buttonNumberOrganize.addEventListener("click", function () {
//     card.sort((a, b) => {
//         if (a.num > b.num) {
//             return 1;
//         }
//         if (a.num < b.num) {
//             return -1;
//         }
//         if (a.name.toLowerCase() > b.name.toLowerCase()) {
//             return 1;
//         }
//         if (a.name.toLowerCase() < b.name.toLowerCase()) {
//             return -1;
//         }
//         return 0
//     })
// })



// /* <h3 id="pokeNum" class="pokeData">${data.pokemon[i].num}</h3> */

// // let img = document.createElement("img");
// // let name = document.createElement("h3");
// // let num = document.createElement("h3");
// // let type = document.createElement("h4");
// // let gen = document. createElement("h4");

// // Agregar atributo
// // let imgAttribute = document.createAttribute("src");
// // imgAttribute.value = data.pokemon[0].img;
// // img.setAttributeNode(imgAttribute);

// // card.append(img);
// // card.append(name);

// // name.append(data.pokemon[0].name);


// // console.log(data.pokemon[0].generation.name);
// // console.log(example, data);