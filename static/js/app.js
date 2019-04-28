// from data.js
const tableData = data;

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

    // Use the input to filter the selection
    const byDate = tableData.filter(data => {
        return data.datetime === enterDate
    })

    const byCity = tableData.filter(city => {
        return city.city === enterCity
    })

    const byState = tableData.filter(state => {
        return state.state === enterState
    })

    const byCountry = tableData.filter(country => {
        return country.country === enterCountry
    })

    const byShape = tableData.filter(shape => {
        return shape.shape === enterShape
    })

    // Loop through the filtered data and put on webpage
    byDate.forEach(data => {
        const row = tbody.append("tr");
        for (const key in data) {
            row.append("td").text(data[key]);
        }
    })

    byCity.forEach(city => {
        const row = tbody.append("tr");
        for (const key in city) {
            row.append("td").text(city[key]);
        }
    })

    byState.forEach(state => {
        const row = tbody.append("tr");
        for (const key in state) {
            row.append("td").text(state[key]);
        }
    })

    byCountry.forEach(country => {
        const row = tbody.append("tr");
        for (const key in country) {
            row.append("td").text(country[key]);
        }
    })

    byShape.forEach(shape => {
        const row = tbody.append("tr");
        for (const key in shape) {
            row.append("td").text(shape[key]);
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