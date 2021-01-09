
let pokemonList = [
{
    name: "pikachu",
    types: ["grass", "flying"],
    height: 3.50,
},
{
    name: "charzard",
    types: ["poision", "fire"],
    height: 3.25,
},
{
    name: "slacking",
    types: ["fire", "air"],
    height: 4.5,
}
];

//for loop looping through objects in pokemonList array
for (let i=0; i<pokemonList.length; i++) {
    document.write(`<p>${pokemonList[i].name}</p>`)
    if(pokemonList[i].height>3.30){
        document.write("Wow, that’s big!")
    }
}

