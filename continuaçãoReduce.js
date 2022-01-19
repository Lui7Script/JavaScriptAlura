
const numeros = [43, 50, 65, 12]


//EXEMPLO 1
const soma = numeros.reduce((acum, atual) => atual + acum, 0)
//console.log(soma) 


//EXEMPLO 2
const soma = numeros.reduce(function (acum, atual) {
    return atual + acum
   }, 0)


   //EXEMPLO 3
   function operacaoNumerica(acum, atual) {
    return atual + acum
   }
   
const soma = numeros.reduce(operacaoNumerica, 0)