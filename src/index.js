console.log(data)
//You can start simple and just render a single
//pokemon card from the first element
console.log(data[0])

const createPokemonCardHeader = (pokemon) => {
    const header = document.createElement("H2") 
    const text = document.createTextNode(pokemon.name)

    header.appendChild(text)
    header.classList.add("card-title")

    return header
}

const createPokemonCardImages = (pokemon) => {
    const image = document.createElement("IMG")
    image.classList.add("card--img")
    image.setAttribute("width", 256)
    image.setAttribute("src", pokemon.sprites.other['official-artwork'].front_default)

    return image
}

//toUppercase 
const createPokemonCardStat = (baseStat, statName) => {
    const stat = document.createElement("LI")
    const txt = document.createTextNode(`${statName} : ${baseStat}`)
    stat.appendChild(txt)
    
    return stat
}

const createPokemonCardStatList = (pokemon) => {
    const statsList = document.createElement("UL")
    statsList.classList.add("card--text")
    pokemon.stats.forEach(stat => {
        const statIl = createPokemonCardStat(pokemon, stat.base_stat, stat.stat.name)
        statsList.appendChild(statIl)
    })
    return statsList
}


const createPokemonElement = (pokemon) => {
    const card = document.createElement("LI")
    card.classList.add("card")
    card.appendChild(createPokemonCardHeader(pokemon))
    card.appendChild(createPokemonCardImages(pokemon))
    card.appendChild(createPokemonCardStatList(pokemon))
    return card
}

const createPokemonList = (pokemonList) => {
    return pokemonList.map(pokemon => createPokemonElement(pokemon))
}

const pokemonList = createPokemonList(data)
 console.log(pokemonList)
pokemonList.forEach(pokemon => {
    document.getElementsByClassName("cards")[0].appendChild(pokemon)
})

