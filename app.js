console.log('Hello World');

// Get elements
const getElement = (id) => {
  return document.getElementById(id);
};

const firstNumber = getElement('num1');
const secondNumber = getElement('num2');
const result = getElement('result');
const submitBtn = getElement('submit');

const doubleOperation = getElement('double');
const squareOperation = getElement('square');
const indexOperation = getElement('index');
const factorialOperation = getElement('factorial');
const sumOfDigitsOperation = getElement('sumOfDigits');

// Add event listener
submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (
    doubleOperation.checked === false &&
    squareOperation.checked === false &&
    indexOperation.checked === false &&
    factorialOperation.checked === false &&
    sumOfDigitsOperation.checked === false
  ) {
    return alert('Please select an operation!');
  }

  const firstNumberValue = Number(firstNumber.value);
  const secondNumberValue = Number(secondNumber.value);

  // calculate double
  if (doubleOperation.checked) {
    if (!firstNumberValue) {
      return alert('Please enter a number!');
    }
    result.value = firstNumberValue * 2;
  }

  // calculate square
  else if (squareOperation.checked) {
    if (firstNumberValue < 0 || !firstNumberValue) {
      return alert('Please enter a positive number!');
    }
    result.value = firstNumberValue * firstNumberValue;
  }

  // calculate index
  else if (indexOperation.checked) {
    if (
      firstNumberValue < 0 ||
      secondNumberValue < 0 ||
      !firstNumberValue ||
      !secondNumberValue
    ) {
      return alert('Please enter 2 positive numbers!');
    }

    result.value = Math.pow(firstNumberValue, secondNumberValue);
  }

  // calculate factorial
  else if (factorialOperation.checked) {
    if (firstNumberValue < 0 || !firstNumberValue) {
      return alert('Please enter a positive number!');
    }
    result.value = factorial(firstNumberValue);
  }

  // calculate sum of digits
  else if (sumOfDigitsOperation.checked) {
    if (firstNumberValue < 0 || !firstNumberValue) {
      return alert('Please enter a positive number!');
    }

    const digits = firstNumberValue.toString().split('');
    const sum = digits.reduce((acc, curr) => {
      return acc + Number(curr);
    }, 0);
    result.value = sum;
  }

  // clear inputs
  doubleOperation.checked = false;
  squareOperation.checked = false;
  indexOperation.checked = false;
  factorialOperation.checked = false;
  sumOfDigitsOperation.checked = false;
});

// Factorial
const factorial = (num) => {
  if (num === 1) {
    return 1;
  }

  return num * factorial(num - 1);
};
