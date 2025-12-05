// Select display
const result = document.getElementById("result");

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

// Add a flash animation on result update
function animateFlash() {
    result.style.background = "#555";
    setTimeout(() => {
        result.style.background = "transparent";
    }, 100);
}

// Smooth click sound
function btnSound() {
    const audio = new Audio("https://www.soundjay.com/buttons/sounds/button-16.mp3");
    audio.volume = 0.3;
    audio.play();
}

// Enable keyboard support
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
