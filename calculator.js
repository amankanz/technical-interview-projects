function appendToResult(value) {
  document.getElementById('displayResult').value += value;
}

function clearResult() {
  document.getElementById('displayResult').value = "";
}

function backSpace() {
  var currentInput = document.getElementById('displayResult').value;
  document.getElementById('displayResult').value = currentInput.slice(0, -1);
}

function calculate() {
  var result = document.getElementById('displayResult').value;
  document.getElementById('displayResult').value = eval(result);  
}