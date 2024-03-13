function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", handleSearchSubmit);

function searchCity(city) {
  apikey = "facba5oe04e0d0e2497c5fe825bta3c4";
  apiURL =
    "https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric";
}
