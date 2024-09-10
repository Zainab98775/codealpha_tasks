let display = document.getElementById('display');
let buttons = document.querySelectorAll('button');

let currentOperation = '';
let previousOperation = '';
let result = '';
let operator = '';

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    switch (button.id) {
      case 'clear':
        currentOperation = '';
        previousOperation = '';
        result = '';
        operator = '';
        display.value = '';
        break;
      case 'backspace':
        currentOperation = currentOperation.slice(0, -1);
        display.value = currentOperation;
        break;
      case 'divide':
      case 'multiply':
      case 'subtract':
      case 'add':
        if (currentOperation !== '') {
          previousOperation = currentOperation;
          currentOperation = '';
          operator = button.textContent;
          display.value = previousOperation + operator;
        }
        break;
      case 'equals':
        if (previousOperation !== '' && currentOperation !== '') {
          try {
            result = eval(previousOperation + operator + currentOperation);
            display.value = result;
            currentOperation = result;
            previousOperation = '';
            operator = '';
          } catch (error) {
            display.value = 'Error';
          }
        }
        break;
      default:
        if (button.textContent === '.' && currentOperation.includes('.')) {
          break;
        }
        currentOperation += button.textContent;
        display.value = currentOperation;
    }
  });
});