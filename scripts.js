const searchButton = document.getElementById("search-button");
const searchInput = document.getElementById("search-input");

searchButton.addEventListener("click", () => {
  const query = searchInput.value;
  window.location.href = `https://www.google.com/search?q=${query}`;
})