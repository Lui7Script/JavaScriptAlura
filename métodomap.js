

//const notas = [ 10,9,8,7,6]

//const notasAtualizadas = notas.map(nota => nota + 1)

//console.log(notas Atualizadas)

 

1 //METODO MAP COM OPERADOR TERNÁRIO = IF

const notas = [10,9,8,7,6]

const novasNotas = notas.map( nota => nota ==10 ? 
    nota : nota +1 )

//    console.log(novasNotas)



2 // ALTERANDO STRING COM MAP


const nomes = ["ana Julia" , " Caio Vinicius" , "BIA silva"]

const nomesAtualizados = nomes.map(nome => nome.toUpperCase())

// console.log(nomesAtualizados)


3. //Alterando usando o ToLowerCase

const nomes = [  "ANA", "PEDRO", "MARCOS"]

const nomesAtualizados = nomes.map( nome => nome.toLowerCase())

//console.log(nomesAtualizados)
