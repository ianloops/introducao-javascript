const eu = {
    nome:"ian",
    idade:25
}
const namorada = {
    nome:"rafa",
    idade:24
}
const cachorro = {
    nome:"scooby",
    idade:0
}
const irmao = {
    nome:"igor",
    idade:27
}

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.call(irmao, 3));
console.log(calculaIdade.apply(namorada, [6]));