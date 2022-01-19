
1.//For-Each\\
const notas = [10, 6.5,8,7.5]
let SomaDasNotas = 0
notas.forEach( nota => {
SomaDasNotas += nota
})
let media=SomaDasNotas/notas.length     
//console.log(media)


2.//FUNÇÔES-CALLBACKS\\
const notas = [1,2,3,4,5,6,7,8]
let SomaDasNotas = 0 
notas.forEach(function(nota){
SomaDasNotas +=nota
})
let media = SomaDasNotas/notas.length
//console.log(media)


3.//Revisando-CallBacks\\
const nomes = ["Ana", "Ju","Leo","Paula"]
nomes.forEach(imprimeNomes)
function imprimeNomes(nome){
//console.log(nome)
}


4.//Outro-Exemplo\\
const nomes = ["Luiz","Pedro","Marcos","Samuel"]
nomes.forEach(imprimeNomes)
function imprimeNomes(nome){
//console.log(nome)
}

