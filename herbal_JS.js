// ============================
// BENKUMHENE HERBAL SHOP
// ============================

// Shopping Cart
let cart = JSON.parse(localStorage.getItem("cart")) || [];
updateCartCount();
const buttons = document.querySelectorAll(".product button");
buttons.forEach((button)=>{
button.addEventListener("click",function(){
const product = this.parentElement;
const name = product.querySelector("h3").innerText;
const price = product.querySelector("p").innerText;
cart.push({
name:name,
price:price
});
localStorage.setItem("cart",JSON.stringify(cart));
updateCartCount();
alert(name + " added to cart!");
});
});
function updateCartCount(){
const count = document.getElementById("cart-count");
if(count){
count.innerText = cart.length;
}
}

// Search
const search = document.querySelector(".icons input");
search.addEventListener("keyup",function(){
let value = this.value.toLowerCase();
let products = document.querySelectorAll(".product");
products.forEach(function(item){
let name = item.querySelector("h3").innerText.toLowerCase();
if(name.indexOf(value)>-1){
item.style.display="block";
}else{
item.style.display="none";
}
});
});


// ===========================
// Product Category Filter
// ===========================
function filterProducts(category){
const products = document.querySelectorAll(".product");
products.forEach(function(product){
if(category === "all"){
product.style.display = "block";
}
else if(product.dataset.category === category){
product.style.display = "block";
}
else{
product.style.display = "none";
}
});
}














document.addEventListener("DOMContentLoaded", function () {
    const container = document.getElementById("products");
    if (!container) {
        console.log("Products container not found.");
        return;
    }

    const products = JSON.parse(localStorage.getItem("products")) || [];
    console.log(products);
    const herbalProducts = products.filter(product => product.category === "Herbal");
    if (herbalProducts.length === 0) {
        container.innerHTML = "<h3>No Herbal products available.</h3>";
        return;
    }

    let output = "";
    herbalProducts.forEach(product => {
        output += `
            <div class="product">
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>Price:</strong> $${product.price}</p>
                <button>Add to Cart</button>
            </div>
        `;
    });

    container.innerHTML = output;
const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {
    button.addEventListener("click", function () {
        const product = this.parentElement;

        const name = product-card.querySelector("h3").innerText;
        const price = product-card.querySelector("p").innerText;

        cart.push({
            name: name,
            price: price
        });

        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartCount();
        alert(name + " added to cart!");
    });
});
});