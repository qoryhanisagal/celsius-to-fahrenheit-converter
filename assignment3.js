// Function to convert Celsius to Fahrenheit
function convertTemperature() {
    // I start by getting the value entered by the user in the input field.
    // The "temperature" variable holds this value, and I ensure it is converted to a number
    // so I can perform mathematical operations on it.
    let temperature = document.getElementById("temperature").value;
    temperature = Number(temperature); // Convert input to a number.

    // Next, I retrieve the selected scale (Celsius or Fahrenheit) from the dropdown menu.
    // The value will tell me whether to convert from Celsius to Fahrenheit or vice versa.
    let scale = document.getElementById("scale").value;

    // To ensure the input is valid, I check if the entered value is a number.
    // If it's not, I display an error message in the output area and exit the function
    // to prevent further calculations.
    if (isNaN(temperature)) {
        document.getElementById("output").textContent = "Invalid input. Please enter a number.";
        return; // Exit the function if the input is invalid.
    }

    let convertedTemperature; // This variable will hold the converted temperature.
    let convertedScale; // This will store the resulting scale (Celsius or Fahrenheit).

    // Based on the selected scale, I apply the appropriate conversion formula.
    // If the scale is Celsius, I convert it to Fahrenheit. Otherwise, I convert
    // Fahrenheit to Celsius.
    if (scale === "C") {
        convertedTemperature = (temperature * 9/5) + 32; // Celsius to Fahrenheit formula.
        convertedScale = "F"; // The result will be in Fahrenheit.
    } else {
        convertedTemperature = (temperature - 32) * 5/9; // Fahrenheit to Celsius formula.
        convertedScale = "C"; // The result will be in Celsius.
    }

    // I then display the converted temperature in the output area.
    // I use `toFixed(2)` to ensure the result is displayed with two decimal places,
    // making it look clean and professional.
    const outputElement = document.getElementById("output");
    outputElement.textContent = 
        `The converted temperature is ${convertedTemperature.toFixed(2)}°${convertedScale}.`;

    // ----- New Logic: Change Text Color Based on Temperature -----

    // Before applying any new styles, I remove existing temperature-related classes
    // to prevent conflicts or leftover styles from previous conversions.
    outputElement.classList.remove("cold-temperature", "warm-temperature", "hot-temperature");

    // Now I use conditional logic to determine the color of the text
    // based on the converted temperature. This adds a visual element
    // to enhance the user experience.
    if (convertedScale === "F") {
        if (convertedTemperature < 32) {
            // If the temperature is below freezing, I add the "cold-temperature" class.
            outputElement.classList.add("cold-temperature");
        } else if (convertedTemperature >= 32 && convertedTemperature <= 85) {
            // If the temperature is moderate, I add the "warm-temperature" class.
            outputElement.classList.add("warm-temperature");
        } else {
            // For hot temperatures, I add the "hot-temperature" class.
            outputElement.classList.add("hot-temperature");
        }
    } else if (convertedScale === "C") {
        if (convertedTemperature < 0) {
            // For temperatures below 0°C, I add the "cold-temperature" class.
            outputElement.classList.add("cold-temperature");
        } else if (convertedTemperature >= 0 && convertedTemperature <= 30) {
            // For moderate temperatures in Celsius, I use the "warm-temperature" class.
            outputElement.classList.add("warm-temperature");
        } else {
            // For hot temperatures in Celsius, I apply the "hot-temperature" class.
            outputElement.classList.add("hot-temperature");
        }
    }
}


