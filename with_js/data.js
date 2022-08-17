import getData from "./userData.js"

/**
 * Pumpkin submission
 * Global variables for keeping track of pumpkin measurements submitted in the browser
 */
let pumpkinForm = document.getElementById('patch-form');
let localTable =document.getElementById('local-form')
let pn = 1;

pumpkinForm.addEventListener('submit', evt => {
    // Get input value elements 
    let formHeight = document.getElementById("height")
    let formCircumference = document.getElementById("circumference")
    let formWeight = document.getElementById("weight")

    // Get error display element
    let formError = document.getElementById("patch-error")

    // Prevent page refresh
    evt.preventDefault()

    if (formHeight.value == '' && formCircumference.value == '' && formWeight.value == '') {
        // Validation handling 
        formError.style.display = 'block';
    } else {
        // Valid form submission
        formError.style.display = 'none';

        // Appends values into form
        let row = document.createElement("tr")

        let patchNo = document.createElement("td")
        patchNo.innerHTML = pn
        row.appendChild(patchNo)
        pn ++

        let height = document.createElement("td")
        height.innerHTML = formHeight.value
        row.appendChild(height)
        formHeight.value = ''

        let circumference = document.createElement("td")
        circumference.innerHTML = formCircumference.value
        row.appendChild(circumference)
        formCircumference.value = ''

        let weight = document.createElement("td")
        weight.innerHTML = formWeight.value
        row.appendChild(weight)
        formWeight.value = ''

        localTable.appendChild(row)
    }
})

/**
 * Helper function
 * @returns javascript node with table headings
 */
 const getTableHeadings = () => {
    const tableHeadings = document.createElement("tr")
    tableHeadings.className = "heading"

    let patchNumber = document.createElement("th")
    patchNumber.innerHTML = "Patch No."
    tableHeadings.appendChild(patchNumber)

    const height = document.createElement("th")
    height.innerHTML = "Height (cm)"
    tableHeadings.appendChild(height)

    const circumference = document.createElement("th")
    circumference.innerHTML = "Circumference (cm)"
    tableHeadings.appendChild(circumference)

    const weight = document.createElement("th")
    weight.innerHTML = "Weight (kg)"
    tableHeadings.appendChild(weight)

    return tableHeadings;
}

/**
 * Rendering submissions
 * 'Server-side' submissions are programmatically displayed from a JSON file.
 */

// Parent div
const tables = document.getElementById("tables")

// Enumeration of JSON data
for (let [key, value] of Object.entries(getData())) {

    // Div for current user being processed
    let dataHarvest = document.createElement("div")
    dataHarvest.className = "data-harvest"

    let heading = document.createElement("h4")
    heading.innerHTML = "Pumpkin data for " + key
    dataHarvest.appendChild(heading)
    
    // Loops over all harvests in user history
    for (let harvestIndex = 0; harvestIndex < value.length; harvestIndex++) {
        let yearHeading = document.createElement("h5")
        yearHeading.innerHTML = "Year " + value[harvestIndex].year;
        dataHarvest.appendChild(yearHeading)

        // Creates table for current harvest
        let table = document.createElement("table")
        table.appendChild(getTableHeadings())

        for (let pumpkinIndex = 0; pumpkinIndex < value[harvestIndex].pumpkins.length; pumpkinIndex++) {
            let row = document.createElement("tr")

            let patchNo = document.createElement("td")
            patchNo.innerHTML = pumpkinIndex + 1
            row.appendChild(patchNo)

            let height = document.createElement("td")
            height.innerHTML = value[harvestIndex].pumpkins[pumpkinIndex].height
            row.appendChild(height)

            let circumference = document.createElement("td")
            circumference.innerHTML = value[harvestIndex].pumpkins[pumpkinIndex].circumference
            row.appendChild(circumference)

            let weight = document.createElement("td")
            weight.innerHTML = value[harvestIndex].pumpkins[pumpkinIndex].weight
            row.appendChild(weight)
            table.appendChild(row)
        }
        dataHarvest.appendChild(table)
    }

    tables.appendChild(dataHarvest)

    let line = document.createElement("hr")
    dataHarvest.appendChild(line)
};