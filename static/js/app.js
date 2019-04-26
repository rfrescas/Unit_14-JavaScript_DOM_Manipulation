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

    // Select the input from user
    const enterDate = d3.select("#datetime").property("value");

    // Use the input to filter the data
    const byDate = tableData.filter(data => {
        return data.datetime === enterDate
    })
    console.log(byDate)

    // Loop through the filtered data and put on webpage
    byDate.forEach(data => {
        const row = tbody.append("tr");
        for (const key in data) {
            row.append("td").text(data[key]);
        }
    })
})