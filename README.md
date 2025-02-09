# 🌡️ Temperature Converter Application

## 📌 Overview
The **Temperature Converter Application** allows users to convert temperatures between Celsius and Fahrenheit. The project dynamically updates the UI to display converted values and provides color-coded visual feedback based on temperature ranges (cold, warm, hot). This application was developed as part of **FSDI 103 - Programming Fundamentals**.

## 🚀 Features
- 🔹 **Convert Single Temperature**: Input a value in Celsius or Fahrenheit and get an instant conversion.
- 🔹 **Convert Temperature Ranges**: Select a start and end temperature and receive a list of converted values.
- 🔹 **Dynamic Output Styling**: Results change color based on temperature:
  - **Cold (Blue)**: Below freezing point.
  - **Warm (Orange)**: Moderate temperature range.
  - **Hot (Red)**: High temperatures.
- 🔹 **Responsive UI**: Works across different screen sizes.

## 📂 **Project Structure**
```text
├── img                   # Image assets (weather icons)
│   ├── hot.png
│   ├── sun.png
│   ├── cloudy.png
│   ├── rainy.png
│   └── cold.png
├── finalreport.html      # Main HTML file
├── finalreport.css       # CSS styling for layout & responsiveness
├── finalreport.js        # JavaScript logic for conversion & interactivity
├── README.md             # Project documentation
```

## 🔧 **How to Use**
1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd celsius-to-fahrenheit-converter
   ```
2. **Open finalreport.html in a Browser:**

- Test single and range conversions.
- Observe color-coded results.
- Verify responsive layout.
  
## 📸 **Screenshots**

![image](https://github.com/user-attachments/assets/cb83dcbe-66fb-4776-8893-18f2830c5d8a)

![image](https://github.com/user-attachments/assets/207216f3-72dd-4f74-b01a-cd9dd35ea00e)

![image](https://github.com/user-attachments/assets/c02270a8-1121-4309-a29a-eae638333637)

![image](https://github.com/user-attachments/assets/22da70b3-a15d-400c-a818-588d8a04b915)

![image](https://github.com/user-attachments/assets/a485bf9e-0e0c-42d6-9222-0eb5aeb5e7a4)








## 🛠 **Technologies Used**
- **HTML5:** Page structure.
- **CSS3:** Responsive design & styling.
- **JavaScript:** Logic for temperature conversion and UI updates.

## 📌 **Key Functions in finalreport.js**
```javascript
function convertTemperatureRange(startValue, endValue, scale) {
    const outputElement = document.getElementById("output");
    outputElement.innerHTML = ""; 

    if (isNaN(startValue) || isNaN(endValue)) {
        outputElement.textContent = "Invalid input. Please enter valid numbers.";
        return;
    }

    if (startValue > endValue) {
        [startValue, endValue] = [endValue, startValue];
    }

    const resultList = document.createElement("ul");

    for (let temp = startValue; temp <= endValue; temp++) {
        let convertedTemperature;
        let convertedScale;

        if (scale === "C") {
            convertedTemperature = (temp * 9/5) + 32;
            convertedScale = "F";
        } else {
            convertedTemperature = (temp - 32) * 5/9;
            convertedScale = "C";
        }

        const listItem = document.createElement("li");
        listItem.textContent = `${temp}°${scale} = ${convertedTemperature.toFixed(2)}°${convertedScale}`;
        
        listItem.classList.remove("cold-temperature", "warm-temperature", "hot-temperature");
        if (convertedTemperature < 32) {
            listItem.classList.add("cold-temperature");
        } else if (convertedTemperature >= 32 && convertedTemperature <= 85) {
            listItem.classList.add("warm-temperature");
        } else {
            listItem.classList.add("hot-temperature");
        }

        resultList.appendChild(listItem);
    }

    outputElement.appendChild(resultList);
}

function getUserTemperatureRange() {
    let startValue = Number(prompt("Enter the starting temperature:"));
    let endValue = Number(prompt("Enter the ending temperature:"));

    let scale = prompt("Enter 'C' to convert from Celsius to Fahrenheit or 'F' to convert from Fahrenheit to Celsius:").toUpperCase();

    if (scale !== "C" && scale !== "F") {
        document.getElementById("output").textContent = "Invalid scale. Please enter 'C' or 'F'.";
        return;
    }

    convertTemperatureRange(startValue, endValue, scale);
}

```
**## Design Decisions**
1. **Interactive Prompt:**
- Using `prompt()` provides a direct way for users to input data.
- The input is validated to prevent errors from invalid entries.

2. **Dynamic Output:**
- The result is displayed dynamically using `document.getElementById()` for better usability.

3. **Visual Design:**
- Weather icons (Hot, Sunny, Cloudy, Rainy, Cold) are aligned horizontally to add a fun and visual element to the page.
- A light gray background (`#f3f4f6`) contrasts with the white container, creating a clean, modern look.
- The button is styled with a green background (`#28a745`) to clearly indicate the call-to-action.

---

## Features
1. **User Interaction:**
   - The program prompts the user to input a temperature in Celsius using the `prompt()` function.
   - The user’s input is validated to ensure it is a number.

2. **Conversion Logic:**
   - The conversion formula applied is:
   ```
    Fahrenheit =  (celsius * 9/5) + 32;
     ```

3. **Output Display:**
   - The converted temperature is displayed dynamically on the web page under the button.

4. **Responsive Design:**
   - Styled with CSS to provide a visually appealing and user-friendly interface.
   - Includes a container with weather icons (hot, sunny, cloudy, rainy, cold) aligned in a horizontal row.

---

## Lessons Learned
Through this project, I:
- Gained experience with **JavaScript functions** and DOM manipulation to enhance interactivity.
- Practiced validating user input with `isNaN()` for error handling.
- Applied responsive design principles to make the web page visually appealing and user-friendly.
- Developed an understanding of how to combine HTML, CSS, and JavaScript into a cohesive project.
- Learned how to customize dropdown menus by removing default styles and adding modern styling for better user experience and consistency across browsers.

---
