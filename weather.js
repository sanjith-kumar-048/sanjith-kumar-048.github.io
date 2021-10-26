var searchButton = document.getElementById("searchButton")

var url = "https://api.weatherapi.com/v1/current.json?key=4b1c987765c343858c8162501212610&q="
var errors = {}
var weatherResults = []
var backgroundColor = ['#0F9D58', '#F4B400', '#4285F4', '#DB4437']

function getMeaning(inputWord) {
    document.getElementById("searchBar").value = ""
    return url + inputWord
}

function displayCards() {
    let container = document.querySelector("#cards")
    console.log(container)
    console.log(weatherResults.location.region)
    var title = document.getElementById("cardTitle");
    title.innerHTML = "Name: " + weatherResults.location.name
    console.log(weatherResults.location.name)
    region = document.getElementById("region")
    region.innerHTML = "Region: " + weatherResults.location.region
    region = document.getElementById("country")
    region.innerHTML = "Country: " + weatherResults.location.country
    region = document.getElementById("condition")
    region.innerHTML = "Condition: " + weatherResults.current.condition.text
    region = document.getElementById("wind_mph")
    region.innerHTML = "Wind in MPH: " + weatherResults.current.wind_mph
    region = document.getElementById("wind_kph")
    region.innerHTML = "Wind in KPH: " + weatherResults.current.wind_kph
    region = document.getElementById("temp_c")
    region.innerHTML = "Temp in C: " + weatherResults.current.temp_c
    region = document.getElementById("temp_f")
    region.innerHTML = "Temp in F: " + weatherResults.current.temp_f
    region = document.getElementById("wind_degree")
    region.innerHTML = "Wind Degree: " + weatherResults.current.wind_degree
    region = document.getElementById("wind_dir")
    region.innerHTML = "Wind Direction: " + weatherResults.current.wind_dir
    region = document.getElementById("pressure_mb")
    region.innerHTML = "Pressure in MB: " + weatherResults.current.pressure_mb
    region = document.getElementById("pressure_in")
    region.innerHTML = "Pressure in IN: " + weatherResults.current.pressure_in
    region = document.getElementById("precip_mm")
    region.innerHTML = "Precip in MM: " + weatherResults.current.precip_mm
    region = document.getElementById("precip_in")
    region.innerHTML = "Precip in IN: " + weatherResults.current.precip_in
    region = document.getElementById("humidity")
    region.innerHTML = "Humidity: " + weatherResults.current.humidity
    region = document.getElementById("cloud")
    region.innerHTML = "Cloud: " + weatherResults.current.cloud
    region = document.getElementById("feelslike_c")
    region.innerHTML = "Feelslike in C: " + weatherResults.current.feelslike_c
    region = document.getElementById("feelslike_f")
    region.innerHTML = "Feelslike in F: " + weatherResults.current.feelslike_f
    region = document.getElementById("vis_km")
    region.innerHTML = "Vis_km: " + weatherResults.current.vis_km
    region = document.getElementById("vis_miles")
    region.innerHTML = "Vis_miles: " + weatherResults.current.vis_miles
    region = document.getElementById("uv")
    region.innerHTML = "UV: " + weatherResults.current.uv
    region = document.getElementById("gust_mph")
    region.innerHTML = "Gust in MPH: " + weatherResults.current.gust_mph
    region = document.getElementById("gust_kph")
    region.innerHTML = "Gust in KPH: " + weatherResults.current.gust_kph
}

function displayErrorCard() {
    let container = document.querySelector("#cards");
    container.innerHTML = "";
    let card;
    card = document.createElement("div");
    card.setAttribute("class", "card");
    color = backgroundColor[3];
    card.setAttribute("style", `background-color:${color};color:white;`);

    let title = document.createElement("p");
    title.setAttribute("class", "cardTitle");
    title.setAttribute("style", `background-color:${color};color:white;`);
    title.innerHTML = errors.title;

    let message = document.createElement("p");
    message.setAttribute("class", "cardBody");
    message.setAttribute("style", `background-color:${color};color:white;`);
    message.innerHTML = errors.message;

    let resolution = document.createElement("p");
    resolution.setAttribute("class", "cardBody");
    resolution.setAttribute("style", `background-color:${color};color:white;`);
    resolution.innerHTML = errors.resolution;

    card.appendChild(title);
    card.appendChild(message);
    card.appendChild(resolution);

    container.appendChild(card);
}


function search() {
    var searchInput = document.getElementById("searchBar").value
    fetch(getMeaning(searchInput))
        .then(response => response.json())
        .then(result => {
            weatherResults = result;
            console.log(weatherResults);
            displayCards();
        })
}
searchButton.addEventListener("click", function() {
    var card = document.getElementById("cards")
    card.setAttribute("style", `background-color:green;color:white;`);
    search()
})
