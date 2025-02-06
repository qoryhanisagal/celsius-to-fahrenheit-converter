// Function to convert Celsius to Fahrenheit
function convertTemperature() {
    // I use prompt to get the Celsius temperature input directly from the user.
    // This makes it interactive and easy for users to enter a value.
    let temperature = prompt("Enter temperature in Celsius:");

    // Here, I convert the user input from a string to a number.
    // This is important because calculations won't work on a string.
    celsius = Number(temperature);

    // I check if the input is a valid number. If it's not, I display an error message
    // and exit the function to avoid unnecessary calculations or errors.
    if (isNaN(temperature)) {
        document.getElementById("output").textContent = "Invalid input. Please enter a number.";
        return; // Exit the function if input is invalid.
    }

    // Using the formula (Celsius * 9/5) + 32, I calculate the Fahrenheit equivalent.
    // This formula is a standard way to convert temperatures.
    let fahrenheit = (temperature * 9/5) + 32;

    // I display the result in the HTML output area.
    // I chose this method to make the result clear and user-friendly.
    document.getElementById("output").textContent = 
        `The conversion of Celsius ${temperature}° to Fahrenheit is ${fahrenheit}°F.`;
}