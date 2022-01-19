
1. //EXEMPLO 1

const salajs = [ 7, 8 , 8 , 7 , 10 , 6.5, 4, 10, 7 ]
const salaJava = [ 6, 5 , 8 , 9 , 5 , 6 ]
const salaPython = [ 7, 3.5, 8, 9.5 ]


function mediaSala(NotasDasSala) {

    const SomaDasNotas = NotasDasSala.reduce((acumulador, atual) =>  
   atual + acumulador,0)
    return SomaDasNotas/NotasDasSala.length
} 

//console.log("Media da sala de javaScript " + mediaSala(salajs))
//console.log("Media da sala de Java " + mediaSala(salaJava))
//console.log("media da salad e JavaScript " + mediaSala(salaPython))



2. //EXEMPLO 2

const notas = [ 10, 6.5, 8, 7 ]
const media = notas.reduce((acum,atual) => atual + acum,0) / notas.length

//console.log(media)


3. // EXEMPLO 3 


const Ti = [1, 2, 3, 4]
const expedição = [5 , 6, 7, 8]
const rh = [ 9 ,10 ,11 ,12 ]


function mediaMvc (MediaDosSetores) {

    const somaDosSetores = MediaDosSetores.reduce ( (acum, atual) => atual + acum,0)

    return somaDosSetores/MediaDosSetores.length

} 

// console.log( "A média do Ti é " + mediaMvc(Ti))
//console.log("A média da expedição é " + mediaMvc(expedição))
// console.log("A média do rh é " + mediaMvc(rh))


 4. //EXEMPLO 4

 const pagamento = [ 100, 200, 300, 400]

 const media = pagamento.reduce((acum,atual) => atual + acum,0) / pagamento.length

 //console.log (media)



 


 
 