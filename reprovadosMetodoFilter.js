1 //EXEMPLO 1

//const nomes = ["Ana", "Marcos", " Maria"," Mauro"]

//const notas = [ 7, 4.5, 8 ,7.5 ]

//const reprovados= nomes.filter( (aluno,indice) => notas[indice] < 5 )

//console.log(reprovados)



2 // EXEMPLO 2

const nomes = [ "Ana", "Marcos", " Maria"," Mauro","Joao", "Carina", "Fran","uriel", "Juliano"]

const notas = [  8,8,9,10,7,3,7,1,10] 

const aprovados = nomes.filter ( ( aluno,indice)=>notas[indice] > 8 )

console.log(aprovados)



3 //EXEMPLO 3


const nomes = [ "Ana", "Marcos", " Maria"," Mauro","Joao", "Carina", "Fran","uriel", "Juliano"]

const notas = [  8,8,9,10,7,3,7,1,10] 

const aprovados = nomes.filter ( ( aluno,indice) =>notas[indice] > 8 )

const aprovadosNotas= notas.filter ( (nota,indice) =>notas[indice]> 8 )

console.log(aprovados,aprovadosNotas)
