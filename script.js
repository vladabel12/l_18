function navToggle() {
	document.getElementById("headerUl").classList.toggle("_active");
}

document.addEventListener("DOMContentLoaded", function () {
	document.getElementById("year").textContent = new Date().getFullYear();
});
