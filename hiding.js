'use strict';
const closedFace = document.querySelector(".closed");
const openFace = document.querySelector(".open");

// Add event listeners

openFace.addEventListener("click", () => {
	if (closedFace.classList.contains("closed")) {
		closedFace.classList.add("active");
		openFace.classList.remove("active");
        console.log("open")
	}
});
