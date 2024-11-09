// Add an event listener to the window for the scroll event
window.addEventListener("scroll", function() {
    // Select the navbar element
    const navbar = document.querySelector(".navbar");
    
    // Check if the page has been scrolled more than 50 pixels
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled"); // Add the 'scrolled' class if true
    } else {
        navbar.classList.remove("scrolled"); // Remove the 'scrolled' class if not
    }
});
