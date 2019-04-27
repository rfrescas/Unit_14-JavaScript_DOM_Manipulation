// from data.js
const tableData = data;

// grab element to filter the table
const filterTable = d3.select("#filter-btn");

// create the variable that will reference the table body
const tbody = d3.select("tbody");

// Create a function to build out the table
filterTable.on("click", function () {

    // Prevent default form refresh
    d3.event.preventDefault();

    // clear the html tbody for any new data
    tbody.html("");

    // Select the input(s) from user
    const enterDate = d3.select("#datetime").property("value");
    const enterCity = d3.select("#city").property("value");
    const enterState = d3.select("#state").property("value");
    const enterCountry = d3.select("#country").property("value");
    const enterShape = d3.select("#shape").property("value");


    // Use the input to filter the selection
    const byDate = tableData.filter(data => {
        return data.datetime === enterDate
    })
    console.log(byDate)

    const byCity = tableData.filter(city => {
        return city.city === enterCity
    })
    console.log(byCity)

    const byState = tableData.filter(state => {
        return state.state === enterState
    })
    console.log(byState)

    const byCountry = tableData.filter(country => {
        return country.country === enterCountry
    })
    console.log(byCountry)


    const byShape = tableData.filter(shape => {
        return shape.shape === enterShape
    })
    console.log(byShape)

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