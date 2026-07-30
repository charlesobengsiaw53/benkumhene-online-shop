//BEGINING CODES  SECTION
let products = JSON.parse(localStorage.getItem("products")) || [];
const form = document.getElementById("editForm");
const imageInput = document.getElementById("image");
let currentIndex = -1;


// PRODUCT LOADING / FUNCTION SECTION
function editProduct(index){
    currentIndex = index;
    document.getElementById("productId").value = products[index].id;
    document.getElementById("name").value = products[index].name;
    document.getElementById("category").value = products[index].category;
    document.getElementById("price").value = products[index].price;
    document.getElementById("stock").value = products[index].stock;
document.getElementById("brand").value = products[index].brand;
document.getElementById("weight").value = products[index].weight;
document.getElementById("discount").value = products[index].discount;
document.getElementById("status").value = products[index].status;
    document.getElementById("description").value = products[index].description;
  const preview = document.getElementById("previewImage");
if (preview) {
    preview.src = products[index].image || "";
}
}


// SAVING SECTION
form.addEventListener("submit", function(e){
    e.preventDefault();
    if(currentIndex === -1){
        alert("Please select a product first.");
        return;
    }
    products[currentIndex].name =
        document.getElementById("name").value;

    products[currentIndex].category =
        document.getElementById("category").value;

    products[currentIndex].price =
        parseFloat(document.getElementById("price").value);

    products[currentIndex].stock =
        parseInt(document.getElementById("stock").value);

products[currentIndex].brand =
    document.getElementById("brand").value;

products[currentIndex].weight =
    parseFloat(document.getElementById("weight").value);

products[currentIndex].discount =
    parseFloat(document.getElementById("discount").value);

products[currentIndex].status =
    document.getElementById("status").value;

products[currentIndex].description =
    document.getElementById("description").value;
if (imageInput.files.length > 0) {

    const reader = new FileReader();

    reader.onload = function () {

        products[currentIndex].image = reader.result;

        localStorage.setItem("products", JSON.stringify(products));
        alert("Product updated successfully!");
        form.reset();
        currentIndex = -1;
    };
    reader.readAsDataURL(imageInput.files[0]);
} 
else {
    localStorage.setItem("products", JSON.stringify(products));
    alert("Product updated successfully!");
    form.reset();
    currentIndex = -1;
}
});
const preview = document.getElementById("previewImage");
imageInput.addEventListener("change", function () {
    if (this.files && this.files[0]) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
        };
        reader.readAsDataURL(this.files[0]);
    }
});
document.getElementById("loadProduct").addEventListener("click", function () {
    const id = document.getElementById("productId").value;
    const index = products.findIndex(product => product.id == id);
    if (index === -1) {
        alert("Product not found.");
        return;
    }
    editProduct(index);
});