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
    if(currentNumber<10){    
        currentNumber++;
        if(currentNumber>=0){
            currentNumberWrapper.style = "color: black";
        }
        currentNumberWrapper.innerHTML = currentNumber;
    }
}
function decrement(){
    if(currentNumber>-10){    
        currentNumber--;
        if(currentNumber<0){
            currentNumberWrapper.style = "color : red";
        }
        currentNumberWrapper.innerHTML = currentNumber;
    }
}

var btnMais = document.getElementById("adicionar");
var btnMenos = document.getElementById("subtrair");
var currentNumberWrapper = document.getElementById("currentNumber");
var currentNumber = 0;

btnMais.addEventListener("click", increment);
btnMenos.addEventListener("click", decrement);