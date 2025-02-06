# Koiree Celsius to Fahrenheit Converter

## Overview
This assignment is a simple web-based application that converts a temperature from Celsius to Fahrenheit. The program takes user input, applies the conversion formula, and displays the result on the screen. The goal of this assignment is to practice working with JavaScript functions, user input, and DOM manipulation while applying clean and responsive design principles using HTML and CSS.

---
## Project Files
The project consists of three main files:
1. **`assignment2.html`:** The main structure of the web page.
2. **`assignment2.js`:** The JavaScript logic for converting Celsius to Fahrenheit and displaying the result.
3. **`style.css`:** The CSS file that styles the page and aligns the content.

---

## Design Decisions
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

## File Structure
The project directory is organized as follows:

```
│celsius-to-fahrenheit-converter/
├── img                   # Image Folder
│   ├── hot.png           # Weather icon for hot
│   ├── sun.png           # Weather icon for sunny
│   ├── cloudy.png        # Weather icon for cloudy
│   ├── rainy.png         # Weather icon for rainy
│   └── cold.png          # Weather icon for cold
├── assignment2.html      # Main HTML file
├── assignment2.js        # JavaScript logic
├── style.css             # CSS styling
```


## Features
1. **User Interaction:**
   - The program prompts the user to input a temperature in Celsius using the `prompt()` function.
   - The user’s input is validated to ensure it is a number.

2. **Conversion Logic:**
   - The conversion formula applied is:
   ```
     (celsius * 9/5) + 32;
     ```

3. **Output Display:**
   - The converted temperature is displayed dynamically on the web page under the button.

4. **Responsive Design:**
   - Styled with CSS to provide a visually appealing and user-friendly interface.
   - Includes a container with weather icons (hot, sunny, cloudy, rainy, cold) aligned in a horizontal row.

---

## How It Works
1. Open the `assignment2.html` file in a browser.
2. A prompt will appear asking for a temperature in Celsius.
3. After entering a value, click the **`Convert Celsius to Fahrenheit`** button.
4. The result will be displayed below the button in the format: 

```
The conversion of Celsius 18° to Fahrenheit is 64.4°F.
```
 ---
---

## Lessons Learned
Through this project, I:
- Gained experience with **JavaScript functions** and DOM manipulation to enhance interactivity.
- Practiced validating user input with `isNaN()` for error handling.
- Applied responsive design principles to make the web page visually appealing and user-friendly.
- Developed an understanding of how to combine HTML, CSS, and JavaScript into a cohesive project.

---