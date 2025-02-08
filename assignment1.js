// --- Funny Story ---
// Declare variables using let and const

let character = "Koiree";
let action = "debugged";
let object = "a bug the size of Mount Everest";
let place = "the coffee shop";
let time = "a stormy night";

const occasion = "the final bug in the project";

// Create the story using string concatenation (older method)
console.log("\n--- Funny Story ---\n");
console.log(character + " was " + action + " code at " + place + " on " + time + ".");
console.log("Suddenly, " + character + " encountered " + object + " and decided to fix it with a single keystroke.");
console.log("It turned out to be " + occasion + ", and the client threw a virtual celebration for the team!");

// --- Different Version of the Story ---
// Change variable values to create a new story
character = "Syre";
action = "rewrote";
object = "a typo in the README";
place = "the office";
time = "a bright sunny morning";

console.log("\n--- Different Version of the Story ---\n");
console.log(character + " was " + action + " documentation at " + place + " on " + time + ".");
console.log("Suddenly, " + character + " discovered " + object + " and decided to rewrite the entire section.");
console.log("It turned out to be a great improvement, and their teammates awarded " + character + " the title of “README King”!");

// ---- REFACTORED USING TEMPLATE LITERALS ----
console.log("\nREFACTORED USING TEMPLATE LITERALS\n")
// Initially, I used string concatenation to build sentences, 
// but this approach can become difficult to read and maintain. 
// Template literals (`${}` inside backticks `` ` ``) provide a cleaner, 
// more readable, and modern way to format strings in JavaScript.
// They also eliminate the need for manual spacing and the `+` operator.

// --- Funny Story ---
// Declare variables using let and const
character = "Koiree";
action = "debugged";
object = "a bug the size of Mount Everest";
place = "the coffee shop";
time = "a stormy night";

console.log("\n--- Funny Story ---\n");
// Using template literals for cleaner and more readable output
console.log(`${character} was ${action} code at ${place} on ${time}.`);
console.log(`Suddenly, ${character} encountered ${object} and decided to fix it with a single keystroke.`);
console.log(`It turned out to be ${occasion}, and the client threw a virtual celebration for the team!`);

// --- Different Version of the Story ---
// Change variable values to create a new story
character = "Syre";
action = "rewrote";
object = "a typo in the README";
place = "the office";
time = "a bright sunny morning";

console.log("\n--- Different Version of the Story ---\n");
console.log(`${character} was ${action} documentation at ${place} on ${time}.`);
console.log(`Suddenly, ${character} discovered ${object} and decided to rewrite the entire section.`);
console.log(`It turned out to be a great improvement, and their teammates awarded ${character} the title of “README King”!`);