// Select display
const result = document.getElementById("result");

// Preload click sound
const clickAudio = document.getElementById("clickSound");

// Play click sound safely
function btnSound() {
    clickAudio.currentTime = 0; // reset to start
    clickAudio.play();
}

// Append clicked button value
function appendValue(value) {
    if (result.value === "Error") result.value = "";
    result.value += value;
}

// Clear display
function clearResult() {
    result.value = "";
}

// Delete last character
function deleteLast() {
    if (result.value === "Error") {
        result.value = "";
    } else {
        result.value = result.value.slice(0, -1);
    }
}

// Calculate the expression
function calculateResult() {
    try {
        let expression = result.value;

        if (expression.trim() === "") return;

        expression = expression.replace(/%/g, "/100");

        let calculated = eval(expression);

        if (!isFinite(calculated)) throw new Error("Invalid");

        result.value = calculated;
    } catch (error) {
        result.value = "Error";
    }

    animateFlash();
}

// Flash effect on calculation
function animateFlash() {
    result.style.background = "#555";
    setTimeout(() => {
        result.style.background = "transparent";
    }, 100);
}

// Keyboard support
document.addEventListener("keydown", function (event) {
    const key = event.key;

    if (!isNaN(key) || "+-*/.%".includes(key)) {
        appendValue(key);
        btnSound();
    } else if (key === "Enter") {
        calculateResult();
        btnSound();
    } else if (key === "Backspace") {
        deleteLast();
        btnSound();
    } else if (key === "Escape") {
        clearResult();
        btnSound();
    }
});

// Dark mode toggle
const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");

    // Change icon between moon and sun
    if (document.body.classList.contains("dark")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }

    btnSound(); // play sound on toggle
});
