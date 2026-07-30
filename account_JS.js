
<script>
const myName=document.getElementById("firstName");
const myEmail=document.getElementById("gmail");
const myNumber=document.getElementById("number");
const myAddress=document.getElementById("address");

const accountForm={
name:"",
email:"",
number:"",
address:"",
}

function saveAccount(){
accountForm.name=myName.value,
accountForm.email=myEmail.value,
accountForm.number=myNumber.value,
accountForm.address=myAddress.value,

let accountList = JSON.parse(localStorage.getItem("accountList")) || [];
accountList.push({...accountForm});
localStorage.setItem("accountList", JSON.stringify(accountList));
}

console.log(accountForm)

document.getElementById("accountForm").addEventListener("submit", function(e){
    e.preventDefault();
    saveAccount();
});
</script>








const adverts = [

{
image:"images/kente1.jpg",
title:"Beautiful Kente",
text:"Latest Kente Collection"
},

{
image:"images/herbal1.jpg",
title:"Herbal Products",
text:"100% Natural Herbal Medicine"
},

{
image:"images/shoes1.jpg",
title:"Fashion Shoes",
text:"New Arrival Collection"
},

{
image:"images/bag1.jpg",
title:"Ladies Bags",
text:"Premium Quality Bags"
},

{
image:"images/jewelry1.jpg",
title:"Jewelry",
text:"Luxury Accessories"
}

];

let current = 0;

function changeAdvert(){

current++;

if(current >= adverts.length){

current = 0;

}

document.getElementById("advertImage").src =
adverts[current].image;

document.getElementById("advertTitle").innerHTML =
adverts[current].title;

document.getElementById("advertText").innerHTML =
adverts[current].text;

}

setInterval(changeAdvert,3000);