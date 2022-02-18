function cliente (nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar =  function(valor){
        this.saldo += valor;
    }
}

const Andre = new cliente ("Andre" , "000 000 000 77" , "gusta2010@yahoo.com" , 100)


function clientePoupanca (nome, cpf, email,saldo, poupanca){
cliente.call (this, nome, cpf, email, saldo)
this.poupanca = poupanca
}

const ju = new clientePoupanca("Ju" , "777 777 777 77" , "ju@email.com" , 100 , 200)