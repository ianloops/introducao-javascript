function funcao(num1, num2){
    var iguais;
    num1===num2 ? iguais = 'são' : iguais = 'não são';
    var soma=num1+num2;
    if(soma<=10){
        alert(`Os números ${num1} e ${num2} ${iguais} iguais. Sua soma é ${soma}, que é menor que 10 e menor que 20`);
    }else if(soma>10 && soma<20){
        alert(`Os números ${num1} e ${num2} ${iguais} iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20`);
    }else{
        alert(`Os números ${num1} e ${num2} ${iguais} iguais. Sua soma é ${soma}, que é maior que 10 e maior que 20`);
    }
}
funcao(5,16);