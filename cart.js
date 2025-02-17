const cartList = document.querySelector("#cart_list");

function renderCart() {
    cartList.innerHTML = "";
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    if (cart.length === 0) {
        cartList.innerHTML = "<p>Siz hech qanday Pokémon sotib olmadingiz.</p>";
        return;
    }

    cart.forEach((pokemon, index) => {
        const li = document.createElement("li");
        li.innerHTML = `
            <h2>${pokemon.name}</h2>
            <img src="${pokemon.img}" alt="${pokemon.name}">
            <p>${pokemon.type.join(", ")}</p>
            <button onclick="removeFromCart(${index})">O'chirish</button>
        `;

        cartList.append(li);
    });
}

function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.splice(index, 1); // Remove Pokémon from array
    localStorage.setItem("cart", JSON.stringify(cart)); // Update Local Storage
    renderCart(); // Re-render cart
}

renderCart();
