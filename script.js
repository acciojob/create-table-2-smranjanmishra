function createTable() {
    // Prompt for number of rows and columns
    const rows = parseInt(prompt("Input number of rows"), 10);
    const cols = parseInt(prompt("Input number of columns"), 10);

    // Check if inputs are valid numbers
    if (isNaN(rows) || isNaN(cols) || rows <= 0 || cols <= 0) {
        alert("Please enter valid positive numbers for rows and columns.");
        return;
    }

    // Get the table element
    const table = document.getElementById("myTable");

    // Clear existing table content
    table.innerHTML = "";

    // Create rows and cells
    for (let i = 0; i < rows; i++) {
        const row = table.insertRow();
        for (let j = 0; j < cols; j++) {
            const cell = row.insertCell();
            cell.textContent = `Row-${i} Column-${j}`;
        }
    }
}