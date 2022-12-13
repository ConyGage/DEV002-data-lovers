/* eslint-disable no-console */
import { sortData } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';

// Traer contenedor de tarjetas Pokémo

let container = document.getElementById("cardsContainer")

// Obtener parte de la data

let loadData = data.pokemon

// Mostrar todos los Pokémons en tarjetas sólo con los datos que trabajamos



// Función que muestra sólo data con la que trabajamos

function showData(loadData) {
    container.innerHTML = "";
    loadData.map(function (item) {

        // Crear tarjeta contenedora de datos para cada Pokémon
        let card = document.createElement("div");

        // Adjuntar/Incluir "card" dentro de "conteiner"
        // container.appendChild(card);

        // Añadir/incluir todos los item de la card Pokemon
        card.innerHTML = `
            <div id="container-pokeImage" class="pokeData">
                <img src="${item.img}"/>
            </div>
            <div id="container-pokeNum_Name" class="pokeData">
                <h3 id="pokeName">${item.name}</h3>
                <h3 id="pokeNum">${item.num}</h3>
            </div>
            <div id="container-pokeType" class="pokeData">
                <h5 id="pokeType">${item.type}</h5>
            </div>
            <div id="container-pokeGeneration" class="pokeData">
                <h5 id="pokeGenerationName">${item.generation.name}</h5>
                <h5 id="pokeGenerationNum">${item.generation.num}</h5>
            </div>`
        container.appendChild(card);
        // return console.log("Ahora sí");
    })
    // console.log(mapingData);
}
showData(loadData);

// console.log(mapingData.name);

// ORDENAR POKEMONS POR TIPO Y NUMERO DE CREACION
// Traer botones desde HTML y agregar escuchador de eventos
// let btnType = document.getElementById("btnType");
// btnType.addEventListener("click", () => {
//     let viweData = sortDataTypeAsc(loadData);
//     // let viweData = sortDataTypeAsc(loadData, option);
//     showData(viweData)
// });
// let opt1 = document.getElementById("optNumAsc").value;
// let opt2 = document.getElementById("optNumDes").value;
// let opt3 = document.getElementById("optTypAsc").value;
// let opt4 = document.getElementById("optTypDes").value;

// let opt1 = document.querySelector("#optNumAsc").value;
// let opts = document.querySelectorAll("option#id");
let selectOrder = document.getElementById("orderSelect");
selectOrder.addEventListener("change", (e) => {
    for (let i = 0; i < 4; i++) {
        // const element = array[index];
        console.log(e.target[i].value);
    }
    // let viweData = sortDataTypeAsc(loadData);
    // let viweData = sortData(loadData, option);
    // showData(viweData)
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.value);
});
// let btnNum = document.getElementById("btnNum");
// btnNum.addEventListener("click", () => { sortData(loadData) });


// console.log(opt1, opt2, opt3, opt4);
// console.log(loadData[0].type);
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

//Filtro De Sandy y Vicky
//método de filtrar por productor
// filtrarPorProductor(peliculas,nameProducer){
//     let peliculasdelproductor= peliculas.filter(pelicula =>pelicula.producer===nameProducer);
//     return peliculasdelproductor
//  },
