const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const multiply = function (a, b) {
  return a * b;
};

const divide = function (a, b) {
  return a / b;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  } else {
    return a * factorial(a - 1);
  }
};

const operate = function (a, b, operator) {
  switch (operator) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
  }
};

var displayNumber;
function setNumber(a) {
  displayNumber = a;
  document.getElementById("screen").innerHTML += displayNumber;
}

var displayOperator;
function userOperator(a) {
  displayOperator = a;
  document.getElementById("screen").innerHTML += displayOperator;
}

function clearDisplay() {
  document.getElementById("screen").innerHTML = "";
}

function equal() {
  var x = eval(
    document.getElementById("screen").innerHTML.replace(/[^-()\d/*+.]/g, "")
  );
  document.getElementById("screen").innerHTML = x;
}

function removeLast() {
  return document.getElementById("screen").innerHTML.slice(0, -1);
}
