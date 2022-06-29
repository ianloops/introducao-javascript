/*var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

function increment(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}*/

function increment(){
    currentNumber++;
    currentNumberWrapper.innerHTML = currentNumber;
}
function decrement(){
    currentNumber--;
    currentNumberWrapper.innerHTML = currentNumber;
}

var btnMais = document.getElementById("adicionar");
var btnMenos = document.getElementById("subtrair");
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

btnMais.addEventListener("click", increment);
btnMenos.addEventListener("click", decrement);