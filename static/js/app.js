// from data.js
let tableData = data;

// grab element to filter the table
const filterTable = d3.select("#filter-btn");

// grab element to reset the table
const resetTable = d3.select("#reset-btn")

// create the variable that will reference the table body
const tbody = d3.select("tbody");

// create a function to load all data
function loadData() {
    tableData.forEach(data => {
        const row = tbody.append("tr");
        for (const key in data) {
            row.append("td").text(data[key]);
        }
    })
}
// initially pre-load the data on the page
loadData()

// Create a function to build out the table
filterTable.on("click", function () {

    // Prevent default form refresh
    d3.event.preventDefault();

    // clear the html tbody for any new data
    tbody.html("");

    // Select the input(s) from user
    const enterDate = d3.select("#datetime").property("value").toLowerCase();
    const enterCity = d3.select("#city").property("value").toLowerCase();
    const enterState = d3.select("#state").property("value").toLowerCase();
    const enterCountry = d3.select("#country").property("value").toLowerCase();
    const enterShape = d3.select("#shape").property("value").toLowerCase();

    // Create a new variable that will filter original data from search 
    const filteredData = data.filter(function (sighting) {
        const searchDate = sighting.datetime;
        const searchCity = sighting.city;
        const searchState = sighting.state;
        const searchCountry = sighting.country;
        const searchShape = sighting.shape;

        // If statements to pull filtered criteria using search criteria
        if (
            (searchDate === enterDate || enterDate === "") &&
            (searchCity === enterCity || enterCity === "") &&
            (searchState === enterState || enterState === "") &&
            (searchCountry === enterCountry || enterCountry === "") &&
            (searchShape === enterShape || enterShape === "")
        ) {
            return true;
        } else {
            return false;
        }
    });

    // Loop through the filtered data and put on webpage
    filteredData.forEach(data => {
        const row = tbody.append("tr");
        for (const key in data) {
            row.append("td").text(data[key]);
        }
    })
})

// Create a function to reset the table with a button click
resetTable.on("click", function () {

    // clear the html tbody for any new data
    tbody.html("");
    // reload the data to show everything
    loadData()
})