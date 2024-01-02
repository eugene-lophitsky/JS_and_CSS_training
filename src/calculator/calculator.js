let plusBtn = document.getElementById("plus");
let minusBtn = document.getElementById("minus");
let asteriskBtn = document.getElementById("asterisk");
let slashBtn = document.getElementById("slash");
let fieldOne = document.getElementById("digit1");
let fieldTwo = document.getElementById("digit2");
let result = document.getElementById("calculated");

function addition(e) {
  let valueOne = +fieldOne.value;
  let valueTwo = +fieldTwo.value;
  result.value = valueOne + valueTwo;
}

function substraction() {
  let valueOne = +fieldOne.value;
  let valueTwo = +fieldTwo.value;
  result.value = valueOne - valueTwo;
}

function multiplication() {
  let valueOne = +fieldOne.value;
  let valueTwo = +fieldTwo.value;
  result.value = valueOne * valueTwo;
}

function division() {
  let valueOne = +fieldOne.value;
  let valueTwo = +fieldTwo.value;
  result.value = valueOne / valueTwo;
}

plusBtn.addEventListener("click", addition);

minusBtn.addEventListener("click", substraction);

asteriskBtn.addEventListener("click", multiplication);

slashBtn.addEventListener("click", division);
