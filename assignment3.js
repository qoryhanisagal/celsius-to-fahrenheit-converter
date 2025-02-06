// Function to convert Celsius to Fahrenheit
function convertTemperature() {
    let temperature = document.getElementById("temperature").value;
    temperature = Number(temperature); // Convert input to number

    // Get the selected scale from the dropdown
    let scale = document.getElementById("scale").value;

    // I check if the input is a valid number. If it's not, I display an error message
    // and exit the function to avoid unnecessary calculations or errors.
    // Validate input
    if (isNaN(temperature)) {
        document.getElementById("output").textContent = "Invalid input. Please enter a number.";
        return; // Exit the function if input is invalid.
    }

    let convertedTemperature;
    let convertedScale;

    // Convert based on the selected scale
    if (scale === "C") {
        convertedTemperature = (temperature * 9/5) + 32;
        convertedScale = "F";
    } else {
        convertedTemperature = (temperature - 32) * 5/9;
        convertedScale = "C";
    }

    // Display the result in the output area
    document.getElementById("output").textContent = 
        `The converted temperature is ${convertedTemperature.toFixed(2)}°${convertedScale}.`;
}