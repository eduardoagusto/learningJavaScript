function multiply() {
    var firstInput = document.querySelector(".firstNumber");
    var secondInput = document.querySelector(".secondNumber");
    document.querySelector(".result").innerHTML = firstInput.value * secondInput.value;
}
  
function divide() {
    var firstInput = document.querySelector(".firstNumber");
    var secondInput = document.querySelector(".secondNumber");
    document.querySelector(".result").innerHTML = firstInput.value / secondInput.value;
}