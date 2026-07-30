let cart = JSON.parse(localStorage.getItem("cart")) || [];
function updateCartCount() {
    const count = document.getElementById("cart-count");
    if (count) {
        count.innerText = cart.length;
    }
}


document.addEventListener("DOMContentLoaded", function () {
updateCartCount();
    const container = document.getElementById("products");
    if (!container) {
        console.log("Products container not found.");
        return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    console.log(products);
    const kenteProducts = products.filter(product => product.category === "Kente");
    if (kenteProducts.length === 0) {
        container.innerHTML = "<h3>No Kente products available.</h3>";
        return;
    }

    let output = "";

    kenteProducts.forEach(product => {
    output += `
        <div class="card product">
    <span class="product-id">${product.id}</span>
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p><strong>Price:</strong> $${product.price}</p>

            <button class="cart-btn">Add to Cart</button>
        </div>
    `;
});
    container.innerHTML = output;
const buttons = document.querySelectorAll(".product button");





buttons.forEach(button => {
    button.addEventListener("click", function () {
 console.log("Button clicked");
        const product = this.parentElement;

const name = product.querySelector("h3").innerText;

const price = parseFloat(
    product.querySelector("p").innerText.replace("Price:", "").replace("$", "").trim()
);

const image = product.querySelector("img").src;

cart.push({
    name: name,
    price: price,
    image: image,
    quantity: 1
});

localStorage.setItem("cart", JSON.stringify(cart));
updateCartCount();
alert(name + " added to cart!");
    });
});
});































function deleteProduct(id) {

    if (!confirm("Delete this product permanently?")) {
        return;
    }

    // Get all products from localStorage
    let products = JSON.parse(localStorage.getItem("products")) || [];

    // Remove the selected product
    products = products.filter(product => product.id !== id);

    // Save the updated products back to localStorage
    localStorage.setItem("products", JSON.stringify(products));

    // Refresh the page so the product disappears
    location.reload();
}