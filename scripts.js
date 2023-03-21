const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  window.location.href = `https://www.google.com/search?q=${query}`;
})

document.getElementById("search-button").addEventListener("click", function() {
        var searchQuery = document.getElementById("search-input").value;
        window.location.href = "https://www.google.com/search?q=" + searchQuery;
    });
