const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

document.getElementById("search-button").addEventListener("click", function() {
        var searchQuery = document.getElementById("search-input").value;
        window.location.href = "https://www.google.com/search?q=" + searchQuery;
});

ScrollReveal().reveal('.descarga');

ScrollReveal().reveal('.descarga', 
{ delay: 400, duration: 1000, distance: '50px', origin: 'left' });