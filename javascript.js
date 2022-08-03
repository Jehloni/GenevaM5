// function myFunction() {
// document.getElementById("li").style.color = "#ff0000";
// document.getElementById("h1").style.color = "magenta";
// document.getElementById("mainContentListOfCategories").style.color = "blue";
// document.getElementById("h2").style.color = "lightblue";
// }

// /* Reach into  */
// var productNameHandle; // Variable to hold the product name element

// Grabbing the product name element and storing it in the productNameHandle variable
productNameHandle = document.getElementById("productName");

// // Over here I'm just changing the inner text, also technically called "innerHTML" to something else
// productNameHandle.innerHTML = "Toph has been changed"

productNameHandle.onclick = function() {
    alert( "You like clicking things huh? 🤔" );
}
ListOfCategories = document.getElementById("mainContentListOfCategories");

ListOfCategories.onclick = function() {
    alert("uh oh, why did u do that?")
}
// -------------
itemdef = document.getElementById("itemdefinition");

itemdef.onclick = function() {
    alert("So, you want to know more? click on the ingredients")
}
ingredients = document.getElementById("ingredients");

ingredients.onclick = function() {
    alert("Any suggestiond to the making of the products? Email us!")
}
headername = document.getElementById("headername");

headername.onclick = function() {
    alert("Welcome to Jehneva!")
}