let pokemonRepository = function(){
    let pokemonListValue = [
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
    }]  
    return{
        getAll:function(){
            return pokemonListValue
        },
        Add: function(item){
            pokemonListValue.push(item)
        }
    }

}();
pokemonRepository.Add({ name: 'pikachu' });
//for loop looping through objects in pokemonList array
pokemonRepository.getAll().forEach(function(pokemonLoop){
    document.write(`<p>${pokemonLoop.name}</p>`)

    if(pokemonLoop.height>3.30){
        document.write("Wow, that’s big!")
    }
   // pokemonList.foreach(pokemonLoop)
})
