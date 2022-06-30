function calculadora(){
    const operacao = Number(prompt('Escolha a operação que deseja efetuar:\n1 - Soma(+)\n2 - Subtração(-)\n3 - Multiplicação(*)\n4 - Divisão Real(/)\n5 - Resto da divisão(%)\n6 - Potenciação(**)'));

    if(!operacao || operacao>=7 || operacao<=0){
        alert('Operação inválida');
        calculadora();
    } else {
        let n1 = Number(prompt('Insira o primeiro valor:'));
        let n2 = Number(prompt('Insira o segundo valor'));
        let resultado;

        if(!n1 || !n2){
            alert('Valores inválidos');
            calculadora();
        }else{
            function soma() {
                resultado = n1+n2;
                alert(`${n1} + ${n2} = ${resultado}`);
                novaOperacao();
            }
            function subtracao() {
                resultado = n1-n2;
                alert(`${n1} - ${n2} = ${resultado}`);
                novaOperacao();
            }
            function multiplicacao() {
                resultado = n1*n2;
                alert(`${n1} * ${n2} = ${resultado}`);
                novaOperacao();
            }
            function divisao() {
                if(n2!=0){
                    resultado = n1/n2;
                    alert(`${n1} / ${n2} = ${resultado}`);
                    novaOperacao();
                }else{
                    alert('O segundo valor da divisão não pode ser 0!');
                    novaOperacao();
                }
            }
            function resto() {
                resultado = n1%n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é ${resultado}`);
                novaOperacao();
            }
            function potenciacao() {
                resultado = n1**n2;
                alert(`${n1} elevado a ${n2} é ${resultado}`);
                novaOperacao();
            }

            function novaOperacao(){
                let opcao = prompt('Deseja fazer uma nova operação?\n1 - Sim\n2 - Não');
                if(opcao==1){
                    calculadora();
                }else if(opcao==2){
                    alert('Até mais!');
                } else{
                    alert('Opção inválida, digite novamente');
                    novaOperacao();
                }
            }

            switch(operacao){
                case 1:
                    soma();
                    break;
                case 2:
                    subtracao();
                    break;
                case 3:
                    multiplicacao();
                    break;
                case 4: 
                    divisao();
                    break;
                case 5:
                    resto();
                    break;
                case 6:
                    potenciacao();
                    break;
            }
        }
    }
}



calculadora();