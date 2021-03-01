let navLinksContainer = document.getElementById("nav-links-container-mobile");

let navButton = document.getElementById("navButton").onclick = function() {
    navLinksContainer.classList.toggle("hide");
};