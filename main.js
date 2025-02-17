const searchInput = document.querySelector("#search");
const pakemonSelect = document.querySelector(".select");
const mainPakemon = document.querySelector(".main_div");
const subBtn = document.querySelector("#button")

// console.log(searchInput, pakemonSelect, mainPakemon);

function renderPakemon(heros) {

    mainPakemon.innerHTML = "";
    if(heros.length === 0){
        mainPakemon.innerHTML = "Afsuski bunday PAKEMON mavjud emas"
    }

    heros.forEach(objPokemons => {
        const li = document.createElement("li");
        li.innerHTML = `
        <p class = "num_red">${objPokemons.num}</p>
        <h2 class = "pakemons_name">${objPokemons.name}</h2>
        <img src="${objPokemons.img}" alt="${objPokemons.name}">
        <p class="pokemon_type">${objPokemons.type}</p>
        <p class="pokemon_count">${`${"Candy count:"} ${objPokemons.candy_count}`}</p>
        <p class="pokemon_weight">${objPokemons.weight}</p>
        <p class="pokemon_wiknes">${objPokemons.weaknesses}</p>
        <p class="pokemon_time">${objPokemons.spawn_time}</p>
        `

        mainPakemon.append(li)

    });
}

renderPakemon(pokemons)

function sortirovka(obj, qiymat){
    if(qiymat === "A-Z"){
        return obj.sort((a, b) => a.name.localeCompare(b.name));
    }else if(qiymat === "Z-A"){
        return obj.sort((a, b) => b.name.localeCompare(a.name));
    }
    return obj;
}

pakemonSelect.addEventListener("change", () => {
    const val = pakemonSelect.value;
    let sortedPokemons;

    if(val === "A-Z" || val === "Z-A"){
        sortedPokemons = sortirovka(pokemons, val);
    }else{
        sortedPokemons = pokemons;
    }

    renderPakemon(sortedPokemons);
})



subBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const inputValu = searchInput.value.toLowerCase();

    const filterBulgan = pokemons.filter(item => {
        return item.name.toLowerCase().includes(inputValu);
    })
    

    renderPakemon(filterBulgan)

})

function renderPakemon(heros) {
    mainPakemon.innerHTML = "";
    if (heros.length === 0) {
        mainPakemon.innerHTML = "Afsuski bunday PAKEMON mavjud emas";
    }

    heros.forEach(objPokemons => {
        const li = document.createElement("li");
        li.innerHTML = `
            <p class="num_red">${objPokemons.num}</p>
            <h2 class="pakemons_name">${objPokemons.name}</h2>
            <img src="${objPokemons.img}" alt="${objPokemons.name}">
            <p class="pokemon_type">${objPokemons.type}</p>
            <p class="pokemon_count">${"Candy count: " + objPokemons.candy_count}</p>
            <p class="pokemon_weight">${objPokemons.weight}</p>
            <p class="pokemon_wiknes">${objPokemons.weaknesses}</p>
            <p class="pokemon_time">${objPokemons.spawn_time}</p>
        `;

        li.addEventListener("click", () => addToCart(objPokemons));
        mainPakemon.append(li);
    });
}

function addToCart(pokemon) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const exists = cart.find(p => p.num === pokemon.num);
    if (!exists) {
        cart.push(pokemon);
        localStorage.setItem("cart", JSON.stringify(cart));
        alert(`${pokemon.name} savatga qo'shildi!`);
    }

    window.location.href = "./xaridqilinganlar.html";
}
