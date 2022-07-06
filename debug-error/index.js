function erros(array, num){
    try {
        if(!array || !num) throw new ReferenceError("Algum parâmetro não foi enviado");
        
        if(typeof(array)!="object") throw new TypeError("array não é do tipo object");
        
        if(typeof(num)!="number") throw new TypeError("num não é do tipo number");
        
        if(array.length !== num) throw new RangeError("O tamanho do array é diferente de num");

        console.log(array);
        return 0;
    } catch (e) {
        if (e instanceof ReferenceError){
            console.log("Este erro é um ReferenceError!");
            console.log(e.message);
        } else if (e instanceof TypeError){
            console.log("Este erro é um TypeError!");
            console.log(e.message);
        } else if (e instanceof RangeError){
            console.log("Este erro é um RangeError!");
            console.log(e.message);
        } else {
            console.log("Tipo de erro não esperado: " + e);
        }
    }
}
erros([1, 2, 3, 4, 5 ], 5);