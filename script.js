/*==========================================
  BENKUMHENE ONLINE SHOP
  KENTE SHOP JAVASCRIPT
==========================================*/

//============================
// Shopping Cart
//============================
let cartCount = 0;
function addCart() {
 cartCount++;
    document.getElementById("cart-count").innerHTML = cartCount;
    alert("? Product added to cart!\n\nItems in Cart: " + cartCount);

}

//============================
// Search Products
//============================

const searchInput = document.getElementById("search");
if(searchInput){
searchInput.addEventListener("keyup", function(){
    let value = this.value.toLowerCase();
    let cards = document.querySelectorAll(".card");
    cards.forEach(function(card){
        let product =
        card.innerText.toLowerCase();
        if(product.indexOf(value) > -1){
            card.style.display = "";
        }else{
            card.style.display = "none";
        }
    });
});
}



//============================
// Category Filter
//============================
function filterProducts(category){
    let cards = document.querySelectorAll(".card");
    cards.forEach(function(card){
        if(category=="all"){
            card.style.display="block";
        }
        else if(card.classList.contains(category)){
            card.style.display="block";
        }
        else{
            card.style.display="none";
        }
    });
}



//============================
// Newsletter
//============================

let subscribeButton =
document.querySelector(".newsletter button");
if(subscribeButton){
subscribeButton.onclick=function(){
let email=document.querySelector(".newsletter input").value;
if(email==""){
alert("Please enter your email address.");
}
else{
alert("Thank you for subscribing!\n\n"+email);
document.querySelector(".newsletter input").value="";
}
}
}



//============================
// Smooth Scroll
//============================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){
e.preventDefault();
document.querySelector(this.getAttribute("href")).scrollIntoView({
behavior:"smooth"
});
});
});



//============================
// Back To Top Button
//============================
let topButton=document.createElement("button");
topButton.innerHTML="?";
topButton.id="topButton";
document.body.appendChild(topButton);
topButton.style.position="fixed";
topButton.style.bottom="20px";
topButton.style.right="20px";
topButton.style.width="50px";
topButton.style.height="50px";
topButton.style.border="none";
topButton.style.borderRadius="50%";
topButton.style.background="gold";
topButton.style.cursor="pointer";
topButton.style.display="none";
topButton.style.fontSize="20px";
topButton.style.boxShadow="0 0 10px rgba(0,0,0,.3)";
topButton.style.zIndex="999";

window.onscroll=function(){
if(document.body.scrollTop>300 ||
document.documentElement.scrollTop>300){
topButton.style.display="block";
}
else{
topButton.style.display="none";
}
}
topButton.onclick=function(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}




//============================
// Product Hover Animation
//============================
let cards=document.querySelectorAll(".card");
cards.forEach(function(card){
card.addEventListener("mouseenter",function(){
this.style.transform="translateY(-10px) scale(1.03)";
});
card.addEventListener("mouseleave",function(){
this.style.transform="translateY(0px) scale(1)";
});
});



//============================
// Welcome Message
//============================
window.onload=function(){
console.log("Welcome to Benkumhene Online Shop");
}



//============================
// Loading Effect
//============================
window.addEventListener("load",function(){
document.body.style.opacity="0";
setTimeout(function(){
document.body.style.transition="1s";
document.body.style.opacity="1";
},100);
});




//============================
// Product Click Effect
//============================
cards.forEach(function(card){
card.addEventListener("click",function(){
this.style.boxShadow="0 0 25px gold";
setTimeout(()=>{
this.style.boxShadow="0 5px 20px rgba(0,0,0,.15)";
},400);
});
});



//============================
// Current Year in Footer
//============================
let footer=document.querySelector("footer p");
if(footer){
footer.innerHTML="© "+new Date().getFullYear()+" Benkumhene Online Shop";
}