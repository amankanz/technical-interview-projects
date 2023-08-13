// Append To Result
function appendToResult(value) {
  document.getElementById('displayResult').value += value;
}

// Clear Result
function clearResult() {
  document.getElementById('displayResult').value = "";
}

//BackSpace
function backSpace() {
  var currentInput = document.getElementById('displayResult').value;
  document.getElementById('displayResult').value = currentInput.slice(0, -1); 
}

//Calculate Result
function calculateResult() {
  var result = eval(document.getElementById('displayResult').value);
  document.getElementById('displayResult').value = result;
}