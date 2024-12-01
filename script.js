let buttonc = document.querySelector("#buttonc");
let button0 = document.querySelector("#button0");
let button1 = document.querySelector("#button1");
let button2 = document.querySelector("#button2");
let button3 = document.querySelector("#button3");
let button4 = document.querySelector("#button4");
let button5 = document.querySelector("#button5");
let button6 = document.querySelector("#button6");
let button7 = document.querySelector("#button7");
let button8 = document.querySelector("#button8");
let button9 = document.querySelector("#button9");
let buttonplus = document.querySelector("#buttonplus");
let buttonminus = document.querySelector("#buttonminus");
let buttonmultiply = document.querySelector("#buttonmultiplication");
let buttondivide = document.querySelector("#buttondivision");
let buttondot = document.querySelector("#buttondot");
let buttonequal = document.querySelector("#buttonequalsto");

let currentDisplay = " ";

document.querySelector("#display").value = currentDisplay;

buttonc.addEventListener("click", () => {
  currentDisplay = "";
  document.querySelector("#display").value = currentDisplay;
});
button0.addEventListener("click", () => {
  currentDisplay += "0";
  document.querySelector("#display").value = currentDisplay;
});
button1.addEventListener("click", () => {
  currentDisplay += "1";
  document.querySelector("#display").value = currentDisplay;
});
button2.addEventListener("click", () => {
  currentDisplay += "2";
  document.querySelector("#display").value = currentDisplay;
});
button3.addEventListener("click", () => {
  currentDisplay += "3";
  document.querySelector("#display").value = currentDisplay;
});
button4.addEventListener("click", () => {
  currentDisplay += "4";
  document.querySelector("#display").value = currentDisplay;
});
button5.addEventListener("click", () => {
  currentDisplay += "5";
  document.querySelector("#display").value = currentDisplay;
});
button6.addEventListener("click", () => {
  currentDisplay += "6";
  document.querySelector("#display").value = currentDisplay;
});
button7.addEventListener("click", () => {
  currentDisplay += "7";
  document.querySelector("#display").value = currentDisplay;
});
button8.addEventListener("click", () => {
  currentDisplay += "8";
  document.querySelector("#display").value = currentDisplay;
});
button9.addEventListener("click", () => {
  currentDisplay += "9";
  document.querySelector("#display").value = currentDisplay;
});
buttonplus.addEventListener("click", () => {
  currentDisplay += "+";
  document.querySelector("#display").value = currentDisplay;
});
buttonminus.addEventListener("click", () => {
  currentDisplay += "-";
  document.querySelector("#display").value = currentDisplay;
});
buttonmultiply.addEventListener("click", () => {
  currentDisplay += "*";
  document.querySelector("#display").value = currentDisplay;
});
buttondivide.addEventListener("click", () => {
  currentDisplay += "/";
  document.querySelector("#display").value = currentDisplay;
});
buttondot.addEventListener("click", () => {
  currentDisplay += ".";
  document.querySelector("#display").value = currentDisplay;
});
buttonequal.addEventListener("click", () => {
  let result = eval(currentDisplay);
  document.querySelector("#display").value = result;
});
