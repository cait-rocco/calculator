var addBtn = document.getElementById("addBtn");
var subtractBtn = document.getElementById("subtractBtn");
var multiplyBtn = document.getElementById("multiplyBtn");
var divideBtn = document.getElementById("divideBtn")
var userNum1 = document.getElementById("firstNum");
var userNum2 = document.getElementById("secNum");
// var answer = document.getElementById("answer")

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply (num1, num2) {
  answer.innerHTML = num1 * num2;
}


/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add (num1, num2) {
  answer.innerHTML = Number(num1) + Number(num2);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract (num1, num2) {
  answer.innerHTML = num1 - num2;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide (num1, num2) {
  answer.innerHTML = num1 / num2;
}


/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation on them

  Return the value of the operation.
 */

function math (num1, num2, whichFunc) {
    return whichFunc(num1, num2);
}

addBtn.addEventListener("click", function(){
  math(userNum1.value, userNum2.value, add);
});
subtractBtn.addEventListener("click", function(){
  math(userNum1.value, userNum2.value, subtract);
});
multiplyBtn.addEventListener("click", function(){
  math(userNum1.value, userNum2.value, multiply);
});
divideBtn.addEventListener("click", function(){
  math(userNum1.value, userNum2.value, divide);
});