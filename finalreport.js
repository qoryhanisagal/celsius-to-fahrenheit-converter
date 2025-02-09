// Function to convert a range of temperatures
function convertTemperatureRange(startValue, endValue, scale) {
    // I select the output element where the results will be displayed.
    const outputElement = document.getElementById("output");

    // I first clear any previous results to ensure a fresh display for new conversions.
    outputElement.innerHTML = ""; 

    // I check if the input values are valid numbers.
    if (isNaN(startValue) || isNaN(endValue)) {
        outputElement.textContent = "Invalid input. Please enter valid numbers.";
        return;
    }

    // I ensure that the loop runs correctly by swapping the values if the user enters them in reverse order.
    if (startValue > endValue) {
        [startValue, endValue] = [endValue, startValue]; // Swap values if needed
    }

    // I create a `<ul>` element to list multiple temperature conversions neatly.
    const resultList = document.createElement("ul");

    // I use a `for` loop to go through the range and convert each value.
    // I ensure that loop runs correctly by swapping the values if user enters them in reverse order.
    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemperature; // This variable will hold the converted temperature.
        let convertedScale;  // This will store the resulting scale (Celsius or Fahrenheit).

        // I apply the correct conversion formula based on the user's selected scale.
        if (scale === "C") {
            convertedTemperature = (temp * 9/5) + 32;
            convertedScale = "F";
        } else {
            convertedTemperature = (temp - 32) * 5/9;
            convertedScale = "C";
        }

        // I create a `<li>` item to display each of the converted temperature.
        // I then display the converted temperature in the output area.
        // I use `toFixed(2)` to ensure the result is displayed with two decimal places,
        const listItem = document.createElement("li");
        listItem.textContent = `${temp}°${scale} = ${convertedTemperature.toFixed(2)}°${convertedScale}`;
        
        // Before applying any new styles, I remove existing temperature-related classes
        // to prevent conflicts or leftover styles from previous conversions.
        // I dynamically change the text color based on the temperature range.
        listItem.classList.remove("cold-temperature", "warm-temperature", "hot-temperature");
        if (convertedTemperature < 32) {
            listItem.classList.add("cold-temperature"); // Cold
        } else if (convertedTemperature >= 32 && convertedTemperature <= 85) {
            listItem.classList.add("warm-temperature"); // Warm
        } else {
            listItem.classList.add("hot-temperature"); // Hot
        }

        // I append the list item to the result list.
        resultList.appendChild(listItem);
    }

    // Finally, I append the list to the output element for display.
    outputElement.appendChild(resultList);
}

// Function to handle user input
function getUserTemperatureRange() {
    // I ask the user for the start and end temperature values using `prompt()`.
    let startValue = Number(prompt("Enter the starting temperature:"));
    let endValue = Number(prompt("Enter the ending temperature:"));

    // I prompt the user to select the scale for conversion.
    let scale = prompt("Enter 'C' to convert from Celsius to Fahrenheit or 'F' to convert from Fahrenheit to Celsius:").toUpperCase();

    // I validate that the user entered either 'C' or 'F'.
    if (scale !== "C" && scale !== "F") {
        document.getElementById("output").textContent = "Invalid scale. Please enter 'C' or 'F'.";
        return;
    }

    // I call the function to convert the range using the user's input.
    convertTemperatureRange(startValue, endValue, scale);
}
