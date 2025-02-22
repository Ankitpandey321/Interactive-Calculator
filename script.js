// Append value to the display
function appendValue(value) {
    const result = document.getElementById("result");
    result.value += value;
  }
  
  // Clear the display
  function clearResult() {
    document.getElementById("result").value = "";
  }
  
  // Delete the last character
  function deleteLast() {
    const result = document.getElementById("result");
    result.value = result.value.slice(0, -1);
  }
  
  // Calculate and display the result
  function calculateResult() {
    const result = document.getElementById("result");
    try {
      result.value = eval(result.value);
    } catch (error) {
      result.value = "Error";
    }
  }
  
  // Link keyboard keys to calculator buttons
  document.addEventListener("keydown", function (event) {
    const result = document.getElementById("result");
  
    // Number and operator keys
    if (event.key >= '0' && event.key <= '9' || ['+', '-', '*', '/', '%'].includes(event.key)) {
      result.value += event.key;
    }
  
    // Decimal point
    if (event.key === '.') {
      result.value += event.key;
    }
  
    // Backspace key to delete the last character
    if (event.key === 'Backspace') {
      deleteLast();
    }
  
    // Enter key to calculate the result
    if (event.key === 'Enter') {
      calculateResult();
    }
  
    // Clear the result with 'C' key
    if (event.key.toUpperCase() === 'C') {
      clearResult();
    }
  });
  