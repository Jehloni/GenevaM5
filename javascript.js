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
//  = document.getElementById("productName");
// let rippleEffect = document.getElementById("ripple1");
// rippleEffect.addEventListener("click", ()=> {
//     let styles = rippleEffect.style;
//     if(styles.opacity == 0) {
//         styles.transform = "scale(10)";
//     } else if (styles.opacity == 1) {
//         styles.transform = "scale(0)";
//     }

//     console.log("button was clicked ")
// })

	// let btn = document.querySelector(".btn");
    const btn = document.querySelectorAll(".btn");
    for(let index = 0; index < btn.length; index++) {
        btn[index].addEventListener("click", ripple);
    }

    function ripple(e) {
        // Create span element
		let ripple = document.createElement("span");

		// Add ripple class to span
		ripple.classList.add("ripple");

		// Add span to the button
		this.appendChild(ripple);

		// Get position of X
		let x = e.clientX - e.target.offsetLeft;

		// Get position of Y
		let y = e.clientY - e.target.offsetTop;

		// Position the span element
		ripple.style.left = `${x}px`;
		ripple.style.top = `${y}px`;

		// Remove span after 0.3s
		setTimeout(() => {
			ripple.remove();
		}, 300);

    }

	// Listen for click event
	// btn.onclick = function (e) {

		// Create span element
		// let ripple = document.createElement("span");

		// Add ripple class to span
		// ripple.classList.add("ripple");

		// Add span to the button
		// this.appendChild(ripple);

		// Get position of X
		// let x = e.clientX - e.target.offsetLeft;

		// Get position of Y
		// let y = e.clientY - e.target.offsetTop;

		// Position the span element
		// ripple.style.left = `${x}px`;
		// ripple.style.top = `${y}px`;

		// Remove span after 0.3s
		// setTimeout(() => {
			// ripple.remove();
		// }, 300);

	// };


	const productName = document.getElementById("productName");
		// to change the color the text
		productName.addEventListener('mouseover', function handleMouseOver() {
			productName.style.color = 'red';
		  });

	const body = document.querySelector('body');
	body.addEventListener('keypress', keyj);
	function keyj(e){
		var screenPositionY = window.scrollY;
		if(screenPositionY == 377 && e.charCode == 108) {
			document.querySelector("footer a").click();
		}
		// else {
		// 	console.log(`You pressed the ${e.key} key! ${e.charCode} and the screen position was ${window.scrollY}`);
		// }
	}

	// grab image
	// add event listener
	// create function to blur
	var productPicture = document.getElementById("productPicture");
	productPicture.addEventListener('mouseover', mainpicBlur);
	productPicture.addEventListener('mouseleave', mainpicUnblur);

	function mainpicBlur() {
		productPicture.style = "filter: blur(30px)";
	}
	function mainpicUnblur() {
		productPicture.style = "filter: blur(0)";
	}
