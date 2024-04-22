const latinToJavanese = { // (Sample data for basic conversion)
    a: "a",
    i: "i",
    u: "u",
    e: "é",
    o: "o",
    ng: "ng",
    b: "ba",
    c: "ca",
    d: "da",
    // ... include more mappings for other letters
};

const convertButton = document.getElementById("convert-btn");
const latinText = document.getElementById("latin-text");
const javaneseText = document.getElementById("javanese-text");
const darkModeToggle = document.getElementById("dark-mode-toggle");

let isDarkMode = false; // Track dark mode state

// Function to toggle dark mode
function toggleDarkMode() {
    // Toggle the 'dark' class on the body element
    document.body.classList.toggle("dark");
    // Toggle the 'dark' class on the conversion box element
    document.querySelector(".conversion-box").classList.toggle("dark");
}

// Event listener for the Dark Mode toggle button
darkModeToggle.addEventListener("click", function () {
    // Toggle dark mode
    toggleDarkMode();
    // Update dark mode state
    isDarkMode = !isDarkMode;
    // Change text of Dark Mode toggle button based on mode
    darkModeToggle.textContent = isDarkMode ? "Dark" : "Light";
});

convertButton.addEventListener("click", function () {
    const inputText = latinText.value.toLowerCase();
    let convertedText = "";
    for (let char of inputText) {
        convertedText += latinToJavanese[char] || char; // Use mapping or keep unknown characters
    }
    javaneseText.textContent = convertedText;
});