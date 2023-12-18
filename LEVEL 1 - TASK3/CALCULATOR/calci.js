let resultField = document.getElementById('result');

function appendNumber(number) {
  resultField.value += number;
}

function appendOperator(operator) {
  resultField.value += operator;
}

function calculate() {
  try {
    let result = eval(resultField.value);
    resultField.value = result;
  } catch (error) {
    resultField.value = 'Error';
  }
}

function clearResult() {
  resultField.value = resultField.value.slice(0, -1);
}

function clearAll() {
  resultField.value = '';
}

function deleteLast() {
  resultField.value = '';
}

function appendDecimal() {
  resultField.value += '.';
}
