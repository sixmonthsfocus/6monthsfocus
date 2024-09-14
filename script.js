// JavaScript (script.js)

// Get the modal
const modal = document.getElementById("contactModal");

// Get the link that opens the modal
const contactLink = document.getElementById("contactLink");

// Get the <span> element that closes the modal
const closeSpan = document.getElementsByClassName("close")[0];

// When the user clicks the contact link, open the modal
contactLink.onclick = function (event) {
    event.preventDefault(); // Prevent default link behavior
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeSpan.onclick = function () {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

// Scroll to Top Button Functionality
const scrollToTopBtn = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

scrollToTopBtn.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}