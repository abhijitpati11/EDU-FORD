var navLinks = document.getElementById("navLinks");
function showMenu() {
    navLinks.style.right = "0";
}
function hideMenu() {
    navLinks.style.right = "-200px";
}


// comment button functtion

let click = document.querySelector(".actionButton");
click.addEventListener("click", function(e) {
    alert("This is feature is currently under service. Will be active as soon as possible")
})

