//Solução 1
function palindromo(string){
    if(!string){
        return "String Inexistente";
    }else{
        for(let i = 0;i<string.length/2; i++){
            if(string[i]!=string[string.length-i-1]){
                return false;
            }
        }
        return true;
    }
}
//console.log(palindromo("abba"));

//Solução 2
function palindromo2(string){
    if(!string){
        return "String Inexistente"
    } else{ 
        let string1=string.split(" ").join("").split("").join("");
        let string2=string.split(" ").join("").split("").reverse().join("");
        if(string1===string2){
            return true;
        } else{
            return false;
        }
    }
}
console.log(palindromo2("roma me tem amor"));