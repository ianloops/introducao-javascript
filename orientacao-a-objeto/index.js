class ContaBancaria{
    constructor(agencia, numero, tipo){
        this.agencia=agencia;
        this.numero=numero;
        this.tipo=tipo;
        this._saldo=0;
    }
    get saldo(){
        return this._saldo;
    }
    set saldo(valor){
        this._saldo=valor;
    }
    sacar(valor){
        if(saldo>=valor){
         this._saldo=this._saldo-valor;
         return this._saldo;
        } else {
            return "Saldo insuficiente";
        }
    }
    depositar(valor){
        this._saldo=this._saldo+valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria{
    constructor (agencia, numero, cartaoCredito){
        super(agencia, numero);
        this.tipo='conta corrente';
        this._cartaoCredito=cartaoCredito;
    }
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito=valor;
    }
}

class ContaPoupanca extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = "conta poupança";
    }
}
class ContaUniversitaria extends ContaBancaria{
    constructor (agencia, numero){
        super(agencia, numero);
        this.tipo = "conta universitária";
    }
    sacar(valor){
        if(valor<=500){
            this._saldo=this._saldo-valor;
            return this._saldo;
        } else {
            return "Valor acima do limite para conta universitária";
        }
    }
}